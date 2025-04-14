module.exports = {
    siteUrl: 'https://yourdomain.com', // Replace with your site's URL
    generateRobotsTxt: true, // (optional) Generate a robots.txt file
    changefreq: 'daily', // Frequency of changes
    priority: 0.7, // Priority of pages
    sitemapSize: 5000, // Maximum number of URLs per sitemap file
    exclude: ['/admin/*'], // Exclude specific paths
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://yourdomain.com/sitemap-0.xml', // Add additional sitemaps if needed
      ],
    },
  }