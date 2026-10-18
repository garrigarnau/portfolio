import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://arnaugarriga.com/sitemap.xml',
    host: 'https://arnaugarriga.com',
  }
}
