"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Icons
const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M22 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
);

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-8 py-6 relative z-10">
        <div className="relative w-12 h-8">
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
          aria-label="Toggle Theme"
        >
          {isDark ? <SunIcon /> : <MoonIcon />}
        </button>
      </nav>

      {/* Hero Section */}
      <main className="relative flex flex-col items-center justify-center pt-20 pb-32 px-6 text-center">
        
        {/* THE BACKGROUND GLOW DESIGN ELEMENT */}
        <div className="bg-glow-container" aria-hidden="true"></div>

        {/* Content (Z-index 10 ensures it sits above the glow) */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Name Badge */}
          <a href = "https://www.linkedin.com/in/charlenefernandez327/">
          <div className="name-badge">
            <span className="font-bold">Charlene Fernandez :</span>
            <span className="text-zinc-500">Software Dev - UI/UX Designer</span>
            <span className="ml-1 text-zinc-400">&gt;</span>
          </div> </a>

          {/* Heading */}
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-[1.1] max-w-5xl mb-8">
            To develop the world <br />
            <span className="text-zinc-400 dark:text-zinc-500">a little more </span>
            <span className="text-[var(--color-brand-pink)]">colorful than the other.</span>
          </h1>

          {/* Sub-text */}
          <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mb-12 leading-relaxed">
            Computer Engineering Graduate with years of experience in software
            development, UI/UX Designing and Graphic Design,
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-email">Email</button>
            <button className="btn-portfolio">See Portfolio</button>
          </div>
        </div>
      </main>
    </div>
  );
}