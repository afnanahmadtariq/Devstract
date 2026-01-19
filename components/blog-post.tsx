"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, User, Calendar, Share2, Heart, Bookmark } from "lucide-react"
import remarkGfm from 'remark-gfm'
import ReactMarkdown from "react-markdown"
import Image from "next/image"

interface BlogPostData {
  id: number
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  publishedAt: string
  readTime: string
  image?: string
  slug: string
  tags?: string[]
}

interface BlogPostProps {
  post: BlogPostData
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <article>
      {/* Content */}
      <section className="py-8 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            {post.image && (
              <div className="mb-12 rounded-2xl overflow-hidden relative h-[200px] sm:h-[500px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* Article Content */}
            <div className="prose prose-lg prose-blue max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children }) => (
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 mt-12 first:mt-0">
                      {children}
                    </h2>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 mt-10">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900 mt-8">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                      {children}
                    </p>
                  ),
                  code: ({ children, className }) => {
                    const isBlock = className?.includes('language-')
                    if (isBlock) {
                      return (
                        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto my-6">
                          <code className="text-sm">{children}</code>
                        </div>
                      )
                    }
                    return (
                      <code className="bg-gray-100 text-blue-600 px-2 py-1 rounded text-sm">
                        {children}
                      </code>
                    )
                  },
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal list-inside mb-6 space-y-2 text-gray-700">
                      {children}
                    </ol>
                  ),
                  table: ({ children }) => (
                    <div className="overflow-x-auto my-8 border rounded-lg">
                      <table className="min-w-full text-left text-sm text-gray-700">
                        {children}
                      </table>
                    </div>
                  ),
                  thead: ({ children }) => (
                    <thead className="bg-gray-50 border-b">
                      {children}
                    </thead>
                  ),
                  tbody: ({ children }) => (
                    <tbody className="divide-y divide-gray-100">
                      {children}
                    </tbody>
                  ),
                  tr: ({ children }) => (
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      {children}
                    </tr>
                  ),
                  th: ({ children }) => (
                    <th className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap">
                      {children}
                    </th>
                  ),
                  td: ({ children }) => (
                    <td className="px-6 py-4 align-top">
                      {children}
                    </td>
                  ),
                  img: (props) => (
                    <img 
                      {...props} 
                      loading="lazy" 
                      className="rounded-lg max-w-full h-auto my-8 shadow-sm"
                      alt={props.alt || 'Blog post image'} 
                    />
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </article>
  )
}