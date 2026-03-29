export type Project = {
  id: number
  title: string
  description: string
  image?: string | null
  tags: string[]
  github: string
  demo: string | null
}

const projects: Project[] = [
  {
    id: 4,
    title: "F-1 Race Winner Prediction",
    description:
      "Web-based platform that allows to predict the final positions of Formula 1 Grand Prix races.",
    image:
      "/images/F1.png",
    tags: ["Web Dev", "ML", "Flask", "Next.js"],
    github: "https://github.com/yashyegare/Formula-1-Prediction",
    demo: "https://nextjs-app-yashyegare.vercel.app/",
  },
  {
    id: 1,
    title: "Discord like app for developers",
    description: "A Web application that enables users to interact with eachother.",

    image:
      "/images/dlad.png",
    tags: ["Python", "Django", "DRF"],
    github: "https://github.com/yashyegare/dlad",
    demo: "https://github.com/yashyegare/dlad",
  },
  {
    id: 2,
    title: "Helmet detection system",
    description: "Automatic Helmet Detection for Bike Riders using Surveillance Videos in real-time.",
    image:
      "/images/vois.png",
    tags: ["Machine Learning"],
    github: "https://github.com/yashyegare/helmet-detection",
    demo: null,
  },
  {
    id: 3,
    title: "Business Website",
    description:
      "A B2B agro-commodity digital storefront to drive bulk trading inquiries.",
    image: "/images/sachin_gold.png",
    tags: ["JS", "HTML", "Bootstrap", "PHP"],
    github: "https://github.com/yashyegare/sachin_gold",
    demo: "https://sachingold.com/",
  },
]

export const featuredProjects = [projects[0], projects[1], projects[2], projects[3]]

export default {
  projects,
  featuredProjects,
}
