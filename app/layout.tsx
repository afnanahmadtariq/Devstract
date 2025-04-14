import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

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
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-gray-950 text-white flex flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'