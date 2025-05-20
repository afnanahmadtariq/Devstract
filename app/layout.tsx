import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Devstract",
    template: "%s | Devstract",
  },
  description: "We build next-generation web and mobile solutions for forward-thinking businesses.",
  keywords: ["web development", "mobile development", "software solutions", "UI/UX design", "cloud services"],
  icons: {
    icon: [
      {
        url: '/images/D logo b.png',
        media: '(prefers-color-scheme: light)'
      },
      {
        url: '/images/D logo w.png',
        media: '(prefers-color-scheme: dark)'
      }
    ],
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.devstract.site" />
        <meta property="og:title" content="Devstract" />
        <meta property="og:description" content="We build next-generation web and mobile solutions for forward-thinking businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.devstract.site" />
        <meta property="og:image" content="https://www.devstract.site/images/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Devstract" />
        <meta name="twitter:description" content="We build next-generation web and mobile solutions for forward-thinking businesses." />
        <meta name="twitter:image" content="https://www.devstract.site/images/logo.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Devstract',
            url: 'https://www.devstract.site',
            logo: 'https://www.devstract.site/images/logo.png',
            sameAs: [
              'https://www.linkedin.com/company/devstract',
              'https://twitter.com/devstract',
            ],
          })}
        </script>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-white flex flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
      <SpeedInsights/>
      <Analytics/>
    </html>
  )
}