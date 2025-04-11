import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CircuitBackground } from "@/components/circuit-background"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, tutorials, and updates from the Devstract team on software development and technology trends.",
}

const categories = ["All", "Web Development", "Mobile", "UX/UI", "DevOps", "Technology Trends"]

const featuredPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2025",
    excerpt:
      "Explore the emerging technologies and methodologies that are shaping the future of web development and how they can benefit your business.",
    date: "April 10, 2025",
    author: "Alex Johnson",
    category: "Technology Trends",
    image: "/placeholder.svg?height=600&width=1200",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "Building Scalable Mobile Applications with React Native",
    excerpt:
      "Learn best practices for developing cross-platform mobile applications that can scale with your user base and business needs.",
    date: "April 5, 2025",
    author: "David Kim",
    category: "Mobile",
    image: "/placeholder.svg?height=600&width=1200",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "Optimizing Database Performance for High-Traffic Applications",
    excerpt:
      "Discover strategies and techniques for improving database performance to handle high traffic loads without compromising user experience.",
    date: "March 28, 2025",
    author: "Emily Patel",
    category: "DevOps",
    image: "/placeholder.svg?height=600&width=1200",
    readTime: "10 min read",
  },
]

const recentPosts = [
  {
    id: 4,
    title: "Implementing Effective CI/CD Pipelines for Faster Deployments",
    excerpt:
      "Learn how to set up efficient continuous integration and deployment pipelines to streamline your development workflow.",
    date: "March 22, 2025",
    author: "Michael Rodriguez",
    category: "DevOps",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "User-Centered Design: Creating Interfaces That Delight Users",
    excerpt:
      "Explore principles and methodologies for designing intuitive user interfaces that enhance user satisfaction and engagement.",
    date: "March 18, 2025",
    author: "Sarah Chen",
    category: "UX/UI",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "5 min read",
  },
  {
    id: 6,
    title: "Leveraging Serverless Architecture for Cost-Effective Scaling",
    excerpt:
      "Discover how serverless computing can help reduce infrastructure costs while providing seamless scalability for your applications.",
    date: "March 15, 2025",
    author: "Alex Johnson",
    category: "DevOps",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "8 min read",
  },
  {
    id: 7,
    title: "Progressive Web Apps: Bridging the Gap Between Web and Mobile",
    excerpt:
      "Learn how PWAs combine the best of web and mobile apps to deliver exceptional user experiences across all devices.",
    date: "March 10, 2025",
    author: "Olivia Martinez",
    category: "Web Development",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "6 min read",
  },
  {
    id: 8,
    title: "Securing Your Web Applications: Best Practices and Common Pitfalls",
    excerpt:
      "Explore essential security measures to protect your web applications from common vulnerabilities and threats.",
    date: "March 5, 2025",
    author: "David Kim",
    category: "Web Development",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "9 min read",
  },
  {
    id: 9,
    title: "The Role of AI in Modern Software Development",
    excerpt:
      "Discover how artificial intelligence is transforming software development processes and enabling new capabilities.",
    date: "March 1, 2025",
    author: "Emily Patel",
    category: "Technology Trends",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "7 min read",
  },
]

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <CircuitBackground />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl text-gray-400">
              Insights, tutorials, and updates from the Devstract team on software development and technology trends.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={
                  category === "All"
                    ? "bg-teal-500 hover:bg-teal-600 text-gray-950"
                    : "border-gray-700 hover:border-teal-500 hover:text-teal-500"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <FeaturedPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Recent Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-500/10 blur-3xl"></div>
            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
              <p className="text-gray-400 text-lg mb-8">
                Subscribe to our newsletter to receive the latest insights and updates from our team directly to your
                inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-gray-950 border border-gray-700 text-white focus:outline-none focus:border-teal-500"
                />
                <Button className="bg-teal-500 hover:bg-teal-600 text-gray-950 font-medium">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function FeaturedPostCard({ post }) {
  return (
    <div className="bg-gray-950 border border-gray-800 rounded-xl overflow-hidden hover:border-teal-500/50 transition-colors group">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          width={1200}
          height={600}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-teal-500 text-gray-950 text-xs font-medium px-2 py-1 rounded">
          {post.category}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-400 mb-3">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
        <p className="text-gray-400 mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="text-sm">
            By <span className="text-teal-500">{post.author}</span>
          </div>
          <Button variant="link" className="text-teal-500 p-0 hover:text-teal-400 flex items-center" asChild>
            <Link href={`/blog/${post.id}`}>
              Read More <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

function PostCard({ post }) {
  return (
    <div className="bg-gray-950 border border-gray-800 rounded-xl overflow-hidden hover:border-teal-500/50 transition-colors group">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          width={600}
          height={400}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-teal-500 text-gray-950 text-xs font-medium px-2 py-1 rounded">
          {post.category}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-400 mb-3">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
        <p className="text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>
        <Button variant="link" className="text-teal-500 p-0 hover:text-teal-400 flex items-center" asChild>
          <Link href={`/blog/${post.id}`}>
            Read More <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
