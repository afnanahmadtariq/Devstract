"use client"

import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import ArrowRightIcon from '@/components/icons/ArrowRight'
import { BlogPost } from '@/lib/blog'

type FeaturedArticlesSliderLayout = 'default' | 'compact'

interface FeaturedArticlesSliderProps {
  layout?: FeaturedArticlesSliderLayout
  className?: string
  posts: BlogPost[]
}

const layoutStyles: Record<FeaturedArticlesSliderLayout, { wrapper: string; swiper: string; slide: string }> = {
  default: {
    wrapper: 'mx-auto mb-16 w-full px-4',
    swiper: 'pb-12',
    slide: 'h-[60vh] md:h-[70vh] min-h-[400px] max-h-[600px]'
  },
  compact: {
    wrapper: 'w-full max-w-3xl lg:max-w-none',
    swiper: 'pb-10',
    slide: 'h-[380px] sm:h-[440px] lg:h-[520px] min-h-[320px]'
  }
}

export default function FeaturedArticlesSlider({ layout = 'default', className, posts }: FeaturedArticlesSliderProps) {
  const styles = layoutStyles[layout]
  const swiperRef = useRef<SwiperType | null>(null)

  if (posts.length === 0) {
    return null
  }

  return (
    <div className={cn(styles.wrapper, className)}>
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={false}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper
          }}
          className={styles.swiper}
        >
          {posts.map((article) => (
            <SwiperSlide key={article.id}>
              <div className={cn(
                'group relative flex h-full w-full flex-col justify-end overflow-hidden rounded-[28px] border-2 border-[#EBEBEB] ',
                styles.slide
              )}>
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover object-center opacity-90"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/5" />
                <div className="relative z-10 flex h-full w-full flex-col justify-between p-8 md:p-10 text-white">
                  <div>
                    <div className="mb-4 inline-flex w-max items-center gap-2 rounded-full border border-white/40 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em]">
                      {article.category}
                    </div>
                    <h3 className="text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight mb-4 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-base md:text-lg text-white/80 mb-8 line-clamp-3 max-w-3xl">
                      {article.excerpt}
                    </p>
                  </div>
                  <Link
                    href={`/${article.categorySlug}/${article.slug}`}
                    className="max-w-fit group/btn inline-flex items-center gap-2 rounded-full border-2 border-white/60 bg-white/10 px-1 py-1 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
                    aria-label={`Read more about ${article.title}`}
                  >
                    <span className="px-6 py-2">Read More</span>
                    <span
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full"
                      style={{
                        backgroundImage:
                          'linear-gradient(323deg, rgba(90,68,255,1) 0%, rgba(125,113,255,1) 27%, rgba(124,128,255,1) 48%, rgba(0,0,153,1) 100%)',
                        backgroundPosition: 'center center',
                      }}
                    >
                      <ArrowRightIcon className="h-4 w-4 text-white" />
                    </span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-4 top-2/3 z-20 -translate-y-1/2 group inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/60 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:border-white/80 focus:outline-none"
          aria-label="Previous slide"
        >
          <ArrowRightIcon className="h-5 w-5 text-white rotate-180 group-hover:scale-110 transition-transform duration-200" />
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-4 top-2/3 z-20 -translate-y-1/2 group inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/60 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:border-white/80 focus:outline-none"
          aria-label="Next slide"
        >
          <ArrowRightIcon className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-200" />
        </button>
      </div>
    </div>
  )
}