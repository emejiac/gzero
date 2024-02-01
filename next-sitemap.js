const config = require('./site-config')

const siteUrl = config.siteMetadata.siteUrl

module.exports = {
  siteUrl: siteUrl,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
}
