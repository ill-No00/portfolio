"use client";

import { useState, useEffect } from "react";
import { spaceGrotesk } from "@/lib/fonts";

export default function LoadingScreen({ onFinished }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Ease-out acceleration curve
        const increment = prev < 60 ? 3 : prev < 85 ? 2 : 1;
        return Math.min(prev + increment, 100);
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => setFadeOut(true), 400);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  useEffect(() => {
    if (fadeOut) {
      const timeout = setTimeout(() => onFinished?.(), 700);
      return () => clearTimeout(timeout);
    }
  }, [fadeOut, onFinished]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[var(--color-bg)] transition-opacity duration-700 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      role="status"
      aria-live="polite"
      aria-label={`Loading ${progress}%`}
    >
      {/* Subtle grid background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06] pointer-events-none bg-grid-pattern"
        style={{
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 80%)",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 80%)",
        }}
      />

      {/* Glow orb */}
      <div
        aria-hidden="true"
        className="absolute w-64 h-64 rounded-full bg-white/[0.02] blur-3xl animate-pulse"
      />

      {/* Spinner ring */}
      <div className="relative mb-10">
        <div className="w-14 h-14 rounded-full border-2 border-white/[0.06]" />
        <div
          className="absolute inset-0 w-14 h-14 rounded-full border-2 border-transparent border-t-white/70 border-r-white/20"
          style={{
            animation: "spin 1s cubic-bezier(0.5, 0, 0.5, 1) infinite",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-white/50 animate-pulse" />
        </div>
      </div>

      {/* Brand */}
      <h1
        className={`${spaceGrotesk.className} text-2xl md:text-3xl bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent mb-6`}
      >
        Ilyas<span className="text-white/30">.</span>
      </h1>

      {/* Progress bar */}
      <div className="w-48 h-[2px] bg-white/[0.06] rounded-full overflow-hidden">
        <div
          className="h-full bg-linear-to-r from-white/50 to-white rounded-full transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Percentage */}
      <span className="mt-3 text-xs text-white/25 font-mono tracking-widest">
        {progress}%
      </span>
    </div>
  );
}
