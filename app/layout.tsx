import type React from "react";
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import ClientLayout from "./ClientLayout";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const SITE_URL = "https://www.yashyegare.me";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Yash Yegare | Software Developer",
    template: "%s | Yash Yegare",
  },
  description:
    "Senior Software Engineer specializing in backend development with Python, FastAPI, and cloud solutions.",
  keywords: [
    "Software Engineer",
    "Python Developer",
    "FastAPI",
    "GraphQL",
    "Backend Development",
    "Yash Yegare",
  ],
  authors: [{ name: "Yash Yegare" }],
  creator: "Yash Yegare",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "Yash Yegare | Software Developer",
    description:
      "Senior Software Engineer specializing in backend development with Python, FastAPI, and cloud solutions.",
    siteName: "Yash Yegare Portfolio",
    images: [
      {
        url: "/images/profile.png",
        width: 800,
        height: 800,
        alt: "Yash Yegare",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Yegare | Software Developer",
    description:
      "Senior Software Engineer specializing in backend development with Python, FastAPI, and cloud solutions.",
    images: ["/images/profile.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  generator: "v0.dev",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yash Yegare",
  url: SITE_URL,
  jobTitle: "Software Developer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/yashyegare",
    "https://www.linkedin.com/in/yashyegare",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
      </body>
    </html>
  );
}