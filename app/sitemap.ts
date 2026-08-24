import type { MetadataRoute } from "next"

const SITE_URL = "https://www.yashyegare.me"

// NOTE: /blog, /talks, and /publications are intentionally excluded below.
// They currently hold unfinished template placeholder content (sample posts,
// talks, and papers that aren't yours). Add them back once real content is
// in place, or delete the routes if you don't plan to use them.

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/resume`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ]

  return staticRoutes
}
