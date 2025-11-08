import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

export const runtime = 'edge';

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || 'testing';

export async function POST(req: NextRequest) {
  if (!uri) {
    return NextResponse.json({ error: 'MongoDB connection string not set.' }, { status: 500 });
  }
  try {
    const { email } = await req.json();
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Invalid email.' }, { status: 400 });
    }
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('subscribers');
    // Prevent duplicate emails
    const existing = await collection.findOne({ email });
    if (existing) {
      await client.close();
      return NextResponse.json({ error: 'Email already subscribed.' }, { status: 409 });
    }
    await collection.insertOne({ email, subscribedAt: new Date() });
    await client.close();
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to subscribe.' }, { status: 500 });
  }
}
