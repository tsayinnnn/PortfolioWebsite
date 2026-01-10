"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { 
  Sun, Moon, Mail, ChevronRight, MapPin, 
  Linkedin, Github, Layout, Settings, Briefcase, 
  Award, BookOpen, GraduationCap 
} from "lucide-react";


// Simple SVG Icons
const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M22 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
);
// --- DYNAMIC DATA OBJECTS (Add more here in the future) ---
const SKILLS_DATA = [
  { category: "Frontend", items: ["JavaScript", "Tailwind CSS", "React", "Next.js"] },
  { category: "Backend", items: ["Node.js", "Express", "PostgreSQL"] },
  { category: "AI and Machine Learning", items: ["Python", "PyTorch", "TensorFlow"] },
  { category: "Graphic Designing", items: ["Figma", "Photoshop", "Illustrator"] },
];

const EXPERIENCE_DATA = [
  { role: "Principal AI Engineer", company: "Standard Chartered", year: "2025", active: true },
  { role: "AI Ops Engineer", company: "Centre of Excellence for GenAI, Cambridge", year: "2025" },
  { role: "Senior Full-Stack Developer", company: "Core Technology, Cambridge", year: "2024" },
  { role: "Software Engineering Lead", company: "PocketDevs", year: "2022" },
  { role: "Lead Application Developer", company: "Bluewind Asia", year: "2021" },
  { role: "Software Engineer", company: "GCM", year: "2020" },
];

const CERTIFICATIONS_DATA = [
  { title: "Huawei Developer Expert", issuer: "Huawei" },
  { title: "Generative AI Leader", issuer: "Google" },
  { title: "Software Engineering", issuer: "TestDome" },
  { title: "Generative AI Professional", issuer: "Oracle" },
  
];

const AWARDS_DATA = [
  { title: "Huawei Developer Expert", issuer: "Huawei" },
  { title: "Generative AI Leader", issuer: "Google" },
  { title: "Software Engineering", issuer: "TestDome" },
  { title: "Generative AI Professional", issuer: "Oracle" },
];

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const portfolioRef = useRef(null);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      
   
      {/* 1. THE MOVING GRID (Lowest Layer) */}
      <div className="grid-container">
        <div className="grid-lines"></div>
      </div>

      {/* 2. THE WHITE SHADOW GLOW (Middle Layer) */}
      <div className="bg-glow-container" aria-hidden="true"></div>

      {/* 3. THE CONTENT (Top Layer) */}
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-8 py-6 relative z-50">
        <div className="relative w-15 h-15">
          <Image
            src={isDark ? "/logo.svg" : "/logo-dark.svg"}
            alt="cha logo"
            fill
            className="object-contain"
          />
        </div>

        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
        >
          {isDark ? <SunIcon /> : <MoonIcon />}
        </button>
      </nav>
 <section className="relative h-80vh flex flex-col items-center justify-center">
      <main className="relative flex flex-col items-center justify-center pt-24 pb-32 px-6 text-center z-10">
        <a href="https://www.linkedin.com/in/charlenefernandez327/"><div className="name-badge">
          <span className="font-bold">Charlene Fernandez :</span>
          <span className="text-zinc-500">Software Dev - UI/UX Designer</span>
          <span className="ml-1 text-zinc-400">&gt;</span>
        </div> </a>

        <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-[1.1] max-w-5xl mb-8">
          To develop the world <br />
          <span className="text-zinc-400 dark:text-zinc-500">a little more </span>
          <span className="text-[var(--color-brand-pink)]">colorful than the other.</span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mb-12 leading-relaxed">
          Computer Engineering Graduate with years of experience in software
          development, UI/UX Designing and Graphic Design,
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-[var(--color-brand-pink)] text-black font-bold px-10 py-4 rounded-xl hover:opacity-90 transition-all hover:scale-105 active:scale-95">
            Email
          </button>
          <button className="bg-white/5 dark:bg-white/5 backdrop-blur-md text-current font-semibold px-10 py-4 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
            See Portfolio
          </button>
        </div>
      </main>
    </section>
 {/* SECTION 2: PORTFOLIO DETAIL */}
      <section ref={portfolioRef} className="angular-gradient-bg py-24 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* 1. Header Area */}
          <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
            <div className="w-52 h-52 bg-white rounded-2xl shrink-0 shadow-2xl"></div>
            <div className="text-center md:text-left">
              <h2 className="text-6xl font-bold mb-4">Charlene Fernandez</h2>
              <div className="flex items-center justify-center md:justify-start gap-2 text-zinc-400 mb-2">
                <MapPin size={18} /> <span>Bulacan, Philippines</span>
              </div>
              <p className="text-zinc-400 text-lg mb-6">Software Developer / UI/UX Designer</p>
              <div className="flex gap-3 justify-center md:justify-start">
                <button className="p-3 rounded-xl bg-brand-pink text-black"><Mail size={20}/></button>
                <button className="p-3 rounded-xl bg-[#2E2E2E] text-white"><Linkedin size={20}/></button>
                <button className="p-3 rounded-xl bg-brand-pink/20 border border-brand-pink/30 text-brand-pink"><Github size={20}/></button>
              </div>
            </div>
          </div>

          {/* 2. Grid Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left Side (About + Skills) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              
              {/* About Card */}
              <div className="portfolio-card">
                <div className="flex items-center gap-2 mb-6 text-white font-bold uppercase tracking-wider text-sm">
                  <Layout size={18} /> <span>About</span>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
                </p>
              </div>

              {/* Skills Card */}
              <div className="portfolio-card">
                <div className="flex items-center gap-2 mb-8 text-white font-bold uppercase tracking-wider text-sm">
                  <Settings size={18} /> <span>Skills</span>
                </div>
                <div className="space-y-8">
                  {SKILLS_DATA.map((group, idx) => (
                    <div key={idx}>
                      <h4 className="text-white font-bold mb-4">{group.category}</h4>
                      <div className="flex flex-wrap gap-3">
                        {group.items.map((skill, i) => (
                          <span key={i} className="skill-tag">{skill}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side (Experience) - Spans both rows */}
            <div className="lg:col-span-5">
              <div className="portfolio-card">
                <div className="flex items-center gap-2 mb-10 text-white font-bold uppercase tracking-wider text-sm">
                  <Briefcase size={18} /> <span>Experience</span>
                </div>
                
                <div className="relative ml-2 space-y-12">
                  <div className="timeline-line"></div>
                  {EXPERIENCE_DATA.map((item, idx) => (
                    <div key={idx} className="relative pl-10">
                      {/* Timeline Dot */}
                      <div className={`absolute left-0 top-1 w-4 h-4 rounded-full border-2 border-[#2E2E2E] z-10 ${item.active ? 'bg-white' : 'bg-[#111111]'}`}></div>
                      
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <h4 className="text-lg font-bold text-white mb-1">{item.role}</h4>
                          <p className="text-sm text-zinc-500">{item.company}</p>
                        </div>
                        <span className="px-3 py-1 rounded-full border border-[#2E2E2E] text-xs font-bold text-zinc-300">
                          {item.year}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Row (Certifications + Awards) */}
            <div className="lg:col-span-6">
              <div className="portfolio-card">
                <div className="flex items-center gap-2 mb-8 text-white font-bold uppercase tracking-wider text-sm">
                  <GraduationCap size={18} /> <span>Certifications</span>
                </div>
                <div className="grid gap-4">
                  {CERTIFICATIONS_DATA.map((cert, i) => (
                    <div key={i} className="cert-item">
                      <h5 className="font-bold text-white">{cert.title}</h5>
                      <p className="text-xs text-zinc-500">{cert.issuer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="portfolio-card">
                <div className="flex items-center gap-2 mb-8 text-white font-bold uppercase tracking-wider text-sm">
                  <Award size={18} /> <span>Awards and Seminars</span>
                </div>
                <div className="grid gap-4">
                  {AWARDS_DATA.map((award, i) => (
                    <div key={i} className="cert-item">
                      <h5 className="font-bold text-white">{award.title}</h5>
                      <p className="text-xs text-zinc-500">{award.issuer}</p>
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