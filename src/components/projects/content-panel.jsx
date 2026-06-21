"use client";

import { motion } from "framer-motion";
import { spaceGrotesk } from "@/lib/fonts";

/**
 * @typedef {import('../../lib/projects-data').Project} Project
 */

/**
 * @typedef {Object} ContentPanelProps
 * @property {Project} project - The active project data.
 * @property {number} index - Index of the active project.
 * @property {number} total - Total number of projects.
 * @property {(url: string) => void} onLiveClick - Live demo button click handler.
 * @property {(url: string) => void} onCodeClick - Source code button click handler.
 */

// Stagger animation variants for clean, standard Framer Motion orchestration
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/**
 * Renders the detail panel for the active project.
 * Uses staggered entry transitions and maintains strict visual hierarchy.
 *
 * @param {ContentPanelProps} props
 */
export default function ContentPanel({
  project,
  index,
  total,
}) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-5 sm:gap-6"
    >
      {/* 0: Project Index Counter */}
      <motion.div
        variants={itemVariants}
        className="text-xs text-[var(--color-text-muted)] tracking-wider uppercase font-mono font-medium select-none"
      >
        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </motion.div>

      {/* 1: Title */}
      <motion.h3
        variants={itemVariants}
        className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] leading-tight tracking-tight ${spaceGrotesk.className}`}
      >
        {project.title}
      </motion.h3>

      {/* 2: Short Description */}
      <motion.p
        variants={itemVariants}
        className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed"
      >
        {project.description}
      </motion.p>

      {/* 3: Tech Badges */}
      <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs px-3 py-1 rounded-full border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-hover)] hover:text-white transition-colors duration-300 select-none"
          >
            {tech}
          </span>
        ))}
      </motion.div>

      {/* 4: Key Features */}
      {project.features && (
        <motion.div variants={itemVariants} className="space-y-3">
          <h4 className="text-[11px] uppercase tracking-[0.08em] text-[var(--color-text-muted)] font-semibold select-none">
            Key Features
          </h4>
          <ul className="space-y-2" aria-label={`Key features of ${project.title}`}>
            {project.features.map((feature, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-sm text-[var(--color-text-secondary)]"
              >
                <svg
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  style={{ color: project.accentColor }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.div>
  );
}
