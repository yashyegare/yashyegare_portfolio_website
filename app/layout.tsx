import type React from "react"
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface"
import ClientLayout from "./ClientLayout"
import { Analytics } from '@vercel/analytics/react';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Yash Yegare | Portfolio</title>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}


export const metadata: Metadata = {
  title: {
    default: "Yash Yegare | Software Developer",
    template: "%s | Yash Yegare",
  },
  description:
    "Senior Software Engineer specializing in backend development with Python, FastAPI, and cloud solutions.",
  keywords: ["Software Engineer", "Python Developer", "FastAPI", "GraphQL", "Backend Development", "Yash Yegare"],
  authors: [{ name: "Yash Yegare" }],
  creator: "Yash Yegare",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yashyegare.com",
    title: "Yash Yegare | Software Developer",
    description:
      "Senior Software Engineer specializing in backend development with Python, FastAPI, and cloud solutions.",
    siteName: "Yash Yegare Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Yegare | Software Developer",
    description:
      "Senior Software Engineer specializing in backend development with Python, FastAPI, and cloud solutions.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}


import './globals.css'
