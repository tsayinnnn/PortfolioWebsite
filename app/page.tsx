"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { animate, stagger } from 'animejs';
import { motion } from "framer-motion"; 
import { 
  Sun, Moon, Mail, ChevronRight, MapPin, 
  Linkedin, Github, Layout, Settings, Briefcase, 
  Award, GraduationCap, Code2, ExternalLink 
} from "lucide-react";

// --- DYNAMIC DATA OBJECTS ---
const SKILLS_DATA = [
  { category: "Frontend", items: ["JavaScript", "Tailwind CSS", "React", "Next.js"] },
  { category: "Backend", items: ["Node.js", "Express", "PostgreSQL"] },
  { category: "AI and Machine Learning", items: ["Python", "PyTorch", "TensorFlow"] },
  { category: "Graphic Designing", items: ["Figma", "Photoshop", "Illustrator"] },
];

const EXPERIENCE_DATA = [
  { role: "UI/UX Designer and Front-End Developer", company: "iWave inc., Makati, Philippines", year: "2025", active: true },
  { role: "Front-End Developer", company: "Empatho Pte Ltd., Singapore", year: "2025" },
  { role: "Software Developer Intern", company: "iWave inc., Makati, Philippines", year: "2024" },
  { role: "Tech Executive Officer", company: "Linetype Technologies Pte Ltd., Singapore", year: "2024" },
  { role: "Graphic Designer and Social Media Manager", company: "Office of a Public Figure", year: "2024" },
  { role: "FrontEnd Developer and Chief Design Officer", company: "Start Up: Cygntek One Loyal", year: "2023" },
];

// Added 'url' property to make these clickable
const PROJECTS_DATA = [
  { 
    id: 1, 
    title: "ONELOYAL", 
    category: "Mobile App Development", 
    lightImg: "/proj1-light.png", 
    darkImg: "/proj1-dark.png",
    url: "https://play.google.com/store/apps/details?id=com.cygntek.oneloyal&pcampaignid=web_share" 
  },
  { 
    id: 2, 
    title: "Linetype", 
    category: "Web Development and Mobile App Designing", 
    lightImg: "/proj2-light.png", 
    darkImg: "/proj2-dark.png",
    url: "https://www.linetype.co/" 
  },
  { 
    id: 3, 
    title: "AUTOMATED PAYROLL SYSTEM", 
    category: "Enterprise Software", 
    lightImg: "/proj3-light.png", 
    darkImg: "/proj3-dark.png",
    url: "https://github.com/tsayinnnn" 
  },
  { 
    id: 4, 
    title: "iWave Website", 
    category: "Full-Stack Web Development", 
    lightImg: "/proj4-light.png", 
    darkImg: "/proj4-dark.png",
    url: "https://iwave.com.ph/"
  },
];

const CERTIFICATIONS_DATA = [
  { title: "Google IT Support Professional Certificate", issuer: "Google, 2025" },
  { title: "Networking Basics", issuer: "Cisco, 2025" },
  { title: "Technical Support Fundamentals", issuer: "Google, 2024" },
  { title: "Overview of AI", issuer: "Huawei, 2024" },
];

const AWARDS_DATA = [
  { title: "Civil Service Commission, Professional Passer", issuer: "March 2024" },
  { title: "R.A. 7687 Undergraduate S&T Scholarship", issuer: "DOST" },
  { title: "President’s Lister", issuer: "Bulacan State University 2024-2025" },
  { title: "Dean’s Lister", issuer: "Bulacan State University 2023-2025" },
];

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const portfolioRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    animate('.animate-hero',{
      translateY: [50, 0],
      opacity: [0, 1],
      delay: stagger(150),
      easing: 'easeOutExpo',
      duration: 1200,
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate('.portfolio-card-animate',{
              translateY: [50, 0],
              opacity: [0, 1],
              delay: stagger(100),
              easing: 'easeOutExpo',
              duration: 1000,
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (portfolioRef.current) observer.observe(portfolioRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    isDark ? root.classList.add("dark") : root.classList.remove("dark");
  }, [isDark]);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-brand-pink/30">
      <div className="grid-container"><div className="grid-lines"></div></div>
      <div className="bg-glow-container" aria-hidden="true"></div>

      {/* NAVIGATION */}
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-8 py-6 relative z-50">
        <div className="relative w-12 h-12 animate-hero opacity-0">
          <Image src={isDark ? "/logo.svg" : "/logo-dark.svg"} alt="logo" fill className="object-contain" />
        </div>
        <button onClick={() => setIsDark(!isDark)} className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all animate-hero opacity-0">
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center">
        <main className="relative flex flex-col items-center justify-center pt-10 pb-32 px-6 text-center z-10">
          <a href="https://www.linkedin.com/in/charlenefernandez327/" target="_blank" className="animate-hero opacity-0">
            <div className="name-badge hover:border-brand-pink transition-colors cursor-pointer">
              <span className="font-bold">Charlene Fernandez :</span>
              <span className="text-zinc-500">Software Dev - UI/UX Designer</span>
              <ChevronRight size={14} className="ml-1 text-zinc-400" />
            </div>
          </a>

          <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-[1.1] max-w-5xl mb-8 animate-hero opacity-0">
            To develop the world <br />
            <span className="text-zinc-400 dark:text-zinc-600">a little more </span>
            <span className="text-brand-pink">colorful than the other.</span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mb-12 leading-relaxed animate-hero opacity-0">
            Computer Engineering Student with years of experience in software
            development, UI/UX Designing and Graphic Design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-hero opacity-0">
            <a href="mailto:charlenejuanfernandez@gmail.com">
              <button className="bg-brand-pink text-black font-bold px-10 py-4 rounded-xl hover:opacity-90 transition-all hover:scale-105 active:scale-95">
                <div className="flex items-center gap-2"><Mail size={18}/> Email</div>
              </button>
            </a>
            <button onClick={scrollToProjects} className="btn-portfolio">
              See Portfolio
            </button>
          </div>
        </main>
      </section>

      {/* PORTFOLIO DETAIL SECTION */}
      <section ref={portfolioRef} className="section-ambient-bg py-24 px-6 border-t border-white/5">
        <div className="section-grid-overlay"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-10 mb-20 portfolio-card-animate opacity-0">
            <Image src="/me.jpg" alt="Charlene" width={200} height={200} className="w-52 h-52 rounded-2xl object-cover" />
            <div className="text-center md:text-left">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">Charlene Fernandez</h2>
              <div className="flex items-center justify-center md:justify-start gap-2 text-zinc-500 mb-6">
                <MapPin size={18} /> <span>Bulacan, Philippines</span>
              </div>
              <div className="flex gap-3 justify-center md:justify-start">
                <a href="mailto:charlenejuanfernandez@gmail.com"><button className="p-3 rounded-xl bg-brand-pink text-black hover:scale-110 transition-transform"><Mail size={20}/></button></a>
                <a href="https://www.linkedin.com/in/charlenefernandez327/" target="_blank"><button className="p-3 rounded-xl bg-[#2E2E2E] text-white hover:scale-110 transition-transform"><Linkedin size={20}/></button></a>
                <a href="https://github.com/tsayinnnn" target="_blank"><button className="p-3 rounded-xl bg-brand-pink/10 border border-brand-pink/20 text-brand-pink hover:scale-110 transition-transform"><Github size={20}/></button></a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="portfolio-card portfolio-card-animate opacity-0">
                <div className="flex items-center gap-2 mb-6 font-bold uppercase tracking-widest text-[10px] text-zinc-500">
                  <Layout size={14} /> <span>About</span>
                </div>
                <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                 Passionate Computer Engineering student seeking employment opportunities in computer engineering-related positions and internships. I aim to leverage my knowledge in front-end development and UI/UX design to achieve professional excellence.
                </p>
              </div>

              <div className="portfolio-card portfolio-card-animate opacity-0">
                <div className="flex items-center gap-2 mb-8 font-bold uppercase tracking-widest text-[10px] text-zinc-500">
                  <Settings size={14} /> <span>Skills</span>
                </div>
                <div className="space-y-8">
                  {SKILLS_DATA.map((group, idx) => (
                    <div key={idx}>
                      <h4 className="text-sm font-bold mb-4">{group.category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((skill, i) => (
                          <span key={i} className="skill-tag text-xs">{skill}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="portfolio-card portfolio-card-animate opacity-0 h-full">
                <div className="flex items-center gap-2 mb-10 font-bold uppercase tracking-widest text-[10px] text-zinc-500">
                  <Briefcase size={14} /> <span>Experience</span>
                </div>
                <div className="relative ml-2 space-y-12">
                  <div className="timeline-line"></div>
                  {EXPERIENCE_DATA.map((item, idx) => (
                    <div key={idx} className="relative pl-10">
                      <div className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-zinc-500 z-10 ${item.active ? 'bg-brand-pink border-brand-pink' : 'bg-transparent'}`}></div>
                      <div>
                        <h4 className="text-sm font-bold mb-1">{item.role}</h4>
                        <p className="text-[10px] text-zinc-500">{item.company}</p>
                        <span className="px-2 py-0.5 rounded-full border border-zinc-500/30 text-[10px] font-bold text-zinc-400 inline-block mt-2">{item.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="portfolio-card portfolio-card-animate opacity-0">
                <div className="flex items-center gap-2 mb-8 font-bold uppercase tracking-widest text-[10px] text-zinc-500">
                  <GraduationCap size={14} /> <span>Certifications</span>
                </div>
                <div className="grid gap-3">
                  {CERTIFICATIONS_DATA.map((cert, i) => (
                    <div key={i} className="cert-item">
                      <h5 className="text-sm font-bold">{cert.title}</h5>
                      <p className="text-[10px] text-zinc-500">{cert.issuer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="portfolio-card portfolio-card-animate opacity-0">
                <div className="flex items-center gap-2 mb-8 font-bold uppercase tracking-widest text-[10px] text-zinc-500">
                  <Award size={14} /> <span>Awards and Seminars</span>
                </div>
                <div className="grid gap-3">
                  {AWARDS_DATA.map((award, i) => (
                    <div key={i} className="cert-item">
                      <h5 className="text-sm font-bold">{award.title}</h5>
                      <p className="text-[10px] text-zinc-500">{award.issuer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW PROJECTS SECTION */}
      <section ref={projectsRef} className="py-24 px-6 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 portfolio-card-animate opacity-0">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              Recent <span className="text-brand-pink">Projects</span>
            </h2>
            <p className="text-zinc-500 text-sm mt-2">Software Development</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS_DATA.map((project) => (
              <motion.a 
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -12 }}
                className="group relative overflow-hidden rounded-3xl bg-zinc-900/50 border border-white/10 aspect-video portfolio-card-animate opacity-0 block"
              >
                <Image 
                  src={isDark ? project.darkImg : project.lightImg} 
                  alt={project.title}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-2xl font-black text-white tracking-tighter">{project.title}</h3>
                      <p className="text-brand-pink text-xs font-bold uppercase tracking-widest mt-1">{project.category}</p>
                    </div>
                    <div className="bg-white/10 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                      <ExternalLink size={18} className="text-white" />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          
          </div>
          <div className="flex flex-wrap justify-center gap-8 mt-16 opacity-30 grayscale portfolio-card-animate opacity-0">
            <a href="https://www.canva.com/design/DAGpsOQaUuw/yrOSnsScmCKZj4Z-fovUEA/edit?utm_content=DAGpsOQaUuw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton ">
            <button className="btn-portfolio"> See More</button> </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mt-16 portfolio-card-animate opacity-0">
             <Code2 size={32} />
          </div>
        </div>
      </section>
    </div>
  );
}