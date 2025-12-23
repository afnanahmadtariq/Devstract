interface Env {
    EMAILJS_SERVICE_ID: string;
    EMAILJS_TEMPLATE_ID: string;
    EMAILJS_PUBLIC_KEY: string;
    EMAILJS_PRIVATE_KEY: string;
}

export async function onRequestPost(context: { request: Request; env: Env }) {
    const { request, env } = context;

    try {
        const { name, email, message } = await request.json() as any;

        // EmailJS REST API endpoint
        const url = 'https://api.emailjs.com/api/v1.0/email/send';

        // Access environment variables from the context
        const service_id = env.EMAILJS_SERVICE_ID;
        const template_id = env.EMAILJS_TEMPLATE_ID;
        const user_id = env.EMAILJS_PUBLIC_KEY;
        const accessToken = env.EMAILJS_PRIVATE_KEY;

        if (!service_id || !template_id || !user_id) {
            return new Response(JSON.stringify({ error: 'EmailJS environment variables not set.' }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const payload = {
            service_id,
            template_id,
            user_id,
            template_params: {
                name,
                email,
                message,
            },
            accessToken,
        };

        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        if (!res.ok) {
            const error = await res.text();
            console.error('EmailJS error:', error);
            return new Response(JSON.stringify({ error }), {
                status: res.status,
                headers: { 'Content-Type': 'application/json' }
            });
        }
        return new Response(JSON.stringify({ success: true }), {
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to send email.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
