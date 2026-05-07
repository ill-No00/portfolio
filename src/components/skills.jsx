"use client"


import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from "recharts";

import { Space_Grotesk } from "next/font/google";
import { useEffect, useRef, useState } from "react";

const Space_Grotesk_font = Space_Grotesk({
    subsets : ["latin"],
    weight : "700"
})

const frontendData = [
  { skill: "Core Web", level: 12 },
  { skill: "React Ecosystem", level: 11 },
  { skill: "3D / WebGL", level: 7 },
  { skill: "Animations", level: 8 },
  { skill: "Performance & State", level: 9 }
]
const backendData = [
  { skill: "API Development", level: 11 },
  { skill: "Databases", level: 10 },
  { skill: "System Design", level: 9 },
  { skill: "DevOps", level: 5 },
  { skill: "AI Engineering", level: 10 }
]

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

function SkillBlock({ data, explanations, label, reverse }) {
  const ref = useRef(null);
  const visible = useInView(ref);

  return (
    <div ref={ref} className={`flex flex-col lg:flex-row gap-6 lg:gap-20 items-center justify-center ${reverse ? "lg:flex-row-reverse" : ""} ${visible ? "animate-fade-in-up" : "opacity-0"}`}>
      <div className="select-none pointer-events-none w-full max-w-125 lg:max-w-150 aspect-square">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
            <PolarGrid stroke="rgba(255,255,255,0.08)" />
            <PolarAngleAxis dataKey="skill" tick={{ fill: '#C0C0C0', fontSize: 12 }} />
            <PolarRadiusAxis tick={false} axisLine={false} />
            <Radar
              stroke="rgba(200,200,200,0.7)"
              fill="rgba(200,200,200,0.3)"
              fillOpacity={0.4}
              dataKey="level"
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <div className="skill-explanation flex flex-col gap-4 px-4 lg:px-0 max-w-xl">
        <h3 className={`text-lg text-white/40 uppercase tracking-widest ${Space_Grotesk_font.className} mb-2`}>{label}</h3>
        {explanations.map((item, i) => (
          <div key={i} className="border-l border-white/10 pl-4 hover:border-white/30 transition-colors duration-300">
            <h4 className={`text-lg text-[#e3e3e3] ${Space_Grotesk_font.className}`}>{item.title}</h4>
            <p className="text-[#808080] font-extralight text-sm leading-relaxed mt-1">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const titleRef = useRef(null);
  const titleVisible = useInView(titleRef);

  const frontendExplanations = [
    { title: "React Ecosystem", desc: "Experience with Next.js, React.js and React libraries such as React Query, React Router, and building scalable component architectures." },
    { title: "Core Web", desc: "Strong knowledge of HTML, CSS, JavaScript, browser APIs, performance optimization, and accessibility." },
    { title: "3D / WebGL", desc: "Experience with Three.js, shaders, and GPU-based rendering for interactive web experiences." },
  ];

  const backendExplanations = [
    { title: "API Development", desc: "Designing REST APIs, authentication, rate limiting, and scalable service architecture." },
    { title: "Databases", desc: "Experience with relational and NoSQL databases, schema design, indexing, and performance optimization." },
    { title: "AI Engineering", desc: "Building AI-powered systems, integrating models, and creating automated pipelines for intelligent applications." },
  ];

  return (
    <div id="skills" className="flex flex-col gap-16 lg:gap-24">
      <div ref={titleRef} className={`flex items-center justify-center h-fit w-full ${titleVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <span className={`text-3xl sm:text-4xl text-[#e3e3e3] ${Space_Grotesk_font.className} pt-10 absolute mx-auto py-4 flex border w-fit bg-linear-to-r blur-xl from-white from-0% to-gray-400 to-60% bg-clip-text box-content text-transparent text-center select-none`}>Core Skills</span>
        <span className={`text-3xl sm:text-4xl text-[#e3e3e3] ${Space_Grotesk_font.className} pt-10 relative top-0 w-fit h-auto py-4 justify-center flex bg-linear-to-r items-center from-white from-0% to-gray-400 to-60% bg-clip-text text-transparent text-center select-none`}>Core Skills</span>
      </div>

      <SkillBlock data={frontendData} explanations={frontendExplanations} label="Frontend" />
      <SkillBlock data={backendData} explanations={backendExplanations} label="Backend" reverse />
    </div>
  );
}
