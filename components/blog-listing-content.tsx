"use client"

import React, { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import BlogPostCard from "@/components/blog-post-card"
import BlogFilters from "@/components/blog-filters"
import BlogPagination from "@/components/blog-pagination"
import ArrowRightIcon from "@/components/icons/ArrowRight"
import { BlogPost } from "@/lib/blog"

interface BlogListingContentProps {
  allPosts: BlogPost[]
  initialCategory?: string
}

// Helper to convert category name to URL slug
function categoryToSlug(category: string): string {
  return category
    .toLowerCase()
    .replace(/&/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .replace(/^-|-$/g, '')
}

export default function BlogListingContent({ allPosts, initialCategory }: BlogListingContentProps) {
  const pathname = usePathname()
  const [categories, setCategories] = useState<string[]>(["All"])
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || "All")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 9

  // Initialize categories list
  useEffect(() => {
    const uniqueCategories = Array.from(new Set(allPosts.map(post => post.category))).sort()
    setCategories(["All", ...uniqueCategories])
  }, [allPosts])

  // Sync with initialCategory when it changes (e.g., direct navigation)
  useEffect(() => {
    if (initialCategory !== undefined) {
      setSelectedCategory(initialCategory || "All")
    }
  }, [initialCategory])

  // Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      // When user clicks back/forward, sync category from URL
      const path = window.location.pathname
      if (path === '/blog/all') {
        setSelectedCategory("All")
      } else {
        // Find matching category from path
        const slug = path.replace('/blog/', '')
        const matchedCategory = categories.find(cat => categoryToSlug(cat) === slug)
        if (matchedCategory) {
          setSelectedCategory(matchedCategory)
        }
      }
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [categories])

  // Reset page when category or search changes
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategory, searchQuery])

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setCurrentPage(1)

    // Update URL without full navigation (shallow update)
    const newPath = category === "All" ? "/blog/all" : `/blog/${categoryToSlug(category)}`
    window.history.pushState(null, '', newPath)
  }

  const filteredPosts = useMemo(() => {
    return allPosts.filter((post) => {
      const categoryMatch = selectedCategory === "All" || post.category === selectedCategory
      const query = searchQuery.trim().toLowerCase()
      const searchMatch =
        query.length === 0 ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.author.toLowerCase().includes(query)

      return categoryMatch && searchMatch
    })
  }, [allPosts, searchQuery, selectedCategory])

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const currentPosts = filteredPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)
  const showingRangeStart = filteredPosts.length === 0 ? 0 : (currentPage - 1) * postsPerPage + 1
  const showingRangeEnd = Math.min(currentPage * postsPerPage, filteredPosts.length)
  const isFiltering = selectedCategory !== "All" || searchQuery.trim().length > 0

  return (
    <section className="relative isolate px-6 py-16 sm:px-24 sm:py-20">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-indigo-500">Browse</p>
              <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl dark:text-white">
                {selectedCategory === "All" ? "All articles" : selectedCategory}
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                {filteredPosts.length === 0
                  ? "No matches yet — adjust your filters to discover more articles."
                  : `Showing ${showingRangeStart} – ${showingRangeEnd} of ${filteredPosts.length} curated stories.`}
              </p>
            </div>
            {isFiltering && (
              <button
                onClick={() => {
                  setSelectedCategory("All")
                  setSearchQuery("")
                  setCurrentPage(1)
                  window.history.pushState(null, '', '/blog/all')
                }}
                className="self-start inline-flex items-center gap-2 rounded-full border-2 border-indigo-600 bg-white px-1 py-1 pl-4 text-sm font-semibold text-indigo-600 transition-all duration-300 hover:bg-indigo-50"
              >
                Show All Articles
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-full text-white"
                  style={{
                    backgroundImage:
                      "linear-gradient(323deg, rgba(90,68,255,1) 0%, rgba(125,113,255,1) 27%, rgba(124,128,255,1) 48%, rgba(0,0,153,1) 100%)",
                    backgroundPosition: "center center"
                  }}
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
              </button>
            )}
          </div>

          <BlogFilters
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </div>

        {currentPosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              {currentPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="mt-10">
                <BlogPagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={(page) => {
                    setCurrentPage(page)
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                />
              </div>
            )}
          </>
        ) : (
          <div className="flex flex-col items-center gap-6 rounded-[28px] border-2 border-dashed border-indigo-200 bg-indigo-50/40 p-12 text-center dark:border-indigo-500/40 dark:bg-indigo-500/10">
            <span className="text-5xl">🧭</span>
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Nothing matches your filters yet
              </h3>
              <p className="text-sm text-gray-500">
                Expand your search or reset the filters to explore our full archive of stories.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => {
                  setSelectedCategory("All")
                  setSearchQuery("")
                  setCurrentPage(1)
                  window.history.pushState(null, '', '/blog/all')
                }}
                className="inline-flex items-center gap-2 rounded-full border-2 border-indigo-600 bg-white px-1 py-1 pl-5 text-sm font-semibold text-indigo-600 transition-all duration-300 hover:bg-indigo-50"
              >
                Show All Articles
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full text-white"
                  style={{
                    backgroundImage:
                      "linear-gradient(323deg, rgba(90,68,255,1) 0%, rgba(125,113,255,1) 27%, rgba(124,128,255,1) 48%, rgba(0,0,153,1) 100%)",
                    backgroundPosition: "center center"
                  }}
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </span>
              </button>
              <Link
                href="/blog#newsletter"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#EBEBEB] px-6 py-2 text-sm font-semibold text-gray-600 transition-colors hover:border-indigo-500 hover:text-indigo-600"
              >
                Get fresh articles
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}