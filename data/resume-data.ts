export type WorkExperience = {
  title: string
  company: string
  period: string
  location: string
  responsibilities: string[]
}

export type Language = {
  name: string
  level: string
  certificate?: string
}

export type Publication = {
  title: string
  description: string
  year: string
  link?: string
}

export type ResumeData = {
  personalInfo: {
    name: string
    title: string
    email: string
    location: string
    linkedin: string
    github: string | null
    website: string
    photo?: string
    yearsOfExperience: string
    teamLeadExperience: string
    College: string
  }
  summary: string[]
  skills: {
    languages: string[]
    // architecture: string[]
    cloud: string[]
    data: string[]
    Tools: string[]
  }
  experience: WorkExperience[]
  hardSkills: string[]
  softSkills: string[]
  languages: Language[]
  publications: Publication[]
  leadership: LeadershipRole[]
  communityInvolvement: CommunityRole[]
}

const resumeData: ResumeData = {
  personalInfo: {
    name: "Yash Yegare",
    title: "Software Developer",
    email: "tbzyash1@gmail.com",
    location: "Pune, India",
    linkedin: "linkedin.com/in/yashyegare/",
    github: "github.com/yashyegare/",
    website: "leetcode.com/u/yashhx18/",
    photo: "/images/profile.png",
    yearsOfExperience: "Software developer with 1+ years of experience building ",
    teamLeadExperience: "robust web applications and a passion for continuous learning that started with Java in college.",
    College : "Pursuing M.Tech at COEP Technological University, Pune ('27 batch)", 
  },
  summary: ["Developer / Tinkerer / Absurdist"],
  skills: {
    languages: ["Java", "Python", "R", "HTML/CSS", "Js", "FastAPI", "Django REST", "Node.js", "Next.js", "Express", "Apache Spark"],
    // architecture: ["CleanCode/Architecture", "DDD", "Microservices", "Pub/Sub", "BFF", "REST", "GraphQL"],
    cloud: ["GCP", "Docker", "Kubernetes", "GitHub Actions"],
    data: ["PostgreSQL", "SQL Server", "MongoDB"],
    Tools: ["GIT", "Linux", "Postman", "Figma"],
  },
  experience: [

     {
      title: "SDE Intern",
      company: "Stealth Startup",
      period: "Aug 2026 - Present",
      location: "Remote",
      responsibilities: [
        "Focus areas: Backend Development, Data Systems, Cloud Object Storage, Docker, VPS Infrastructure, System Scaling.",
      ],
    },

    {
      title: "Technical Consultant",
      company: "Stealth Startup",
      period: "Aug 2024 - Dec 2024",
      location: "Pune, India",
      responsibilities: [
        "Engineered custom automation scripts and database schemas to digitize legacy manufacturing processes, improving data integrity and operational efficiency.",
        "Designed and implemented a centralized database infrastructure to track production metrics, enabling real-time data visibility for non-technical stakeholders.",
        "Deployed automated WhatsApp chatbots to streamline communication workflows.",
    
      ],
    },
    {
      title: "Web Development Intern",
      company: "NoQs Digital",
      period: "Jun 2023 - Aug 2023",
      location: "Remote",
      responsibilities: [
        "Developed responsive websites using WordPress and jQuery, enhancing cross-platform user experience and site interactivity.",
        "Lead group of 4 developers to ensure efficient completion of tasks.",
        "Did bugfixing and performed troubleshooting practices.",
      ],
    },
    {
      title: "Project Intern",
      company: "Vodafone Idea Ltd.",
      period: "Aug 2022 - Oct 2022",
      location: "Remote",
      responsibilities: [
        "Engineered a real-time ML model utilizing Deep Learning to detect safety helmet compliance with high temporal accuracy..",
        "Improved the percentage of correct classifications of the Machine Learning model.",
       
      ],
    },

    // {
    //   title: "Full-Stack Engineer (Part-Time)",
    //   company: "Advogar",
    //   period: "Aug 2019 - Oct 2021",
    //   location: "Remote, Brazil",
    //   responsibilities: [
    //     "Added advanced image processing and third-party integrations to expand API capabilities.",
    //     "Led backend integration between core services, ensuring consistent data flow.",
    //   ],
    // },


    // {
    //   title: "Development Team Lead & Software Developer",
    //   company: "Justiça Fácil",
    //   period: "Mar 2019 - Jul 2020",
    //   location: "Remote, Brazil",
    //   responsibilities: [
    //     "Coordinated a distributed team to deliver high-priority features on schedule.",
    //     "Built asynchronous web crawlers that reduced specific search tasks from two hours to two minutes.",
    //     "Developed features that streamlined QA workflows, saving up to eight hours per tester each week.",
    //   ],
    // },
  ],
  hardSkills: [
    "Python",
    "FastAPI",
    "SQLAlchemy",
    "Django REST",
    "TypeScript",
    "Node.js",
    "Express",
    "Clean Architecture",
    "DDD",
    "Microservices",
    "AWS",
    "Docker",
    "Kubernetes",
    "PostgreSQL",
    "Redis",
    "Celery",
    "TDD",
    "Pytest",
  ],
  softSkills: [
    "Problem Solving",
    "Remote Collaboration",
    "Adaptability",
    "Critical Thinking",
    "Communication",
    "Team Leadership",
  ],

  languages: [
    {
      name: "Marathi",
      level: "Native",
    },
    {
      name: "English",
      level: "Professional Proficiency",
      // certificate: "EF SET English Certificate 82/100 (C2 Proficient)",
    },
    {
      name: "Hindi",
      level: "Professional Proficiency",
    },
    {
      name: "Kannada",
      level: "Intermediate",
    },
  ],

  publications: [
    // {
    //   title: "Estratégias Pedagógicas para o Processo de Ensino-Aprendizagem de Algoritmos",
    //   description: "A publication exploring pedagogical strategies for teaching and learning algorithms.",
    //   year: "2019",
    // },
    // {
    //   title: "Estudos de Técnicas de Mineração de Dados Aplicadas em Ambientes Sistematizados de Bibliotecas",
    //   description: "A study on data mining techniques applied to systematized library environments.",
    //   year: "2018",
    // },
    // {
    //   title: "Carros de Combate na Selva: Utilização de VBCCCs no Teatro de Operações da Amazônia",
    //   description: "A publication on combat vehicles in jungle environments, focusing on operations in the Amazon.",
    //   year: "2017",
    // },
  ],

    leadership: [
    {
      title: "Postman Student Expert",
      organization: "Postman",
      period: "Apr 2023 - May 2024",
      description: "Actively educating students on API development, testing, and collaboration workflows using Postman.",
    },
    {
      title: "PoC - GDSC WOW",
      organization: "GDSC Pune",
      period: "Mar 2023 - Mar 2023",
      description: "Point of contact for GDSC Pune's flagship event WOW.",
    },
    {
      title: "Core Team Member",
      organization: "GDSC AISSMS IOIT Pune",
      period: "Sep 2022 - Aug 2023",
      description: "Cloud & Outreach.",
    },
    {
      title: "TnP Head, Computer Engineering Students' Association",
      organization: "AISSMS IOIT",
      period: "Jul 2022 - Jun 2023",
      description: "Training and placement POC for the Computer Department.",
    },
    {
      title: "Core Team Member",
      organization: "AISSMS IOIT ACM Student Chapter",
      period: "Jul 2022 - May 2023",
      description: "Contributed across advisory, finance, and event management, supporting planning, execution, and smooth operations of technical initiatives.",
    },
    {
      title: "University Leader",
      organization: "We Make Devs",
      period: "Jun 2021 - Jun 2023",
      description: "Worked towards making education accessible to all, for free. Established the community at my university, responsible for creating awareness, conducting workshops, and growing the programming culture on campus.",
    },
  ],

    communityInvolvement: [
    {
      role: "Community Member",
      organization: "PUNE DAO",
      period: "Jan 2023 - Present",
      description: "Initiative designed to foster growth & development of the Web3 ecosystem within the city of Pune, bringing together blockchain developers, entrepreneurs, and enthusiasts.",
    },
    {
      role: "Community Member",
      organization: "Tech Thrusters",
      period: "Jan 2023 - Present",
      description: "A thriving community of innovators, creators, and lifelong learners.",
    },
    {
      role: "Global Member",
      organization: "Internet Society",
      period: "Dec 2022 - Present",
      description: "A global charity working to close the digital divide and advocate for a secure and open Internet that people can trust.",
    },
    {
      role: "Member",
      organization: "CNCF Pune",
      period: "May 2021 - Present",
      description: "The Cloud Native Computing Foundation is a subsidiary of the Linux Foundation, founded in 2015 to support cloud-native computing.",
    },
  ],
}

export type LeadershipRole = {
  title: string
  organization: string
  period: string
  description: string
}

export type CommunityRole = {
  role: string
  organization: string
  period: string
  description: string
}

export default resumeData
