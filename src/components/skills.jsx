"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

import { useRef } from "react";
import { spaceGrotesk } from "@/lib/fonts";
import { useInView } from "@/hooks/use-in-view";
import SectionHeading from "@/components/ui/section-heading";

const frontendData = [
  { skill: "Core Web", level: 12 },
  { skill: "React Ecosystem", level: 11 },
  { skill: "3D / WebGL", level: 7 },
  { skill: "Animations", level: 8 },
  { skill: "Performance & State", level: 9 },
];

const backendData = [
  { skill: "API Development", level: 11 },
  { skill: "Databases", level: 10 },
  { skill: "System Design", level: 9 },
  { skill: "DevOps", level: 5 },
  { skill: "AI Engineering", level: 10 },
];

const frontendExplanations = [
  {
    title: "React Ecosystem",
    desc: "Experience with Next.js, React.js and React libraries such as React Query, React Router, and building scalable component architectures.",
  },
  {
    title: "Core Web",
    desc: "Strong knowledge of HTML, CSS, JavaScript, browser APIs, performance optimization, and accessibility.",
  },
  {
    title: "3D / WebGL",
    desc: "Experience with Three.js, shaders, and GPU-based rendering for interactive web experiences.",
  },
];

const backendExplanations = [
  {
    title: "API Development",
    desc: "Designing REST APIs, authentication, rate limiting, and scalable service architecture.",
  },
  {
    title: "Databases",
    desc: "Experience with relational and NoSQL databases, schema design, indexing, and performance optimization.",
  },
  {
    title: "AI Engineering",
    desc: "Building AI-powered systems, integrating models, and creating automated pipelines for intelligent applications.",
  },
];

function SkillBlock({ data, explanations, label, reverse }) {
  const ref = useRef(null);
  const visible = useInView(ref);

  return (
    <div
      ref={ref}
      className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-center ${
        reverse ? "lg:flex-row-reverse" : ""
      } ${visible ? "animate-fade-in-up" : "opacity-0"}`}
    >
      {/* Radar chart */}
      <div className="select-none pointer-events-none w-full max-w-[28rem] lg:max-w-[34rem] aspect-square">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="60%" cy="60%" outerRadius="70%" data={data}>
            <PolarGrid stroke="rgba(255,255,255,0.06)" />
            <PolarAngleAxis
              dataKey="skill"
              tick={{ fill: "var(--color-text-secondary)", fontSize: 12 }}
            />
            <PolarRadiusAxis tick={false} axisLine={false} />
            <Radar
              stroke="rgba(200,200,200,0.6)"
              fill="rgba(200,200,200,0.15)"
              fillOpacity={0.5}
              dataKey="level"
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Explanations */}
      <div className="flex flex-col gap-4 px-4 lg:px-0 max-w-xl">
        <h3
          className={`text-xs text-[var(--color-text-muted)] uppercase tracking-[0.2em] ${spaceGrotesk.className} mb-2`}
        >
          {label}
        </h3>
        {explanations.map((item, i) => (
          <div
            key={i}
            className="border-l-2 border-white/[0.06] pl-4 hover:border-white/25 transition-colors duration-300 py-1"
          >
            <h4
              className={`text-base text-[var(--color-text-primary)] ${spaceGrotesk.className}`}
            >
              {item.title}
            </h4>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mt-1">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <div id="skills" className="flex flex-col gap-10 lg:gap-16">
      <SectionHeading>Core Skills</SectionHeading>

      <SkillBlock
        data={frontendData}
        explanations={frontendExplanations}
        label="Frontend"
      />
      <SkillBlock
        data={backendData}
        explanations={backendExplanations}
        label="Backend"
        reverse
      />
    </div>
  );
}
