import React, { Suspense } from "react"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollToTopButton from "@/components/scroll-to-top-button"
import BlogListingContent from "@/components/blog-listing-content"
import { getAllPosts, getAllCategories } from "@/lib/blog"

interface CategoryPageProps {
  params: Promise<{ category: string }>
}

// Generate static params for all categories + the "all" route
export async function generateStaticParams() {
  const categories = getAllCategories()
  return [
    { category: 'all' }, // Special route for all posts
    ...categories.map((cat) => ({
      category: cat.slug,
    }))
  ]
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params

  // Handle "all" as the all-posts page
  if (category === 'all') {
    return {
      title: "Blog | Devstract - Tech Insights & Development Guides",
      description: "Explore in-depth articles on AI, web development, startups, and modern tech. Expert insights for founders, developers, and tech leaders.",
      alternates: {
        canonical: "https://www.devstract.site/blog/all/",
      },
      openGraph: {
        title: "Blog | Devstract",
        description: "Explore in-depth articles on AI, web development, startups, and modern tech.",
        url: "https://www.devstract.site/blog/all/",
        type: 'website',
      }
    }
  }

  const categories = getAllCategories()
  const categoryInfo = categories.find(c => c.slug === category)

  if (!categoryInfo) {
    return { title: 'Category Not Found' }
  }

  return {
    title: `${categoryInfo.name} Articles | Devstract Blog`,
    description: `Explore our ${categoryInfo.name} articles. In-depth guides, tutorials, and insights for developers and tech leaders.`,
    alternates: {
      canonical: `https://www.devstract.site/blog/${category}/`,
    },
    openGraph: {
      title: `${categoryInfo.name} Articles | Devstract Blog`,
      description: `Explore our ${categoryInfo.name} articles. In-depth guides, tutorials, and insights.`,
      url: `https://www.devstract.site/blog/${category}/`,
      type: 'website',
    }
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params

  // Handle "all" as showing all posts
  if (category === 'all') {
    const allPosts = getAllPosts()
    return (
      <main className="flex min-h-screen flex-col bg-white dark:bg-gray-900">
        <Navigation />
        <h1 className="sr-only">All Blogs | Devstract - Tech Insights & Development Guides</h1>
        <Suspense fallback={<div className="text-center py-12">Loading...</div>}>
          <BlogListingContent allPosts={allPosts} />
        </Suspense>
        <Footer />
        <ScrollToTopButton />
      </main>
    )
  }

  // Check if this is a valid category
  const categories = getAllCategories()
  const categoryInfo = categories.find(c => c.slug === category)

  // If not a valid category, return 404
  if (!categoryInfo) {
    notFound()
  }

  // Get all posts (we filter client-side for consistency)
  const allPosts = getAllPosts()

  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-gray-900">
      <Navigation />
      <h1 className="sr-only">{categoryInfo.name} Articles | Devstract Blog</h1>
      <Suspense fallback={<div className="text-center py-12">Loading...</div>}>
        <BlogListingContent
          allPosts={allPosts}
          initialCategory={categoryInfo.name}
        />
      </Suspense>
      <Footer />
      <ScrollToTopButton />
    </main>
  )
}