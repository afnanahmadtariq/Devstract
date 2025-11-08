import { NextRequest, NextResponse } from 'next/server';
import { Pool } from '@neondatabase/serverless';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  const connectionString = process.env.DATABASE_URL;
  
  if (!connectionString) {
    return NextResponse.json({ error: 'Database connection string not set.' }, { status: 500 });
  }

  try {
    const { email } = await req.json();
    
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Invalid email.' }, { status: 400 });
    }

    const pool = new Pool({ connectionString });
    
    // Check if email already exists
    const existingResult = await pool.query(
      'SELECT email FROM subscribers WHERE email = $1',
      [email]
    );
    
    if (existingResult.rows.length > 0) {
      await pool.end();
      return NextResponse.json({ error: 'Email already subscribed.' }, { status: 409 });
    }
    
    // Insert new subscriber
    await pool.query(
      'INSERT INTO subscribers (email, subscribed_at) VALUES ($1, $2)',
      [email, new Date()]
    );
    
    await pool.end();
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json({ error: 'Failed to subscribe.' }, { status: 500 });
  }
}
