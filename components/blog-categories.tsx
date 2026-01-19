import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getAllPosts } from "@/lib/blog"

// FUTURE: use #9668FF color for story set illustrations
const categories = [
  {
    name: "AI & Automation",
    slug: "ai-automation",
    description: "AI tools, automation workflows, and intelligent systems",
    image: "/media/categories/ai.svg"
  },
  {
    name: "Startup & MVP",
    slug: "startup-mvp",
    description: "Building MVPs, startup strategies, and product development",
    image: "/media/categories/startup.svg"
  },
  {
    name: "Digital Growth",
    slug: "digital-growth",
    description: "Marketing, analytics, SEO, and growth strategies",
    image: "/media/categories/growth.svg"
  },
  {
    name: "Technical Deep-Dive",
    slug: "technical-deep-dive",
    description: "In-depth technical tutorials and system architecture",
    image: "/media/categories/technical.svg"
  },
  {
    name: "Mobile & Apps",
    slug: "mobile-apps",
    description: "Mobile development, app design, and cross-platform solutions",
    image: "/media/categories/mobile.svg"
  },
  {
    name: "Developer Insights",
    slug: "developer-insights",
    description: "Best practices, developer tools, and productivity tips",
    image: "/media/categories/developer.svg"
  }
]

export default async function BlogCategories() {
  const allPosts = await getAllPosts()
  const categoriesWithCounts = categories.map((category) => ({
    ...category,
    count: allPosts.filter((post) => post.categorySlug === category.slug).length,
  }))
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Browse by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore articles organized by technology and topic areas.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categoriesWithCounts.map((category) => (
            <Link
              key={category.slug}
              href={`/${category.slug.toLowerCase()}`}
              aria-label={`Browse ${category.name} articles`}
            >
              <Card className="group flex h-full flex-col overflow-hidden rounded-[20px] border-2 border-[#EBEBEB] bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <CardContent className="flex h-full flex-col gap-6 p-6">
                  <div className="flex h-full items-start gap-4">
                    <div className="flex h-full w-20 sm:w-28 items-center justify-center">
                      <Image
                        src={category.image}
                        alt={`${category.name} icon`}
                        width={32}
                        height={32}
                        className="h-full w-full"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="mb-2 flex items-start justify-between">
                        <h3 className="text-xl font-semibold transition-colors group-hover:text-indigo-600">
                          {category.name}
                        </h3>
                        <Badge variant="secondary" className="border border-gray-200 bg-gray-100 text-xs text-gray-700">
                          {category.count}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-auto flex items-center justify-between text-xs font-semibold uppercase tracking-[0.25em] text-indigo-500">
                    Explore
                    <span className="h-1 w-10 rounded-full bg-gradient-to-r from-indigo-500 via-indigo-400 to-indigo-600 transition-all duration-300 group-hover:w-16" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}