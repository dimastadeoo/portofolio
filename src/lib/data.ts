// lib/data.ts

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  imageUrl: string;
}

export const PORTFOLIO_DATA = {
  name: "Dimas Tadeo Prayoga",
  role: "Fullstack Developer",
  bio: "Mengembangkan aplikasi web modern, performan, dan responsif. Berfokus pada Next.js di frontend dan Python di backend.",
  avatarUrl: "https://github.com/shadcn.png",
  socials: {
    github: "https://github.com/dimastadeoo",
    linkedin: "https://linkedin.com/in/dimastadeoo",
    email: "dimastadeoo@gmail.com",
    whatsapp: "628884182953",
  },
  skills: [
    "Next.js", "React", "TypeScript", "Tailwind CSS", 
    "Shadcn UI", "Python (Learning/Upcoming)", "REST API", "Git",
    "Docker", "ssh", "Linux", "HTML", "CSS", "JavaScript", "MSSQL",
    "PostgreSQL", "MySQL", "Netlify", "Vercel", "Cloudinary", "Golang",
    "Gin", "Express.js", "RESTful API", "Node.js", "Sequelize", "Gorm"
  ],
  projects: [
    {
      id: "1",
      title: "E-Shop",
      description: "Aplikasi Belanja Online",
      tags: ["React.js", "Tailwind CSS", "Redux"],
      githubUrl: "https://github.com/dimastadeoo/koda-b8-react",
      demoUrl: "https://easy-shop-reactjs.netlify.app/",
      imageUrl: "/eshop.png",
    },
    {
      id: "2",
      title: "Task Management App",
      description: "Aplikasi produktivitas untuk mengelola tugas harian dengan fitur drag-and-drop.",
      tags: ["React", "TypeScript", "Tailwind"],
      githubUrl: "https://github.com",
      imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
    },
  ] as Project[],
};