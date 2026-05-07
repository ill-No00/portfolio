"use client";

import { useState, useEffect } from "react";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "700",
});

export default function LoadingScreen({ onFinished }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Accelerate as we approach 100
        const increment = prev < 60 ? 3 : prev < 85 ? 2 : 1;
        return Math.min(prev + increment, 100);
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Short pause at 100%, then fade out
      const timeout = setTimeout(() => {
        setFadeOut(true);
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  useEffect(() => {
    if (fadeOut) {
      const timeout = setTimeout(() => {
        onFinished?.();
      }, 800); // match the CSS transition duration
      return () => clearTimeout(timeout);
    }
  }, [fadeOut, onFinished]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black transition-opacity duration-700 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Subtle grid background — matches hero */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #d1d5db 1px, transparent 1px),
            linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
          `,
          backgroundSize: "45px 45px",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 80%)",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 80%)",
        }}
      />

      {/* Glow orb behind spinner */}
      <div className="absolute w-64 h-64 rounded-full bg-white/[0.03] blur-3xl animate-pulse" />

      {/* Spinner ring */}
      <div className="relative mb-10">
        <div className="w-16 h-16 rounded-full border-2 border-white/10" />
        <div
          className="absolute inset-0 w-16 h-16 rounded-full border-2 border-transparent border-t-white/80 border-r-white/30"
          style={{ animation: "spin 1s cubic-bezier(0.5, 0, 0.5, 1) infinite" }}
        />
        {/* Inner dot */}
        <div
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-2 h-2 rounded-full bg-white/60 animate-pulse" />
        </div>
      </div>

      {/* Name / brand */}
      <h1
        className={`${spaceGrotesk.className} text-2xl md:text-3xl bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-6`}
      >
        Ilyas<span className="text-white/40">.</span>
      </h1>

      {/* Progress bar */}
      <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-white/60 to-white rounded-full transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Percentage */}
      <span className="mt-3 text-xs text-white/30 font-mono tracking-widest">
        {progress}%
      </span>
    </div>
  );
}
