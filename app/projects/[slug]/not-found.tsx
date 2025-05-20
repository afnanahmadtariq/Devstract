import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ProjectNotFound() {
  return (
    <section className="pt-32 pb-20 bg-gray-50 min-h-[calc(100vh-var(--header-height,0px)-var(--footer-height,0px))] flex items-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Project Not Found</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          We couldn't find the project you're looking for. It may have been moved, deleted, or never existed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/portfolio">
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">Browse Portfolio</Button>
          </Link>
          <Link href="/">
            <Button size="lg" variant="outline" className="border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white">
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
