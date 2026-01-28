import { MetadataRoute } from 'next'
import { getAllPosts, getAllCategories } from '@/lib/blog'

export const dynamic = 'force-static'

const SITE_URL = 'https://www.devstract.site'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const posts = getAllPosts()
    const categories = getAllCategories()

    // Base routes
    const routes = [
        '',
        '/about-us',
        '/attributions',
        '/contact-us',
        '/faqs',
        '/privacy-policy',
        '/terms-of-service',
        '/blog',
    ].map((route) => ({
        url: `${SITE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 1,
    }))

    // Service routes
    const serviceRoutes = [
        '/services/ai-powered-website-enhancements',
        '/services/business-automation-solutions',
        '/services/business-management-tools',
        '/services/communication-engagement-systems',
        '/services/integration-services',
        '/services/product-management-services',
        '/services/website-development-services',
    ].map((route) => ({
        url: `${SITE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    // Blog posts
    const blogRoutes = posts.map((post) => ({
        url: `${SITE_URL}/blog/${post.categorySlug}/${post.slug}`,
        lastModified: post.lastModified || new Date(post.publishedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    // Blog categories
    const categoryRoutes = categories.map((category) => ({
        url: `${SITE_URL}/blog/${category.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    // Blog All route
    const blogAllRoute = {
        url: `${SITE_URL}/blog/all`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 0.8,
    }

    return [...routes, ...serviceRoutes, ...categoryRoutes, blogAllRoute, ...blogRoutes]
}
