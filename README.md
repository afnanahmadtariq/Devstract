# Devstract

Modern business website built with Next.js 15, React 19, Tailwind CSS, and Radix UI.

## Live

- Main (branch: `main`): [devstract.vercel.app](https://devstract.vercel.app)
- Variant 2 – Hero v2 (branch: `hero-2`): [devstract-hero2.vercel.app](https://devstract-hero2.vercel.app)

## Features

- App Router (Next.js 15) with SEO-friendly pages
- Responsive UI with Tailwind CSS and Radix primitives
- Two hero variants (main and hero-2)
- Contact form via EmailJS (`/api/send-email`)
- Newsletter subscribe via MongoDB (`/api/subscribe`)
- Analytics and performance: Vercel Analytics + Speed Insights
- Auto sitemap/robots with `next-sitemap`

## Tech Stack

- Next.js 15, React 19
- Tailwind CSS, class-variance-authority, tailwind-merge
- Radix UI, lucide-react, framer-motion
- MongoDB (serverless driver)
- Deployed on Vercel

## Getting Started (local)

Prereqs: Node 18+ and pnpm (recommended).

1) Install deps
	- `pnpm install`
2) Add environment variables (create `.env.local` at project root)
3) Run dev server
	- `pnpm dev` (http://localhost:3000)

## Environment Variables

Add the following to `.env.local` (do not commit secrets):

```
# EmailJS (Contact form)
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
EMAILJS_PUBLIC_KEY=your_public_key
# Optional private key if your EmailJS template requires it
EMAILJS_PRIVATE_KEY=your_private_key

# MongoDB (Newsletter subscribe)
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net
# Optional (defaults to "testing")
MONGODB_DB=devstract
```

APIs used:
- `POST /api/send-email` → sends contact messages via EmailJS
- `POST /api/subscribe` → saves email to `subscribers` collection

## Scripts

- `pnpm dev` → Start dev server
- `pnpm build` → Build for production
- `pnpm start` → Start production server
- `pnpm lint` → Lint
- `pnpm postbuild` → Generate sitemap/robots via `next-sitemap`

## Structure (high level)

- `app/` – App Router pages and API routes
  - `api/send-email/route.ts` – EmailJS contact endpoint
  - `api/subscribe/route.ts` – MongoDB subscribe endpoint
- `components/` – UI and section components
- `public/` – Static assets
- `tailwind.config.ts` – Tailwind setup

## SEO & Analytics

- `next-sitemap.config.js` controls sitemap generation
- `@vercel/analytics` and `@vercel/speed-insights` enabled in `app/layout.tsx`

## Variant: Hero v2

The `hero-2` branch ships an alternative hero design. See it live at [devstract-hero2.vercel.app](https://devstract-hero2.vercel.app).

## Deployment

Vercel is recommended. Set the env vars above in the Vercel project settings for each environment (Preview/Production). The build command is `pnpm build` and output is handled by Next.js.

## License

GNU – see `LICENSE`.

