"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import SectionHeading from "@/components/ui/section-heading";
import { projects } from "@/lib/projects-data";
import ContentPanel from "@/components/projects/content-panel";

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
  }),
};

function PlaceholderGrid({ accentColor, onPlaceholderClick }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full">
      {[0, 1, 2, 3].map((i) => (
        <button
          key={i}
          onClick={() => onPlaceholderClick(i)}
          className="aspect-[4/3] rounded-xl border border-[var(--color-border)] bg-white/[0.02] relative overflow-hidden group cursor-pointer outline-none text-left w-full transition-all duration-300 hover:border-[var(--color-border-hover)] hover:bg-white/[0.04]"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500"
            style={{
              backgroundImage: `radial-gradient(circle at ${i * 30 + 15}% ${i * 25 + 20}%, ${accentColor} 0%, transparent 60%)`,
            }}
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-[10px] text-white/40 font-mono tracking-wider uppercase">
              View
            </span>
          </div>
        </button>
      ))}
    </div>
  );
}

function PreviewModal({ projectIndex, placeholderIndex, accentColor, onClose }) {
  const [current, setCurrent] = useState(placeholderIndex);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setCurrent((p) => (p === 0 ? 3 : p - 1));
      if (e.key === "ArrowRight") setCurrent((p) => (p === 3 ? 0 : p + 1));
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

      <motion.div
        key={current}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-4xl w-full aspect-[16/10] rounded-2xl border border-white/10 bg-[var(--color-surface-raised)] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at ${current * 30 + 15}% ${current * 25 + 20}%, ${accentColor}22 0%, transparent 70%)`,
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at ${current * 30 + 15}% ${current * 25 + 20}%, ${accentColor} 0%, transparent 50%)`,
          }}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
          <div
            className="w-16 h-16 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center"
            style={{ boxShadow: `0 0 40px ${accentColor}22` }}
          >
            <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: accentColor }} />
          </div>
          <span className="text-sm text-white/40 font-mono tracking-wider">
            Design Mockup {current + 1} / 4
          </span>
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
          aria-label="Close preview"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Prev / Next */}
        <button
          onClick={() => setCurrent((p) => (p === 0 ? 3 : p - 1))}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
          aria-label="Previous design"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          onClick={() => setCurrent((p) => (p === 3 ? 0 : p + 1))}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
          aria-label="Next design"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {[0, 1, 2, 3].map((i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === current ? "bg-white w-4" : "bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to design ${i + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [previewIndex, setPreviewIndex] = useState(null);

  const sectionRef = useRef(null);
  const visible = useInView(sectionRef, { threshold: 0.05 });

  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const total = projects.length;

  const goToPrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  const goToNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  }, [total]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const activeEl = document.activeElement;
      if (
        activeEl &&
        (activeEl.tagName === "INPUT" ||
          activeEl.tagName === "TEXTAREA" ||
          activeEl.isContentEditable)
      ) {
        return;
      }

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToPrev, goToNext]);

  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback(
    (e) => {
      const diffX = touchStartX.current - e.changedTouches[0].clientX;
      const diffY = touchStartY.current - e.changedTouches[0].clientY;

      if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY) * 1.5) {
        if (diffX > 0) {
          goToNext();
        } else {
          goToPrev();
        }
      }
    },
    [goToNext, goToPrev]
  );

  const activeProject = projects[activeIndex];

  return (
    <section
      id="projects"
      ref={sectionRef}
      role="region"
      aria-label="Projects Case Studies"
      className={`flex flex-col px-[var(--section-px)] transition-all duration-700 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <SectionHeading>Projects</SectionHeading>

      <div
        className="relative w-full max-w-6xl mx-auto flex flex-col"
        style={{ touchAction: "pan-y" }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Accent glow */}
        <div
          aria-hidden="true"
          className="absolute -top-20 -left-20 w-72 h-72 rounded-full blur-[120px] opacity-[0.08] pointer-events-none hidden lg:block"
          style={{ backgroundColor: activeProject.accentColor }}
        />

        <div className="relative w-full">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                type: "spring",
                stiffness: 240,
                damping: 26,
                mass: 0.8,
              }}
              className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 xl:gap-16 items-start w-full"
            >
              {/* LEFT — Description */}
              <div className="w-full">
                <ContentPanel
                  project={activeProject}
                  index={activeIndex}
                  total={total}
                />
              </div>

              {/* RIGHT — Placeholder grid (desktop only) */}
              <div className="hidden lg:block w-full">
                <PlaceholderGrid
                  accentColor={activeProject.accentColor}
                  onPlaceholderClick={(i) => setPreviewIndex(i)}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-6 sm:gap-0 mt-10 lg:mt-14 border-t border-white/[0.04] pt-6">
          <div
            className="flex items-center gap-2.5"
            role="tablist"
            aria-label="Select project slide"
          >
            {projects.map((proj, i) => (
              <button
                key={proj.title}
                role="tab"
                aria-selected={i === activeIndex}
                onClick={() => {
                  setDirection(i > activeIndex ? 1 : -1);
                  setActiveIndex(i);
                }}
                className={`relative before:absolute before:-inset-3 h-2.5 rounded-full transition-all duration-500 cursor-pointer outline-none border-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none ${
                  i === activeIndex
                    ? "w-8 bg-white"
                    : "w-2.5 bg-white/15 hover:bg-white/40"
                }`}
                aria-label={`Go to project ${i + 1}: ${proj.title}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={goToPrev}
              className="w-11 h-11 sm:w-10 sm:h-10 rounded-full border border-[var(--color-border)] bg-white/[0.02] flex items-center justify-center text-white/50 hover:text-white hover:bg-white/[0.06] hover:border-[var(--color-border-hover)] transition-all duration-300 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none"
              aria-label="Previous project"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="w-11 h-11 sm:w-10 sm:h-10 rounded-full border border-[var(--color-border)] bg-white/[0.02] flex items-center justify-center text-white/50 hover:text-white hover:bg-white/[0.06] hover:border-[var(--color-border-hover)] transition-all duration-300 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none"
              aria-label="Next project"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="hidden sm:flex items-center justify-center gap-4 mt-6">
          <span className="flex items-center gap-1.5 text-[10px] text-[var(--color-text-muted)] font-mono select-none">
            <kbd className="px-1.5 py-0.5 rounded border border-[var(--color-border)] bg-white/[0.03] text-[9px]">
              ←
            </kbd>
            <kbd className="px-1.5 py-0.5 rounded border border-[var(--color-border)] bg-white/[0.03] text-[9px]">
              →
            </kbd>
            <span className="ml-0.5">Use keyboard arrows to navigate</span>
          </span>
        </div>
      </div>

      {/* Lightbox Preview */}
      <AnimatePresence>
        {previewIndex !== null && (
          <PreviewModal
            projectIndex={activeIndex}
            placeholderIndex={previewIndex}
            accentColor={activeProject.accentColor}
            onClose={() => setPreviewIndex(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
