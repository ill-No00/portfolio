"use client";

import { useRef, useState } from "react";
import { spaceGrotesk } from "@/lib/fonts";
import { useInView } from "@/hooks/use-in-view";
import SectionHeading from "@/components/ui/section-heading";

const projects = [
  {
    title: "Note App",
    description:
      "A full-stack note-taking application that allows users to create, manage, and organize notes efficiently. Features include creating, editing, deleting, and archiving notes, along with powerful search functionality by title, content, or tags.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "React-Router",
      "React-Query",
      "MongoDB",
    ],
    gradient: "from-[#1a1a2e] via-[#16213e] to-[#0f3460]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1}
        stroke="currentColor"
        className="w-16 h-16 text-white/20"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
        />
      </svg>
    ),
    accentColor: "#4a9eff",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "SkateBoard E-Commerce",
    description:
      "A full-stack e-commerce web application for browsing and purchasing skateboards and related equipment. Users can explore products, add items to cart, and complete secure purchases with a seamless checkout experience.",
    technologies: [
      "Next.js",
      "Stripe",
      "React-Query",
      "MongoDB",
      "Tailwind CSS",
    ],
    gradient: "from-[#1a2e1a] via-[#1e3a1e] to-[#0f4f0f]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1}
        stroke="currentColor"
        className="w-16 h-16 text-white/20"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>
    ),
    accentColor: "#34d399",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Income Tracking App",
    description:
      "A full-stack finance tracking application designed to help users manage their income and expenses efficiently. Features include transaction recording, expense categorization, budgeting tools, and data visualization for clear financial insights.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "Recharts",
      "React-Query",
      "MongoDB",
    ],
    gradient: "from-[#2e1a2e] via-[#3a1e3a] to-[#4f0f4f]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1}
        stroke="currentColor"
        className="w-16 h-16 text-white/20"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
        />
      </svg>
    ),
    accentColor: "#c084fc",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Job Hunting Agent",
    description:
      "An AI-powered job hunting assistant that automates the job search process. Features an intelligent agent that scrapes job listings, analyzes CV compatibility, tracks application status, and sends smart notifications for relevant opportunities.",
    technologies: [
      "Next.js",
      "Node.js",
      "Python",
      "Supabase",
      "TanStack Query",
      "AI/LLM",
    ],
    gradient: "from-[#2e1a1a] via-[#3a1e1e] to-[#4f1a0f]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1}
        stroke="currentColor"
        className="w-16 h-16 text-white/20"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
        />
      </svg>
    ),
    accentColor: "#fb923c",
    liveUrl: "#",
    codeUrl: "#",
  },
];

/* ========================================
   Project Not Available Modal
   ======================================== */
function ProjectModal({ accentColor, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 animate-fade-in"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      {/* Modal */}
      <div
        className="relative bg-[var(--color-surface-raised)] border border-[var(--color-border-hover)] rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl animate-pop-in"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Project link not available"
      >
        {/* Glow */}
        <div
          aria-hidden="true"
          className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-16 rounded-full blur-3xl opacity-30"
          style={{ backgroundColor: accentColor }}
        />
        {/* Icon */}
        <div className="flex items-center justify-center mb-4">
          <div className="w-14 h-14 rounded-full border border-[var(--color-border)] flex items-center justify-center bg-white/[0.03]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 text-[var(--color-text-muted)]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
              />
            </svg>
          </div>
        </div>
        <h3
          className={`text-xl text-[var(--color-text-primary)] mb-2 ${spaceGrotesk.className}`}
        >
          Not Available Yet
        </h3>
        <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6">
          This project link is not available yet. Check back soon!
        </p>
        <button
          onClick={onClose}
          className="px-6 py-2.5 rounded-xl text-sm font-medium text-white cursor-pointer border-none outline-none transition-all duration-300 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
          style={{ backgroundColor: accentColor }}
        >
          Got it
        </button>
      </div>
    </div>
  );
}

/* ========================================
   Project Action Link
   ======================================== */
function ActionLink({ icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-white transition-colors duration-300 group/link cursor-pointer bg-transparent border-none outline-none p-0"
    >
      {icon}
      <span className="relative">
        {label}
        <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white/40 group-hover/link:w-full transition-all duration-300" />
      </span>
    </button>
  );
}

/* ========================================
   Project Card
   ======================================== */
function ProjectCard({ data, index }) {
  const ref = useRef(null);
  const visible = useInView(ref, { threshold: 0.1 });
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div
        ref={ref}
        className={`group relative w-full rounded-2xl overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all duration-500 bg-[var(--color-surface)] hover:shadow-xl hover:shadow-black/20 ${
          visible ? "animate-fade-in-up" : "opacity-0"
        }`}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {/* Gradient header with icon */}
        <div
          className={`relative flex items-center justify-center w-full h-48 sm:h-56 bg-linear-to-br ${data.gradient} overflow-hidden`}
        >
          {/* Background dots */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
              backgroundSize: "30px 30px",
            }}
          />
          {/* Floating icon */}
          <div className="animate-float">{data.icon}</div>
          {/* Accent glow */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-20 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
            style={{ backgroundColor: data.accentColor }}
          />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-[var(--color-surface)] to-transparent" />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4 px-5 sm:px-6 pb-6 pt-2">
          <div className="flex items-center gap-3">
            <div
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: data.accentColor }}
            />
            <h3
              className={`text-lg sm:text-xl text-[var(--color-text-primary)] ${spaceGrotesk.className}`}
            >
              {data.title}
            </h3>
          </div>

          <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
            {data.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-row gap-2 flex-wrap mt-1">
            {data.technologies.map((tech, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 rounded-full border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-hover)] hover:text-white transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3 mt-2">
            <ActionLink
              onClick={() => setShowPopup(true)}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              }
              label="Live Demo"
            />
            <span className="text-white/[0.08]">|</span>
            <ActionLink
              onClick={() => setShowPopup(true)}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                  />
                </svg>
              }
              label="Source Code"
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      {showPopup && (
        <ProjectModal
          accentColor={data.accentColor}
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
}

/* ========================================
   Projects Section
   ======================================== */
export default function Projects() {
  return (
    <div id="projects" className="flex flex-col px-[var(--section-px)]">
      <SectionHeading>Projects</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} data={project} index={index} />
        ))}
      </div>
    </div>
  );
}