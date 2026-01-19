"use client"

import React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface BlogPaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function BlogPagination({
  currentPage,
  totalPages,
  onPageChange
}: BlogPaginationProps) {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    // Check if mobile on mount and on resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const generatePageNumbers = () => {
    const pages = []
    // Show 3 pages on mobile, 5 on desktop
    const showPages = isMobile ? 3 : 5
    let startPage = Math.max(1, currentPage - Math.floor(showPages / 2))
    let endPage = Math.min(totalPages, startPage + showPages - 1)
    
    if (endPage - startPage + 1 < showPages) {
      startPage = Math.max(1, endPage - showPages + 1)
      endPage = Math.min(totalPages, startPage + showPages - 1)
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }
    
    return pages
  }

  const gradientStyle = {
    backgroundImage:
      "linear-gradient(323deg, rgba(90,68,255,1) 0%, rgba(125,113,255,1) 27%, rgba(124,128,255,1) 48%, rgba(0,0,153,1) 100%)",
    backgroundPosition: "center center"
  }

  return (
    <div className="flex items-center justify-center gap-2">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`inline-flex items-center gap-2 rounded-full border-2 px-1 py-1 sm:pr-4 text-sm font-semibold transition-all duration-300 ${
          currentPage === 1
            ? "border-gray-200 text-gray-300 cursor-not-allowed"
            : "border-indigo-600 text-indigo-600 bg-white hover:bg-indigo-50"
        }`}
      >
        <span
          className={`flex h-8 w-8 items-center justify-center rounded-full text-white ${
            currentPage === 1 ? "bg-gray-300" : ""
          }`}
          style={currentPage === 1 ? {} : gradientStyle}
        >
          <ChevronLeft className="h-4 w-4" />
        </span>
        <span className="hidden sm:inline">Previous</span>
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-0.5 sm:gap-1">
        {/* First page with ellipsis - hidden on mobile */}
        {currentPage > 3 && totalPages > 5 && (
          <>
            <button
              onClick={() => onPageChange(1)}
              className="hidden sm:flex w-10 h-10 rounded-full text-sm font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-300 items-center justify-center"
            >
              1
            </button>
            {currentPage > 4 && <span className="hidden sm:inline text-gray-400 px-1">...</span>}
          </>
        )}

        {/* Visible page numbers */}
        {generatePageNumbers().map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-10 h-10 rounded-full text-sm font-semibold transition-all duration-300 ${
              page === currentPage
                ? "text-white shadow-lg shadow-indigo-500/30"
                : "text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 border border-transparent hover:border-indigo-200"
            }`}
            style={page === currentPage ? gradientStyle : {}}
          >
            {page}
          </button>
        ))}

        {/* Last page with ellipsis - hidden on mobile */}
        {currentPage < totalPages - 2 && totalPages > 5 && (
          <>
            {currentPage < totalPages - 3 && <span className="hidden sm:inline text-gray-400 px-1">...</span>}
            <button
              onClick={() => onPageChange(totalPages)}
              className="hidden sm:flex w-10 h-10 rounded-full text-sm font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-300 items-center justify-center"
            >
              {totalPages}
            </button>
          </>
        )}
      </div>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`inline-flex items-center gap-2 rounded-full border-2 px-1 py-1 sm:pl-4 text-sm font-semibold transition-all duration-300 ${
          currentPage === totalPages
            ? "border-gray-200 text-gray-300 cursor-not-allowed"
            : "border-indigo-600 text-indigo-600 bg-white hover:bg-indigo-50"
        }`}
      >
        <span className="hidden sm:inline">Next</span>
        <span
          className={`flex h-8 w-8 items-center justify-center rounded-full text-white ${
            currentPage === totalPages ? "bg-gray-300" : ""
          }`}
          style={currentPage === totalPages ? {} : gradientStyle}
        >
          <ChevronRight className="h-4 w-4" />
        </span>
      </button>
    </div>
  )
}