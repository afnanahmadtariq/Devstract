    import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: {
        default: "Blog | Devstract",
        template: "%s | Devstract Blog",
    },
    description: "Stay updated with the latest in web development, mobile apps, cloud services, and tech insights from the Devstract team.",
    keywords: ["blog", "web development", "mobile development", "tech articles", "programming", "cloud services", "UI/UX", "software engineering"],
    authors: [{ name: "Devstract Team" }],
    creator: "Devstract",
    publisher: "Devstract",
    robots: {
        index: true,
        follow: true,
    },
}

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
