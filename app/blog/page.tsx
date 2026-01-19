import React from "react"
import Link from "next/link"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollToTopButton from "@/components/scroll-to-top-button"
import RecentPosts from "@/components/recent-posts"
import BlogCategories from "@/components/blog-categories"
import Newsletter from "@/components/newsletter"
import FeaturedArticlesSlider from "@/components/featured-articles-slider"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import ArrowRightIcon from "@/components/icons/ArrowRight"
import { getAllPosts } from "@/lib/blog"

export default async function BlogHome() {
  const allPosts = await getAllPosts()

  // Get one latest post from each category for featured slider
  // const categories = ['ai-automation', 'startup-mvp', 'digital-growth', 'technical-deep-dive', 'mobile-apps', 'developer-insights']
  // const featuredPosts = categories
  //   .map(categorySlug => allPosts.find(post => post.categorySlug === categorySlug))
  //   .filter(post => post !== undefined) // Remove any undefined if a category has no posts

  // Select specific posts to feature in the slider
  const featuredSlugs = [
    "whatsapp-crm-integration-guide",
    "developer-productivity-hacks",
    "conversion-rate-optimization-guide",
    "mobile-apps-trends-2025",
    "hidden-costs-low-code",
    "building-scalable-architecture-without-in-house-team",
  ];

  // Filter allPosts to only include valid posts that match the featured slugs
  const featuredPosts = featuredSlugs
    .map(slug => allPosts.find(post => post.slug === slug))
    .filter((post): post is NonNullable<typeof post> => post !== undefined);


  const teamMembers = [
    { id: 1, image: "/media/team/sarah.png", name: "Sarah" },
    { id: 2, image: "/media/team/mike.png", name: "Mike" },
    { id: 3, image: "/media/team/emma.png", name: "Emma" },
    { id: 4, image: "/media/team/alex.png", name: "Alex" },
    { id: 5, image: "/media/team/lisa.png", name: "Lisa" },
  ];

  return (
    <main className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <Navigation />

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden py-16 sm:py-24">
        <div className="container mx-auto px-6 sm:px-20">
          <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] lg:items-center lg:gap-14">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-[#EBEBEB] bg-white px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-indigo-600 shadow-sm dark:border-indigo-500/40 dark:bg-indigo-500/10 dark:text-indigo-200">
                Fresh perspectives on building digital experiences
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
                Devstract Blog
              </h1>
              <p className="mt-6 max-w-xl text-lg text-gray-600 sm:text-xl dark:text-gray-300">
                Discover the latest insights in web development, mobile apps, cloud services, and cutting-edge technology from our team of experts.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4 justify-center lg:justify-start">
                <Link
                  href="/blog/all"
                  className="group flex items-center gap-2 rounded-full border-2 border-indigo-600 bg-white px-2 py-1 text-sm font-semibold text-indigo-600 shadow-[0_25px_55px_-25px_rgba(79,70,229,0.65)] transition-all duration-300 hover:shadow-[0_30px_70px_-28px_rgba(79,70,229,0.75)] dark:bg-indigo-500/20 dark:text-indigo-100"
                >
                  <span className="px-6 py-2">Explore articles</span>
                  <span
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white transition-transform duration-300 group-hover:translate-x-1"
                    style={{
                      backgroundImage:
                        "linear-gradient(323deg, rgba(90,68,255,1) 0%, rgba(125,113,255,1) 27%, rgba(124,128,255,1) 48%, rgba(0,0,153,1) 100%)",
                      backgroundPosition: "center center",
                    }}
                  >
                    <ArrowRightIcon className="h-4 w-4" />
                  </span>
                </Link>
                <Link
                  href="/blog#newsletter"
                  className="group flex items-center gap-2 rounded-full border-2 border-[#EBEBEB] bg-white/90 px-2 py-1 text-sm font-semibold text-gray-700 shadow-sm backdrop-blur transition-all duration-300 hover:border-indigo-500 hover:text-indigo-600"
                >
                  <span className="px-6 py-2">Join the newsletter</span>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors duration-300 group-hover:bg-indigo-600 group-hover:text-white dark:bg-indigo-500/40 dark:text-indigo-100">
                    <ArrowRightIcon className="h-4 w-4" />
                  </span>
                </Link>
              </div>

              <div className="mt-8 flex w-full flex-col items-center gap-4 text-sm text-gray-600 dark:text-gray-300 sm:flex-row sm:items-center sm:justify-start">
                <div className="flex -space-x-4">
                  {teamMembers.map((member) => (
                    <Avatar key={member.id} className="h-12 w-12 border-2 border-white bg-indigo-100 shadow-sm dark:border-gray-900 dark:bg-indigo-500/30">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <span className="max-w-sm text-center text-sm leading-relaxed text-gray-500 dark:text-gray-400 sm:text-left">
                  Crafted by a multidisciplinary team of builders and designers who ship products for the modern web.
                </span>
              </div>
            </div>

            <FeaturedArticlesSlider layout="compact" className="lg:ml-auto lg:w-full" posts={featuredPosts} />
          </div>
        </div>
      </section>

      <section className="relative isolate flex flex-col items-center justify-center overflow-hidden px-6 py-16 sm:py-24">
        <div className="flex w-full max-w-6xl flex-col gap-12">
          <BlogCategories />
          <RecentPosts posts={allPosts.slice(0, 6)} />
          <div id="newsletter" className="scroll-mt-24">
            <Newsletter />
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </main>
  )
}
