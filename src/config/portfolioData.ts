export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  altText: string;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  location?: string;
  type: string;
  color: "primary" | "secondary" | "tertiary";
  bullets: string[];
}

export interface Skill {
  name: string;
  iconUrl?: string;
  iconName?: string;
  hoverColor: string;
  shadowColor: string;
  textColor: string;
}

export const portfolioData = {
  hero: {
    status: "Ready for Remote / Onsite Opportunities",
    title: "Mahmoud Tolba: Crafting Next-Gen Interfaces",
    description:
      "Innovative Front-End Developer specialized in building fast, responsive, and pixel-perfect web applications using Vue.js, Nuxt.js, React.js and Next.js.",
    profileImage: "/images/profile.jpg",
  },
  stats: [
    { value: "15+", label: "Projects Contributed", color: "text-primary" },
    { value: "3+", label: "Years in Tech Journey", color: "text-secondary" },
    { value: "100%", label: "Responsive & Fluid UI", color: "text-tertiary" },
    { value: "2+", label: "Companies & Freelance", color: "text-on-surface" },
  ],
  about: {
    title: "Clean Code. Seamless Integrations.",
    subtitle: "Technical Prowess",
    paragraphs: [
      "I am a dedicated Front-End Developer with a strong track record of crafting user-centric interfaces. My expertise lies in seamless API integrations, working closely with backend teams to ensure robust application flow.",
      "Currently transforming ideas into interactive web applications at Awamer Alshabaka and mentoring the next generation of coders as an Instructor at iSchool.",
    ],
  },
  skills: [
    { name: "HTML5", hoverColor: "hover:border-[#E34F26]/50", shadowColor: "hover:shadow-[0_0_15px_rgba(227,79,38,0.15)]", textColor: "group-hover:text-[#E34F26]" },
    { name: "CSS3", hoverColor: "hover:border-[#1572B6]/50", shadowColor: "hover:shadow-[0_0_15px_rgba(21,114,182,0.15)]", textColor: "group-hover:text-[#1572B6]" },
    { name: "JavaScript", hoverColor: "hover:border-[#F7DF1E]/50", shadowColor: "hover:shadow-[0_0_15px_rgba(247,223,30,0.15)]", textColor: "group-hover:text-[#F7DF1E]" },
    { name: "TypeScript", hoverColor: "hover:border-[#3178C6]/50", shadowColor: "hover:shadow-[0_0_15px_rgba(49,120,198,0.15)]", textColor: "group-hover:text-[#3178C6]" },
    { name: "Tailwind", hoverColor: "hover:border-[#06B6D4]/50", shadowColor: "hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]", textColor: "group-hover:text-[#06B6D4]" },
    { name: "Bootstrap", hoverColor: "hover:border-[#7952B3]/50", shadowColor: "hover:shadow-[0_0_15px_rgba(121,82,179,0.15)]", textColor: "group-hover:text-[#7952B3]" },
    { name: "Vue.js", hoverColor: "hover:border-[#4FC08D]/50", shadowColor: "hover:shadow-[0_0_15px_rgba(79,192,141,0.15)]", textColor: "group-hover:text-[#4FC08D]" },
    { name: "Nuxt.js", hoverColor: "hover:border-[#00DC82]/50", shadowColor: "hover:shadow-[0_0_15px_rgba(0,220,130,0.15)]", textColor: "group-hover:text-[#00DC82]" },
    { name: "React", hoverColor: "hover:border-[#61DAFB]/50", shadowColor: "hover:shadow-[0_0_15px_rgba(97,218,251,0.15)]", textColor: "group-hover:text-[#61DAFB]" },
    { name: "Pinia", hoverColor: "hover:border-[#FFE066]/50", shadowColor: "hover:shadow-[0_0_15px_rgba(255,224,102,0.15)]", textColor: "group-hover:text-[#FFE066]" },
    { name: "Node.js", hoverColor: "hover:border-[#339933]/50", shadowColor: "hover:shadow-[0_0_15px_rgba(51,153,51,0.15)]", textColor: "group-hover:text-[#339933]" },
    { name: "Express.js", hoverColor: "hover:border-[#ffffff]/30", shadowColor: "hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]", textColor: "group-hover:text-[#ffffff]" },
    { name: "MongoDB", hoverColor: "hover:border-[#47A248]/50", shadowColor: "hover:shadow-[0_0_15px_rgba(71,162,72,0.15)]", textColor: "group-hover:text-[#47A248]" },
    { name: "Compass", hoverColor: "hover:border-[#589636]/50", shadowColor: "hover:shadow-[0_0_15px_rgba(88,150,54,0.15)]", textColor: "group-hover:text-[#589636]" },
    { name: "PHP", hoverColor: "hover:border-[#777BB4]/50", shadowColor: "hover:shadow-[0_0_15px_rgba(119,123,180,0.15)]", textColor: "group-hover:text-[#777BB4]" },
    { name: "Supabase", hoverColor: "hover:border-[#3ECF8E]/50", shadowColor: "hover:shadow-[0_0_15px_rgba(62,207,142,0.15)]", textColor: "group-hover:text-[#3ECF8E]" },
    { name: "Firebase", hoverColor: "hover:border-[#FFCA28]/50", shadowColor: "hover:shadow-[0_0_15px_rgba(255,202,40,0.15)]", textColor: "group-hover:text-[#FFCA28]" },
    { name: "Git & GitHub", hoverColor: "hover:border-[#FFFFFF]/50", shadowColor: "hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]", textColor: "group-hover:text-[#FFFFFF]" },
    { name: "REST APIs", hoverColor: "hover:border-[#A2EEFF]/50", shadowColor: "hover:shadow-[0_0_15px_rgba(162,238,255,0.15)]", textColor: "group-hover:text-[#A2EEFF]" },
  ] as Skill[],
  projects: [
    {
      title: "Laurette E-Commerce",
      description:
        "Premium web interface designed for an elegant brand experience, featuring high-fidelity styling and full responsive layout system.",
      tags: ["Vue / Nuxt", "Tailwind"],
      image: "/laurtte.png",
      link: "https://laurette-site.vercel.app/",
      altText: "Laurette Store Front & Product Grid Interface",
    },
    {
      title: "individuals-rowad Dashboard",
      description:
        "A robust admin dashboard offering extensive analytical data views, consulting certification oversight, and financial metric monitors.",
      tags: ["HTML5", "Tailwind", "JS Dashboard"],
      image: "/alrowad.png",
      link: "https://rowad.ip4s.com/?culture=ar",
      altText: "Rowad Individuals Dashboard UI",
    },
    {
      title: "Wattani Aquaculture",
      description:
        "A prominent Saudi cooperative web solution built to enhance aquaculture development, supporting advanced multi-language localization.",
      tags: ["Nuxt 4", "i18n Localization", "Pinia"],
      image: "/wattani.svg",
      link: "https://wattani-sa.com/",
      altText: "Wattani Project Management Data UI",
    },
    {
      title: "Com-Core Marketplace",
      description:
        "A digital marketplace solution designed to connect Saudi local brands directly with target consumers.",
      tags: ["HTML / CSS", "JavaScript"],
      image:
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=80",
      altText: "Com-Core Marketplace Web View",
    },
  ] as Project[],
  experience: [
    {
      role: "Coding Instructor",
      company: "@Ischool",
      location: "Remote",
      period: "04/2026 – Present",
      type: "Part-Time",
      color: "secondary",
      bullets: [
        "Taught **Algorithms & Data Structures, Python**, and **Web Fundamentals** to school students.",
        "Conducted interactive coding sessions and hands-on programming exercises.",
        "Helped students develop problem-solving, logical thinking, and programming skills.",
        "Mentored students in building beginner-level coding and web projects.",
      ],
    },
    {
      role: "Front End Developer",
      company: "Awamer Alshabaka",
      location: "Mansoura",
      period: "06/2025 – Present",
      type: "Full-Time",
      color: "primary",
      bullets: [
        "Developed and maintained responsive web applications using **Nuxt.js, React.js, and Next.js**.",
        "Collaborated with **.NET, Laravel, and Node.js** backend teams to integrate REST APIs and deliver complete solutions.",
        "Built front-end projects from scratch, implementing reusable components, responsive layouts, and modern UI/UX practices.",
        "Enhanced existing applications through UI improvements, bug fixes, and performance optimization.",
      ],
    },
    {
      role: "Freelancer",
      company: "Self-Employed",
      location: "Remote",
      period: "2022 – Present",
      type: "Freelance",
      color: "tertiary",
      bullets: [
        "Developed responsive web applications and landing pages for clients using **Nuxt.js, React.js, and Next.js**.",
        "Built modern, user-friendly interfaces from design to deployment with a focus on performance and responsiveness.",
        "Integrated REST APIs and customized features based on client requirements.",
        "Maintained and enhanced existing projects by improving UI/UX, fixing bugs, and optimizing performance.",
      ],
    },
  ] as Experience[],
};