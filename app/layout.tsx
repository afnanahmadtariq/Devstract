import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Devstract | Next-Generation Web and Mobile Solutions",
  description:
    "From cutting-edge web applications to innovative mobile experiences, our expert team delivers custom solutions across popular frameworks.",
  keywords:
    "web development, mobile app development, React, Angular, Vue, Node.js, Flutter, React Native, UX/UI design, cloud, DevOps",
  openGraph: {
    title: "Devstract | Next-Generation Web and Mobile Solutions",
    description:
      "From cutting-edge web applications to innovative mobile experiences, our expert team delivers custom solutions across popular frameworks.",
    url: "https://devstract.com",
    siteName: "Devstract",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Devstract - Next-Generation Web and Mobile Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'