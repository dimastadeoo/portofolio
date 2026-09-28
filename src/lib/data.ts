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
  bio: `
  Full Stack Web Developer dengan pengalaman praktis dalam membangun aplikasi web yang handal dan scalable. Terbiasa mengembangkan frontend menggunakan React.js, Redux Toolkit, dan Tailwind CSS, serta backend berkinerja tinggi menggunakan Golang (Gin Framework), Express dan PostgreSQL.

  Memiliki keahlian dalam perancangan RESTful API, penerapan clean architecture, dan autentikasi JWT. Berpengalaman dalam praktik DevOps seperti penggunaan Docker, alur CI/CD, serta cloud deployment di Netlify dan Vercel. Selain pengembangan web, juga memiliki latar belakang di bidang IT Support dan konfigurasi jaringan MikroTik. Berkomitmen untuk selalu menulis clean code yang mudah dirawat (maintainable) serta terus meningkatkan keahlian melalui penerapan best practices pada proyek nyata.
  `,
  avatarUrl: "/foto-diri.png",
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
      title: "Online Shop E-Shop",
      description: "Aplikasi Belanja Online",
      tags: ["React.js", "Tailwind CSS", "Redux"],
      githubUrl: "https://github.com/dimastadeoo/koda-b8-react",
      demoUrl: "https://easy-shop-reactjs.netlify.app/",
      imageUrl: "/eshop.png",
    },
    {
      id: "2",
      title: "Sticky Note",
      description: "Aplikasi untuk membuat catatan harian",
      tags: ["React.js", "Tailwind CSS", "Redux", "Express.js", "postgres"],
      githubUrl: "https://github.com/dimastadeoo/koda-b8-backendjs2",
      demoUrl: "https://sticky-note-dimastadeoo.vercel.app",
      imageUrl: "/sticky-note.png",
    },
  ] as Project[],
};