import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, User } from "lucide-react"
import { BlogPost } from "@/lib/blog"

interface RelatedPostsProps {
  currentPostId: number
  allPosts: BlogPost[]
}

export default function RelatedPosts({ currentPostId, allPosts }: RelatedPostsProps) {
  // Filter out current post and get 3 related posts
  const relatedPosts = allPosts
    .filter(post => post.id !== currentPostId)
    .slice(0, 3)

  if (relatedPosts.length === 0) {
    return null
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Related Articles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <Link key={post.id} href={`/${post.categorySlug}/${post.slug}`}>
                <Card className="group hover:shadow-xl transition-all duration-500 border border-gray-200 hover:border-indigo-200 hover:-translate-y-2 rounded-xl bg-white overflow-hidden min-h-[400px] flex flex-col">
                  {/* Image Section */}
                  <div className="relative h-32 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <CardContent className="p-5 flex flex-col h-full">
                    <div className="mb-3">
                      <Badge className="bg-indigo-100 text-indigo-600 hover:bg-indigo-200 border border-indigo-200 text-xs font-medium">
                        {post.category}
                      </Badge>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-600 transition-colors leading-tight line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <div className="text-gray-600 mb-4 text-base leading-relaxed flex-grow line-clamp-3">
                      {post.excerpt}
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-1 min-w-0 flex-1">
                        <User className="h-3 w-3 flex-shrink-0" />
                        <span className="truncate">{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1 flex-shrink-0">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}