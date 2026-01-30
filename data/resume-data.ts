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
  }
  summary: string[]
  skills: {
    languages: string[]
    // architecture: string[]
    cloud: string[]
    data: string[]
    quality: string[]
  }
  experience: WorkExperience[]
  hardSkills: string[]
  softSkills: string[]
  languages: Language[]
  publications: Publication[]
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
}

export default resumeData
