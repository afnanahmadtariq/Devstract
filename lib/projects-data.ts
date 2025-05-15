export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  website?: string; // Add optional website field
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Charity Web",
    category: "Web Development",
    description: "A web application for a charity organization, likely featuring donation capabilities and information about their cause. Deployed on Vercel.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    website: "https://charity-web-gamma.vercel.app",
  },
  {
    id: 2,
    title: "Usmans",
    category: "Web Development",
    description: "A personal portfolio or project website for Usman, hosted on Vercel.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Next.js", "React", "Vercel"],
    website: "https://usmans.vercel.app",
  },
  {
    id: 3,
    title: "Sahil Study Abroad",
    category: "Web Development",
    description: "A platform or informational website for students looking to study abroad, offering resources and consultancy.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "JavaScript", "CSS", "HTML"],
    website: "https://sahilstudyabroad.com",
  },
  {
    id: 4,
    title: "Agritech Figma Design",
    category: "UX/UI Design",
    description: "A UI/UX design prototype for an agricultural technology application, created in Figma.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Figma", "UI/UX Design"],
    website: "https://www.figma.com/proto/JQXiOZmTUiiqNQe6KuZEZT/Agritech-figma?node-id=1-2&p=f&t=jmKyJx3q1eamjJ8f-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
  },
  {
    id: 5,
    title: "Web Craft Site",
    category: "Web Development",
    description: "A website showcasing web crafting services or a portfolio of web development projects, hosted on Vercel.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    website: "https://web-craft-site.vercel.app/",
  },
  {
    id: 6,
    title: "News Hub Site",
    category: "Web Development",
    description: "A news aggregation or publication website, hosted on Vercel.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    website: "https://news-hub-site.vercel.app/",
  },
  {
    id: 7,
    title: "Learn Hub Site",
    category: "Web Development",
    description: "An e-learning platform or educational resource website, hosted on Vercel.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    website: "https://learn-hub-site.vercel.app/",
  },
  {
    id: 8,
    title: "Track Pro Site",
    category: "Web Development",
    description: "A project management or tracking tool website, hosted on Vercel.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    website: "https://track-pro-site.vercel.app/",
  },
  {
    id: 9,
    title: "Business Website Site",
    category: "Web Development",
    description: "A general business or corporate website, hosted on Vercel.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    website: "https://business-website-site.vercel.app/",
  },
  {
    id: 10,
    title: "Job Connect Site",
    category: "Web Development",
    description: "A job board or recruitment platform website, hosted on Vercel.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    website: "https://job-connect-site.vercel.app/",
  },
  {
    id: 11,
    title: "Modern Shop Site",
    category: "E-commerce",
    description: "A modern e-commerce or online shopping website, hosted on Vercel.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    website: "https://modern-shop-site.vercel.app/",
  },
  {
    id: 12,
    title: "Stream Hub Site",
    category: "Web Development",
    description: "A video streaming or live streaming platform website, hosted on Vercel.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    website: "https://stream-hub-site.vercel.app/",
  },
  {
    id: 13,
    title: "Hassan Corporation",
    category: "Web Development",
    description: "A corporate website for Hassan Corporation, showcasing their services and information. Built with modern web technologies for a seamless user experience.",
    image: "/placeholder.svg?height=600&width=800", // You might want to update this with a specific image for the project
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"], // Assuming technologies, please update if different
    website: "https://hassan-corporation.vercel.app/",
  },
];
