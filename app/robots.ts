import type { MetadataRoute } from "next"

const SITE_URL = "https://www.yashyegare.me"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Not yet real content — see the note in app/sitemap.ts.
      // Remove these disallow lines once genuine content is added.
      disallow: ["/blog", "/talks", "/publications"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
