import type { MetadataRoute } from 'next'

const SITE = 'https://arnaugarriga.com'

// One page with sections, so one URL. Side projects live on their own domains.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE}/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
  ]
}
