"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/use-in-view";
import { spaceGrotesk } from "@/lib/fonts";

/**
 * Section heading with glow text effect and scroll-triggered animation.
 * Replaces the duplicated glow-text pattern across Skills, Projects, About, Contact.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - Heading text
 * @param {string} props.className - Additional classes
 */
export default function SectionHeading({ children, className = "" }) {
  const ref = useRef(null);
  const visible = useInView(ref);

  return (
    <div
      ref={ref}
      className={`flex items-center justify-center w-full mb-16 md:mb-20 ${
        visible ? "animate-fade-in-up" : "opacity-0"
      } ${className}`}
    >
      <div className="relative pt-10 py-4">
        {/* Glow layer */}
        <span
          aria-hidden="true"
          className={`absolute inset-0 flex items-center justify-center blur-xl bg-linear-to-r from-white from-0% to-gray-400 to-60% bg-clip-text text-3xl sm:text-4xl md:text-5xl font-bold text-transparent select-none ${spaceGrotesk.className}`}
        >
          {children}
        </span>
        {/* Visible text */}
        <h2
          className={`relative bg-linear-to-r from-white from-0% to-gray-400 to-60% bg-clip-text text-3xl sm:text-4xl md:text-5xl font-bold text-transparent select-none ${spaceGrotesk.className}`}
        >
          {children}
        </h2>
      </div>
    </div>
  );
}
