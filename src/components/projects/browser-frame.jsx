"use client";

import { useMotionValue, useSpring, useTransform, motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

/**
 * @typedef {Object} BrowserFrameProps
 * @property {string} src - The image source path.
 * @property {string} alt - The alt text for the image.
 * @property {string} accentColor - Hex color representing the active project theme.
 * @property {boolean} priority - Whether the image should be loaded with high priority.
 */

/**
 * A sleek, modern browser mockup frame that displays project screenshots.
 * Incorporates a premium 3D tilt parallax effect on desktop hovers.
 *
 * @param {BrowserFrameProps} props
 */
export default function BrowserFrame({ src, alt, accentColor, priority }) {
  // Motion values for tracking cursor position (normalized between 0 and 1)
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Smooth springs for 3D tilt (maximum of 3.5 degrees tilt for subtle effect)
  const tiltX = useSpring(useTransform(mouseY, [0, 1], [3.5, -3.5]), {
    damping: 30,
    stiffness: 150,
  });
  const tiltY = useSpring(useTransform(mouseX, [0, 1], [-3.5, 3.5]), {
    damping: 30,
    stiffness: 150,
  });

  // Event handlers to update motion values
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (rect.width && rect.height) {
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    }
  };

  const handleMouseLeave = () => {
    // Reset to center smoothly
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: tiltX,
        rotateY: tiltY,
        transformStyle: "preserve-3d",
        perspective: 1200,
      }}
      className="relative rounded-xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface-raised)] shadow-lg shadow-black/30 transition-shadow duration-300 hover:shadow-2xl hover:shadow-black/50 group"
    >
      {/* Subtle Chrome Bar */}
      <div 
        className="flex items-center gap-1.5 px-4 py-[10px] border-b border-[var(--color-border)] bg-white/[0.02]"
        style={{ transform: "translateZ(10px)" }}
      >
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/70 group-hover:bg-[#ff5f56] transition-colors duration-300" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/70 group-hover:bg-[#ffbd2e] transition-colors duration-300" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/70 group-hover:bg-[#27c93f] transition-colors duration-300" />
        <div className="ml-3 flex-1 max-w-[180px] h-[20px] rounded-md bg-white/[0.04] border border-white/[0.02] flex items-center px-2.5">
          <svg
            className="w-2.5 h-2.5 text-white/10 mr-1.5 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>
          <span className="text-[9px] text-white/20 truncate font-mono select-none">
            {alt.toLowerCase().replace(/\s+/g, "")}.vercel.app
          </span>
        </div>
      </div>

      {/* Screen/Screenshot Container */}
      <motion.div 
        className="relative overflow-hidden bg-black/40 w-full aspect-[16/10]"
        style={{ transform: "translateZ(5px)" }}
        whileHover={{ scale: 1.015 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 55vw"
              className="object-cover select-none pointer-events-none"
              priority={priority}
              draggable={false}
            />
          </motion.div>
        </AnimatePresence>

        {/* Hover accent glow overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${accentColor}0e, transparent 40%)`,
          }}
        />
      </motion.div>
    </motion.div>
  );
}
