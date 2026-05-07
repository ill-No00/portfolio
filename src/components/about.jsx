"use client";

import { Space_Grotesk } from "next/font/google";
import { useEffect, useRef, useState } from "react";

const Space_Grotesk_font = Space_Grotesk({
  subsets: ["latin"],
  weight: "700",
});

function useInView(ref) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return isVisible;
}

const experienceItems = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    label: "Full-Stack Development",
    desc: "Building complete web applications from frontend to backend",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
      </svg>
    ),
    label: "AI & Automation",
    desc: "Integrating AI models and building intelligent automation pipelines",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    label: "Database Design",
    desc: "Schema modeling, optimization, and data architecture with SQL & NoSQL",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    label: "Web Performance",
    desc: "Optimizing load times, rendering, and delivering fast user experiences",
  },
];

export default function About() {
  const ref = useRef(null);
  const visible = useInView(ref);
  const titleRef = useRef(null);
  const titleVisible = useInView(titleRef);

  return (
    <div id="about" className="px-4 sm:px-6 md:px-10 py-20 md:py-32">
      <div ref={titleRef} className={`flex items-center justify-center h-fit w-full mb-16 ${titleVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <span className={`text-3xl sm:text-4xl text-[#e3e3e3] ${Space_Grotesk_font.className} pt-10 absolute mx-auto py-4 flex border w-fit bg-linear-to-r blur-xl from-white from-0% to-gray-400 to-60% bg-clip-text box-content text-transparent text-center select-none`}>About Me</span>
        <span className={`text-3xl sm:text-4xl text-[#e3e3e3] ${Space_Grotesk_font.className} pt-10 relative top-0 w-fit h-auto py-4 justify-center flex bg-linear-to-r items-center from-white from-0% to-gray-400 to-60% bg-clip-text text-transparent text-center select-none`}>About Me</span>
      </div>

      <div ref={ref} className={`max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 ${visible ? "animate-fade-in-up" : "opacity-0"}`}>
        {/* Left - Bio */}
        <div className="flex flex-col gap-6">
          <p className="text-[#C0C0C0] leading-relaxed text-sm sm:text-base">
            I&apos;m a passionate full-stack developer with a deep love for building products that solve real problems. My journey in software development started with curiosity about how websites work, and it has evolved into a career focused on creating polished, performant web applications.
          </p>
          <p className="text-[#808080] leading-relaxed text-sm sm:text-base">
            I specialize in the JavaScript ecosystem, working with React, Next.js, and Node.js on a daily basis. I&apos;m also deeply interested in AI engineering — building intelligent systems that automate workflows and enhance user experiences.
          </p>
          <p className="text-[#808080] leading-relaxed text-sm sm:text-base">
            When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects, or diving deep into system design concepts. I believe in writing clean, maintainable code and continuously improving my craft.
          </p>

          {/* Stats */}
          <div className="flex flex-row gap-8 mt-4">
            <div className="flex flex-col">
              <span className={`text-3xl text-white ${Space_Grotesk_font.className}`}>4+</span>
              <span className="text-[#808080] text-xs mt-1">Projects Built</span>
            </div>
            <div className="w-px bg-white/10" />
            <div className="flex flex-col">
              <span className={`text-3xl text-white ${Space_Grotesk_font.className}`}>6+</span>
              <span className="text-[#808080] text-xs mt-1">Technologies</span>
            </div>
            <div className="w-px bg-white/10" />
            <div className="flex flex-col">
              <span className={`text-3xl text-white ${Space_Grotesk_font.className}`}>∞</span>
              <span className="text-[#808080] text-xs mt-1">Curiosity</span>
            </div>
          </div>
        </div>

        {/* Right - Experience items */}
        <div className="flex flex-col gap-4">
          {experienceItems.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/2 hover:border-white/15 hover:bg-white/4 transition-all duration-400 group"
            >
              <div className="shrink-0 w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#C0C0C0] group-hover:text-white group-hover:bg-white/10 transition-all duration-300">
                {item.icon}
              </div>
              <div className="flex flex-col gap-1">
                <span className={`text-sm text-[#e3e3e3] ${Space_Grotesk_font.className}`}>{item.label}</span>
                <span className="text-xs text-[#808080] leading-relaxed">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
