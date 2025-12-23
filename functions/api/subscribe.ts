import { neon } from '@neondatabase/serverless';

interface Env {
    DATABASE_URL: string;
}

export async function onRequestPost(context: { request: Request; env: Env }) {
    const databaseUrl = context.env.DATABASE_URL;

    if (!databaseUrl) {
        return new Response(JSON.stringify({ error: 'Database connection string not set.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    try {
        const { email } = await context.request.json() as { email: any };

        if (!email || typeof email !== 'string') {
            return new Response(JSON.stringify({ error: 'Invalid email.' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const sql = neon(databaseUrl);

        // Check if email already exists
        const existingResult = await sql`
          SELECT email FROM subscribers WHERE email = ${email}
        `;

        if (existingResult.length > 0) {
            return new Response(JSON.stringify({ error: 'Email already subscribed.' }), {
                status: 409,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Insert new subscriber
        await sql`
          INSERT INTO subscribers (email, subscribed_at) 
          VALUES (${email}, ${new Date().toISOString()})
        `;

        return new Response(JSON.stringify({ success: true }), {
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error('Subscription error:', error);
        return new Response(JSON.stringify({ error: 'Failed to subscribe.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
