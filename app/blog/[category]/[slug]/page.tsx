import React from "react"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollToTopButton from "@/components/scroll-to-top-button"
import DraggableScrollIndicator from "@/components/draggable-scroll-indicator"
import BlogPost from "@/components/blog-post"
import RelatedPosts from "@/components/related-posts"
import BlogLayout from "@/components/blog-layout"
import { getPostByCategoryAndSlug, getAllPosts } from "@/lib/blog"

interface BlogPostPageProps {
  params: Promise<{ category: string; slug: string }>
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    category: post.categorySlug,
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { category, slug } = await params
  const post = await getPostByCategoryAndSlug(category, slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  const postUrl = `https://www.devstract.site/blog/${category}/${slug}`

  // Construct base open graph config
  const openGraphConfig: any = {
    title: post.title,
    description: post.excerpt,
    type: 'article',
    url: postUrl,
    publishedTime: post.publishedAt,
    authors: [post.author],
    section: post.category,
  }

  // Only add specific image overrides if they exist on the post
  if (post.image) {
    openGraphConfig.images = [
      {
        url: post.image,
        width: 1200,
        height: 630,
        alt: post.title,
      },
    ]
  }

  return {
    title: post.metaTitle || post.title,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: openGraphConfig,
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : [],
    },
    alternates: {
      canonical: postUrl,
    }
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { category, slug } = await params
  const post = await getPostByCategoryAndSlug(category, slug)

  if (!post) {
    notFound()
  }

  const postUrl = `https://www.devstract.site/blog/${category}/${slug}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image ? [post.image] : [],
    datePublished: post.publishedAt,
    dateModified: post.lastModified ? post.lastModified.toISOString() : post.publishedAt,
    wordCount: post.content.split(/\s+/).length,
    articleSection: post.category,
    keywords: post.tags.join(', '),
    author: {
      '@type': 'Organization',
      name: post.author,
      url: 'https://www.devstract.site/about-us',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Devstract',
      url: 'https://www.devstract.site',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.devstract.site/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
  }

  return (
    <main className="min-h-screen bg-white h-screen overflow-y-auto custom-scrollbar">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <BlogLayout
        title={post.title}
        subtitle={post.excerpt}
        content={
          <>
            <BlogPost post={post} />
            <RelatedPosts currentPostId={post.id} allPosts={await getAllPosts()} />
          </>
        }
        category={post.category}
        author={post.author}
        publishedAt={post.publishedAt}
        readTime={post.readTime}
        excerpt={post.excerpt}
        bottomCta={post.bottomCta}
      />
      <Footer />
      <ScrollToTopButton />
      <DraggableScrollIndicator />
    </main>
  )
}