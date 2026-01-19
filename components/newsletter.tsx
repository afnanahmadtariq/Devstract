"use client"

import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Mail, CheckCircle } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    setError("")

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSubscribed(true)
        setEmail("")
      } else if (response.status === 409) {
        setError("You're already subscribed!")
      } else {
        setError(data.error || "Failed to subscribe. Please try again.")
      }
    } catch (err) {
      console.error('Subscription error:', err)
      setError("Network error. Please check your connection and try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubscribed) {
    return (
      <section id="newsletter" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-6">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Thanks for subscribing!
              </h2>
              <p className="text-lg text-gray-600">
                You&apos;ll receive our latest articles and tech insights straight to your inbox.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="newsletter" className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Never Miss an Update
            </h2>
            <p className="text-xl text-gray-600">
              Subscribe to our newsletter and get the latest tech articles, tutorials, and insights delivered to your inbox.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 px-4 border border-gray-200 focus:border-indigo-400 rounded-full"
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className="group flex items-center gap-2 p-1 border border-indigo-600 rounded-full text-sm font-medium bg-transparent hover:bg-indigo-50 transition-colors min-w-[140px] disabled:opacity-50 disabled:cursor-not-allowed h-12"
            >
              <span className="px-4 py-2 ml-2 flex-1">
                {isLoading ? "Subscribing..." : "Subscribe"}
              </span>
              <span
                className="inline-flex items-center justify-center w-8 h-8 rounded-full mr-1"
                style={{
                  backgroundImage: 'linear-gradient(323deg, rgba(90,68,255,1.00) 0%,rgba(125,113,255,1.00) 27%,rgba(124,128,255,1.00) 48%,rgba(0,0,153,1.00) 100%)',
                  backgroundPosition: 'center center',
                }}
              >
                <Mail className="w-4 h-4 text-white" />
              </span>
            </button>
          </form>

          {error && (
            <p className="text-sm text-red-600 mt-4 font-medium">
              {error}
            </p>
          )}

          <p className="text-sm text-gray-500 mt-4">
            No spam, ever. Unsubscribe at any time.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Weekly Updates</h3>
              <p className="text-sm text-gray-600">Fresh content every week</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Expert Insights</h3>
              <p className="text-sm text-gray-600">From industry professionals</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Exclusive Content</h3>
              <p className="text-sm text-gray-600">Subscriber-only resources</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}