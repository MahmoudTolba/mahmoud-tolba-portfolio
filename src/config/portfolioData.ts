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
  type: string;
  color: "primary" | "secondary" | "tertiary";
}

export interface Skill {
  name: string;
  iconUrl?: string;
  iconName?: string; // لـ Lucide React لاحقاً لو احتجناها
  hoverColor: string;
  shadowColor: string;
  textColor: string;
}

export const portfolioData = {
  hero: {
    status: "متاح للفرص الحالية",
    title: "Mahmoud Tolba: Crafting Next-Gen Interfaces",
    description: "Innovative Front-End Developer specialized in building fast, responsive, and pixel-perfect web applications using Vue.js, Nuxt.js, React.js and Next.js.",
    profileImage: "/images/profile.jpg", // سيبه كدا وهقولك تحط الصورة فين في الـ public
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
      "Currently transforming ideas into interactive web applications at Awamer Alshabaka and mentoring the next generation of coders as an Instructor at iSchool."
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
      description: "Premium web interface designed for an elegant brand experience, featuring high-fidelity styling and full responsive layout system.",
      tags: ["Vue / Nuxt", "Tailwind"],
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&auto=format&fit=crop&q=80",
      link: "https://laurette-site.vercel.app/",
      altText: "Laurette Store Front & Product Grid Interface"
    },
    {
      title: "individuals-rowad Dashboard",
      description: "A robust admin dashboard offering extensive analytical data views, consulting certification oversight, and financial metric monitors.",
      tags: ["HTML5", "Tailwind", "JS Dashboard"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
      altText: "Rowad Individuals Dashboard UI"
    },
    {
      title: "Wattani Aquaculture",
      description: "A prominent Saudi cooperative web solution built to enhance aquaculture development, supporting advanced multi-language localization.",
      tags: ["Nuxt 4", "i18n Localization", "Pinia"],
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&auto=format&fit=crop&q=80",
      altText: "Wattani Project Management Data UI"
    },
    {
      title: "Com-Core Marketplace",
      description: "A digital marketplace solution designed to connect Saudi local brands directly with target consumers.",
      tags: ["HTML / CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=80",
      altText: "Com-Core Marketplace Web View"
    }
  ] as Project[],
  experience: [
    { period: "04/2026 - Present", role: "Front End Developer", company: "Awamer Alshabaka (Onsite)", type: "Onsite", color: "primary" },
    { period: "05/2025 - 12/2025", role: "Freelance Web Developer", company: "Remote Projects", type: "Remote", color: "secondary" },
    { period: "06/2025 - Present", role: "Coding Instructor", company: "@iSchool (Part-Time)", type: "Part-Time", color: "tertiary" }
  ] as Experience[]
};