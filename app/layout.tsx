import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: "Devstract",
    template: "%s | Devstract",
  },
  description: "We build next-generation web and mobile solutions for forward-thinking businesses.",
  keywords: ["web development", "mobile development", "software solutions", "UI/UX design", "cloud services"],
  icons: {
    icon: ['/images/logo.svg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
