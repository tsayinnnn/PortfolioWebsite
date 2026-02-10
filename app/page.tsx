"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
// Using the standard import with a fix for Turbopack inside the component
import { animate } from 'animejs';
import { 
  Sun, Moon, Mail, ChevronRight, MapPin, 
  Linkedin, Github, Layout, Settings, Briefcase, 
  Award, GraduationCap 
} from "lucide-react";
import { stagger } from "animejs";


// --- DYNAMIC DATA OBJECTS (Edit these to add more in the future) ---
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

  // --- ANIME.JS HERO ENTRANCE ---
  useEffect(() => {
    animate('.animate-hero',{
      translateY: [50, 0],
      opacity: [0, 1],
      delay: stagger(150),
      easing: 'easeOutExpo',
      duration: 1200,
    });
  }, []);

  // --- ANIME.JS SCROLL TRIGGER ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate('.portfolio-card-animate',{
              translateY: [50, 0],
              opacity: [0, 1],
              delay: stagger(150),
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
    return () => observer.disconnect();
  }, []);

  // Theme Toggle Logic
  useEffect(() => {
    const root = window.document.documentElement;
    isDark ? root.classList.add("dark") : root.classList.remove("dark");
  }, [isDark]);

  const scrollToPortfolio = () => {
    portfolioRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-brand-pink/30">
      
      {/* 1. BACKGROUND LAYERS */}
      <div className="grid-container"><div className="grid-lines"></div></div>
      <div className="bg-glow-container" aria-hidden="true"></div>

      {/* 2. NAVIGATION */}
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-8 py-6 relative z-50">
        <div className="relative w-12 h-12 animate-hero opacity-0">
          <Image
            src={isDark ? "/logo.svg" : "/logo-dark.svg"}
            alt="cha logo"
            fill
            className="object-contain"
          />
        </div>

        <button
          onClick={() => setIsDark(!isDark)}
          className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all animate-hero opacity-0"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </nav>

      {/* 3. HERO SECTION */}
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
            <a href="mailto:charlenejuanfernandez@gmail.com" target="_blank"><button className="bg-brand-pink text-black font-bold px-10 py-4 rounded-xl hover:opacity-90 transition-all hover:scale-105 active:scale-95">
              <div className="flex items-center gap-2"><Mail size={18}/> Email</div>
            </button> </a>
            <a href="https://www.canva.com/design/DAGpsOQaUuw/yrOSnsScmCKZj4Z-fovUEA/edit?utm_content=DAGpsOQaUuw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton ">
              <button
                className="btn-portfolio"
              >
                See Portfolio
              </button>
            </a>
          </div>
        </main>
      </section>

      {/* 4. PORTFOLIO DETAIL SECTION */}
      <section ref={portfolioRef} className="section-ambient-bg py-24 px-6 border-t border-white/5">
        <div className="section-grid-overlay"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Portfolio Header */}
          <div className="flex flex-col md:flex-row items-center gap-10 mb-20 portfolio-card-animate opacity-0">
            {/*<div className="w-52 h-52 bg-white rounded-2xl shrink-0 shadow-2xl"></div>*/}
            <Image src="me.jpg" alt="A picture of me." width={200} height={200} className="w-52 h-52 rounded-2xl object-cover" />
            <div className="text-center md:text-left">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">Charlene Fernandez</h2>
              <div className="flex items-center justify-center md:justify-start gap-2 text-zinc-500 mb-6">
                <MapPin size={18} /> <span>Bulacan, Philippines</span>
              </div>
              <div className="flex gap-3 justify-center md:justify-start">
                <a href="mailto:charlenejuanfernandez@gmail.com" target="_blank"><button className="p-3 rounded-xl bg-brand-pink text-black"><Mail size={20}/></button></a>
                <a href="https://www.linkedin.com/in/charlenefernandez327/" target="_blank"><button className="p-3 rounded-xl bg-[#2E2E2E] text-white"><Linkedin size={20}/></button></a>
                <a href="https://github.com/tsayinnnn" target="_blank"><button className="p-3 rounded-xl bg-brand-pink/10 border border-brand-pink/20 text-brand-pink"><Github size={20}/></button></a>
              </div>
            </div>
          </div>

          {/* Grouped Content Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left: About + Skills */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="portfolio-card portfolio-card-animate opacity-0">
                <div className="flex items-center gap-2 mb-6 font-bold uppercase tracking-widest text-[10px] text-zinc-500">
                  <Layout size={14} /> <span>About</span>
                </div>
                <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                 Passionate Computer Engineering student seeking employment opportunities in computer engineering-related positions and internships. With a solid foundation in front-end development, full-stack development, and graphic design, I aim to leverage my knowledge and skills to achieve my professional goals. Committed to continuous improvement in the field, I seek to gain practical experience by collaborating with seasoned engineers, allowing my full potential to manifest and contribute effectively.
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

            {/* Right: Experience Timeline */}
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
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <h4 className="text-sm font-bold mb-1">{item.role}</h4>
                          <p className="text-[10px] text-zinc-500">{item.company}</p>
                        </div>
                        <span className="px-2 py-0.5 rounded-full border border-zinc-500/30 text-[10px] font-bold text-zinc-400">{item.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Row: Certs + Awards */}
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

    </div>
  );
}
