import { NextRequest, NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  const databaseUrl = process.env.DATABASE_URL;
  
  if (!databaseUrl) {
    return NextResponse.json({ error: 'Database connection string not set.' }, { status: 500 });
  }

  try {
    const { email } = await req.json();
    
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Invalid email.' }, { status: 400 });
    }

    const sql = neon(databaseUrl);
    
    // Check if email already exists
    const existingResult = await sql`
      SELECT email FROM subscribers WHERE email = ${email}
    `;
    
    if (existingResult.length > 0) {
      return NextResponse.json({ error: 'Email already subscribed.' }, { status: 409 });
    }
    
    // Insert new subscriber
    await sql`
      INSERT INTO subscribers (email, subscribed_at) 
      VALUES (${email}, ${new Date().toISOString()})
    `;
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json({ error: 'Failed to subscribe.' }, { status: 500 });
  }
}
