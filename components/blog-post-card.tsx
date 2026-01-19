import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, User, Calendar } from "lucide-react"
import { formatDate } from "@/lib/utils"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  category: string
  categorySlug: string
  author: string
  publishedAt: string
  readTime: string
  image?: string
  slug: string
  tags?: string[]
}

interface BlogPostCardProps {
  post: BlogPost
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const formattedDate = formatDate(post.publishedAt, "short")

  return (
    <Link href={`/${post.categorySlug}/${post.slug}`} className="block h-full" aria-label={`Read ${post.title}`}>
      <Card className="group h-full flex flex-col rounded-[28px] border-2 border-[#EBEBEB] bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
        <CardContent className="p-0 flex-1 flex flex-col">
          <div className="relative h-56 overflow-hidden rounded-t-[26px] flex-shrink-0">
            {post.image ? (
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-indigo-50 text-5xl text-indigo-200">
                ✨
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <Badge className="absolute left-4 top-4 rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium uppercase tracking-widest text-indigo-600 shadow-sm">
              {post.category}
            </Badge>
          </div>

          <div className="flex flex-col gap-4 p-6 flex-1">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span className="inline-flex items-center gap-2">
                <User className="h-4 w-4" />
                {post.author}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {formattedDate}
              </span>
            </div>

            <h3 className="text-xl font-semibold leading-tight text-gray-900 transition-colors group-hover:text-indigo-600 line-clamp-2">
              {post.title}
            </h3>

            <p className="text-sm leading-relaxed text-gray-600 line-clamp-3 flex-1">
              {post.excerpt}
            </p>

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-auto">
                {post.tags.slice(0, 3).map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600"
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0 mt-auto flex items-center justify-between">
          <span className="pl-2">Read the story</span>
          <span
            className="flex h-8 w-8 items-center justify-center rounded-full text-white translate-x-1"
            style={{
              backgroundImage:
                "linear-gradient(323deg, rgba(90,68,255,1) 0%, rgba(125,113,255,1) 27%, rgba(124,128,255,1) 48%, rgba(0,0,153,1) 100%)",
              backgroundPosition: "center center"
            }}
          >
            <ArrowRight className="h-4 w-4 -rotate-45" />
          </span>
        </CardFooter>
      </Card>
    </Link>
  )
}
