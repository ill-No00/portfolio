"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { spaceGrotesk } from "@/lib/fonts";
import { useInView } from "@/hooks/use-in-view";
import SectionHeading from "@/components/ui/section-heading";
import { projects } from "@/lib/projects-data";
import BrowserFrame from "@/components/projects/browser-frame";
import ContentPanel from "@/components/projects/content-panel";

/**
 * Slide animation variants for smooth transition between projects.
 */
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

/**
 * Main Projects Section component.
 * Features a fully responsive case-study gallery with subtle 3D tilt hovers,
 * keyboard accessibility, touch swiping, and layout shift prevention.
 */
export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Reset screenshot index to first image when user changes the active project
  useEffect(() => {
    setActiveImageIndex(0);
  }, [activeIndex]);
  
  const sectionRef = useRef(null);
  const visible = useInView(sectionRef, { threshold: 0.05 });
  
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const total = projects.length;

  // Memoized navigation callbacks to prevent re-renders in children
  const goToPrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  const goToNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  }, [total]);

  // Keyboard navigation support - ignores keystrokes when user is typing in forms
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Check if user is typing in an input element
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

  // Touch Swipe handlers - filters out vertical scrolls to avoid scroll-hijack
  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback(
    (e) => {
      const diffX = touchStartX.current - e.changedTouches[0].clientX;
      const diffY = touchStartY.current - e.changedTouches[0].clientY;

      // Check if swipe was predominantly horizontal and met the threshold
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
        {/* Accent glow behind entire gallery */}
        <div
          aria-hidden="true"
          className="absolute -top-20 -right-20 w-72 h-72 rounded-full blur-[120px] opacity-[0.08] pointer-events-none hidden lg:block"
          style={{ backgroundColor: activeProject.accentColor }}
        />

        {/* Carousel Wrapper — grows naturally on mobile, fixed height on desktop */}
        <div className="relative w-full lg:overflow-hidden lg:h-[65vh]">
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
              className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 xl:gap-16 items-start w-full lg:h-full"
            >
              {/* LEFT PANEL — full height on mobile, scrollable preview area on desktop */}
              <div className="relative w-full flex flex-col gap-3.5 lg:h-full lg:overflow-y-auto overflow-x-hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {/* Accent aura glow behind screenshot */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-6 -z-10 rounded-3xl opacity-15 blur-3xl transition-colors duration-500 pointer-events-none"
                  style={{ backgroundColor: activeProject.accentColor }}
                />
                
                {/* Main Browser Window */}
                <BrowserFrame
                  src={activeProject.images[activeImageIndex] || activeProject.images[0]}
                  alt={activeProject.title}
                  accentColor={activeProject.accentColor}
                  priority={activeIndex === 0}
                />

                {/* Horizontal Scrollable Thumbnails */}
                {activeProject.images.length > 1 && (
                  <div
                    className="flex gap-2.5 overflow-x-auto py-1.5 px-0.5 max-w-full scrollbar-none snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden flex-shrink-0"
                    role="group"
                    aria-label={`${activeProject.title} screenshot gallery`}
                  >
                    {activeProject.images.map((img, idx) => (
                      <button
                        key={img}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`relative aspect-[16/10] w-16 sm:w-20 rounded-lg overflow-hidden flex-shrink-0 cursor-pointer snap-start transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none ${
                          idx === activeImageIndex
                            ? "ring-2 ring-white opacity-100 scale-95"
                            : "ring-1 ring-white/10 opacity-40 hover:opacity-80"
                        }`}
                        aria-label={`View screenshot ${idx + 1}`}
                      >
                        <Image
                          src={img}
                          alt={`Screenshot ${idx + 1} thumbnail`}
                          fill
                          sizes="(max-width: 640px) 64px, 80px"
                          className="object-cover pointer-events-none"
                          draggable={false}
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* RIGHT PANEL — fixed in place, no scroll */}
              <ContentPanel
                project={activeProject}
                index={activeIndex}
                total={total}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-6 sm:gap-0 mt-8 lg:mt-14 border-t border-white/[0.04] pt-6">
          {/* Progress Indicators (Tablist) */}
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
                aria-controls="projects-carousel"
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

          {/* Arrow Buttons */}
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

        {/* Keyboard Navigation Hint */}
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


    </section>
  );
}
