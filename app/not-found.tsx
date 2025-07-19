import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white text-center px-4">
      <img src="/media/404.png" alt="404 Not Found" className="w-3/5 h-auto" />
      <p className="text-gray-500 mb-8">Sorry, the page you are looking for does not exist or has been moved.</p>
      <Link href="/" className="inline-block px-6 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors duration-200">
        Go Home
      </Link>
    </div>
  )
}
