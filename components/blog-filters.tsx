"use client"

import React from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

interface BlogFiltersProps {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
  searchQuery: string
  onSearchChange: (query: string) => void
}

export default function BlogFilters({
  categories,
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange
}: BlogFiltersProps) {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      <div className="relative w-full lg:max-w-sm">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-indigo-50 p-2 text-indigo-400 shadow-inner">
          <Search className="h-4 w-4" />
        </span>
        <Input
          type="text"
          placeholder="Search by title, topic, or author"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="h-12 rounded-full border-2 border-[#EBEBEB] bg-white pl-14 text-sm shadow-sm transition-all focus:border-indigo-200 focus-visible:ring-2 focus-visible:ring-indigo-500/40"
        />
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {categories.filter(cat => cat !== "All").map((category) => {
          const isActive = selectedCategory === category
          return (
            <Button
              key={category}
              variant="ghost"
              onClick={() => onCategoryChange(category)}
              className={`rounded-full border border-transparent px-4 py-2 text-sm font-medium transition-all duration-300 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600 ${
                isActive
                  ? "border-indigo-500 bg-indigo-500/10 text-indigo-600 shadow-[0_15px_40px_-24px_rgba(79,70,229,0.9)]"
                  : "text-gray-600"
              }`}
            >
              {category}
            </Button>
          )
        })}
      </div>
    </div>
  )
}