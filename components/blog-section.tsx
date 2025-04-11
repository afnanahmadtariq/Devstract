import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock } from "lucide-react"

const blogPosts = [
  {
    title: "The Future of Web Development: Trends to Watch in 2025",
    excerpt:
      "Explore the emerging technologies and methodologies that will shape the web development landscape in the coming year.",
    image: "/images/blog/post1.jpg",
    date: "April 5, 2025",
    readTime: "5 min read",
    slug: "future-web-development-trends-2025",
  },
  {
    title: "Building Cross-Platform Mobile Apps with Flutter",
    excerpt:
      "Learn how Flutter is revolutionizing mobile app development with its single codebase approach for iOS and Android.",
    image: "/images/blog/post2.jpg",
    date: "March 22, 2025",
    readTime: "7 min read",
    slug: "building-cross-platform-apps-flutter",
  },
  {
    title: "Optimizing React Applications for Performance",
    excerpt:
      "Practical tips and techniques to improve the performance of your React applications and provide a better user experience.",
    image: "/images/blog/post3.jpg",
    date: "March 10, 2025",
    readTime: "6 min read",
    slug: "optimizing-react-applications-performance",
  },
]

const BlogSection = () => {
  return (
    <section className="py-20 bg-secondary" id="blog">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Latest Insights</h2>
          <Button variant="outline" className="mt-4 md:mt-0">
            View All Articles
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link href={`/blog/${post.slug}`} key={index} className="group">
              <article className="bg-background rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(45,212,191,0.3)]">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <span className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <span className="text-primary font-medium">Read More</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection
