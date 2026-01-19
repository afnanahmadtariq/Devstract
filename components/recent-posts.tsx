import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, User, Calendar } from "lucide-react"
import { BlogPost } from "@/lib/blog"
import { formatDate } from "@/lib/utils"

interface RecentPostsProps {
  posts: BlogPost[]
}

export default function RecentPosts({ posts }: RecentPostsProps) {
  const recentPosts = posts.slice(0, 6)

  if (recentPosts.length === 0) {
    return null
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Latest Articles
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay up to date with our latest insights and tutorials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.categorySlug}/${post.slug}`} className="block" aria-label={`Read ${post.title}`}>
              <Card className="group hover:shadow-2xl transition-all duration-500 border-2 border-[#EBEBEB] hover:-translate-y-2 rounded-[20px] bg-white overflow-hidden cursor-pointer">
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-white/90 text-indigo-600 hover:bg-white border-0 backdrop-blur-md shadow-sm">
                      {post.category}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {formatDate(post.publishedAt, "short")}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 line-clamp-3">
                    {post.excerpt}
                  </p>
                </CardContent>

                <CardFooter className="p-3 pt-0">
                  <div className="w-full flex items-center justify-center gap-2 p-1 text-sm font-medium bg-transparent min-h-[44px]">
                    <span className="px-4 py-2 flex-1">
                      Read More
                    </span>
                    <span
                      className="inline-flex items-center justify-center w-7 h-7 rounded-full mr-1"
                      style={{
                        backgroundImage: 'linear-gradient(323deg, rgba(90,68,255,1.00) 0%,rgba(125,113,255,1.00) 27%,rgba(124,128,255,1.00) 48%,rgba(0,0,153,1.00) 100%)',
                        backgroundPosition: 'center center',
                      }}
                    >
                      <ArrowRight className="w-3 h-3 text-white -rotate-45" />
                    </span>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog/all"
            className="group flex items-center gap-2 p-1 border-2 hover:border-indigo-600 rounded-full text-base font-medium bg-transparent transition-colors min-w-[160px] mx-auto cursor-pointer w-fit"
          >
            <span className="px-4 py-3">
              View All Posts
            </span>
            <span
              className="inline-flex items-center justify-center w-10 h-10 rounded-full mr-1"
              style={{
                backgroundImage: 'linear-gradient(323deg, rgba(90,68,255,1.00) 0%,rgba(125,113,255,1.00) 27%,rgba(124,128,255,1.00) 48%,rgba(0,0,153,1.00) 100%)',
                backgroundPosition: 'center center',
              }}
            >
              <ArrowRight className="w-5 h-5 text-white -rotate-45" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}