"use client";
import { Badge } from "@/components/ui/badge"
import { User, Calendar, Clock, Share2 } from 'lucide-react';
import { JSX } from 'react';
import { Button } from './ui/button';
import { formatDate } from "@/lib/utils";

interface BlogLayoutProps {
  title: string;
  subtitle: string;
  content: JSX.Element;
  category: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  readTime: string;
  bottomCta?: {
    title: string;
    description: string;
    buttonText: string;
    url: string;
  };
}

export default function BlogLayout({ title, subtitle, content, category, excerpt, author, publishedAt, readTime, bottomCta }: BlogLayoutProps) {
  const handleShare = async () => {
    const shareData = {
      title: title,
      text: subtitle || excerpt,
      url: window.location.href,
    };

    try {
      // Check if Web Share API is supported
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback to copying URL to clipboard
        await navigator.clipboard.writeText(window.location.href);
        // You could add a toast notification here
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      // If sharing fails or user cancels, fallback to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      } catch (clipboardError) {
        console.error('Failed to share or copy link:', clipboardError);
      }
    }
  };

  const teamMembers = [
    { id: 1, image: "https://plus.unsplash.com/premium_photo-1673957923985-b814a9dbc03d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Sarah" },
    { id: 2, image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Mike" },
    { id: 3, image: "https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Emma" },
    { id: 4, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Alex" },
    { id: 5, image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Lisa" },
  ];

  return (
    <main className="flex flex-col min-h-[70vh] bg-white dark:bg-gray-900">
      <header className="flex flex-col items-center justify-center py-8 px-4">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
          <span className="text-gray-300">/</span>
          <a href="/blog/all" className="hover:text-blue-600 transition-colors">Blog</a>
          <span className="text-gray-300">/</span>
          <Badge variant="secondary" className="bg-blue-100 text-blue-600 hover:bg-blue-200">
            {category}
          </Badge>
        </nav>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl max-w-6xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
          {title}
        </h1>

        {/* Subtitle/Description */}
        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl text-center mb-8">
          {subtitle}
        </p>

        {/* Article Metadata */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-gray-600 dark:text-gray-400 mb-8">
          <div className="flex items-center gap-2">
            <User className="h-5 w-5" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            <span>
              {formatDate(publishedAt)}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <span>{readTime}</span>
          </div>
        </div>

        {/* Action Button - Should come last */}
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
          onClick={handleShare}
        >
          <Share2 className="h-4 w-4" />
          Share
        </Button>
      </header>
      <section className="flex flex-col items-center justify-center py-8 px-4">
        <div className="w-full bg-[#F7F7F7] flex flex-col justify-center items-stretch p-3 gap-3 max-w-7xl border-2 border-[#EBEBEB] rounded-[36px]">
          {/* Top Portion */}
          <div className="legal-content flex-1 flex flex-col bg-white dark:bg-gray-800 rounded-t-[33px] p-2 sm:p-8 sm:pb-12 sm:px-12  justify-center border-2 border-[#EBEBEB]">
            {content}
          </div>
          {/* Bottom Portion */}
          <div className="flex-1 bg-white dark:bg-gray-800 rounded-b-[33px] p-8 sm:p-16 border-2 border-[#EBEBEB]">
            <div className="text-center max-w-3xl mx-auto">
              {bottomCta ? (
                <>
                  <h3 className="text-2xl font-bold mb-4 dark:text-white">{bottomCta.title}</h3>
                  <p className="text-sm sm:text-lg font-normal text-[#4D4D4DC9] dark:text-white mb-8 sm:mb-12">
                    {bottomCta.description}
                  </p>
                  <button
                    className="group flex items-center gap-2 p-1 border border-indigo-600 rounded-full text-sm sm:text-base font-medium bg-transparent hover:bg-indigo-50 dark:hover:bg-indigo-900 w-auto min-w-[140px] mx-auto transition-colors"
                    onClick={() => window.open(bottomCta.url, "_blank")}
                  >
                    <span className="px-6 sm:px-12 py-2 ml-4">
                      {bottomCta.buttonText}
                    </span>
                    <span
                      className="inline-flex items-center justify-center w-9 h-9 rounded-full mr-1"
                      style={{
                        backgroundImage: 'linear-gradient(323deg, rgba(90,68,255,1.00) 0%,rgba(125,113,255,1.00) 27%,rgba(124,128,255,1.00) 48%,rgba(0,0,153,1.00) 100%)',
                        backgroundPosition: 'center center',
                      }}
                    >
                      <img src="/media/small_arrow.svg" alt="arrow" className="w-4 h-4 -rotate-45" />
                    </span>
                  </button>
                </>
              ) : (
                <>
                  <div className="flex -space-x-3 mb-6 justify-center">
                    {[...teamMembers].reverse().map((member, index) => (
                      <div
                        key={member.id}
                        className="relative"
                        style={{
                          zIndex: index + 1,
                        }}
                      >
                        <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full overflow-hidden" style={{ border: '1px solid #ECECEC' }}>
                          <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm sm:text-lg font-normal text-[#4D4D4DC9] dark:text-white mb-8 sm:mb-12">
                    We&apos;d love to hear from you! Whether you have questions, feedback, or you&apos;re ready to start a project, our team is here to help. Reach out to us anytime — we&apos;re just a message away.
                  </p>
                  <button
                    className="group flex items-center gap-2 p-1 border border-indigo-600 rounded-full text-sm sm:text-base font-medium bg-transparent hover:bg-indigo-50 dark:hover:bg-indigo-900 w-auto min-w-[140px] mx-auto transition-colors"
                    onClick={() => window.open("https://www.devstract.site/contact-us", "_blank")}
                  >
                    <span className="px-6 sm:px-12 py-2 ml-4">
                      Contact Us
                    </span>
                    <span
                      className="inline-flex items-center justify-center w-9 h-9 rounded-full mr-1"
                      style={{
                        backgroundImage: 'linear-gradient(323deg, rgba(90,68,255,1.00) 0%,rgba(125,113,255,1.00) 27%,rgba(124,128,255,1.00) 48%,rgba(0,0,153,1.00) 100%)',
                        backgroundPosition: 'center center',
                      }}
                    >
                      <img src="/media/small_arrow.svg" alt="arrow" className="w-4 h-4 -rotate-45" />
                    </span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
