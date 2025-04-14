module.exports = {
    siteUrl: 'https://www.devstract.site', // Replace with your site's URL
    generateRobotsTxt: true, // (optional) Generate a robots.txt file
    changefreq: 'daily', // Frequency of changes
    priority: 0.7, // Priority of pages
    sitemapSize: 5000, // Maximum number of URLs per sitemap file
    exclude: ['/admin/*'], // Exclude specific paths
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://www.devstract.site/sitemap-0.xml', // Add additional sitemaps if needed
      ],
    },
  }