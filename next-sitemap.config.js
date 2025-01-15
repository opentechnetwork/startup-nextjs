/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.opentechinnovations.com', // Replace with your site's URL
  generateRobotsTxt: true, // Generate robots.txt file
  sitemapSize: 7000, // Optional: split sitemap if it exceeds this number of URLs
  exclude: ['/admin/*'], // Optional: exclude pages
  changefreq: 'daily', // Set the change frequency
  priority: 0.7, // Set priority of pages
};
