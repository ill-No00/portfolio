"use client";

import dynamic from "next/dynamic";
import { spaceGrotesk } from "@/lib/fonts";
import GlowButton from "@/components/ui/glow-button";

const ParticleSketch = dynamic(() => import("./canvas"), { ssr: false });

export default function Hero() {
  return (
    <div
      id="home"
      className="w-full h-full flex flex-col md:flex-row items-center justify-center z-10"
    >
      {/* Text content */}
      <div className="w-full h-full flex items-center px-[var(--section-px)] md:pl-20 pt-24 md:pt-0">
        <div className="flex flex-col gap-5 w-full max-w-2xl">
          {/* Heading */}
          <div className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl/snug ${spaceGrotesk.className}`}>
            <span className="block text-[var(--color-text-primary)]">
              Hi, I&apos;m Ilyas
            </span>
            <div className="relative mt-1">
              <span
                aria-hidden="true"
                className="absolute py-4 flex blur-xl bg-linear-to-r from-white from-0% to-gray-400 to-60% bg-clip-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent select-none"
              >
                Full-Stack Developer
              </span>
              <span className="relative top-0 w-fit h-auto py-4 flex bg-linear-to-r items-center from-white from-0% to-gray-400 to-60% bg-clip-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent select-none">
                Full-Stack Developer
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="mt-2 md:mt-6 flex flex-col gap-6 md:gap-8">
            <div className="flex flex-col gap-2.5">
              <p className="text-[var(--color-text-secondary)] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                I build web experiences that matter.
              </p>
              <p className="text-[var(--color-text-secondary)] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                I help businesses and creators bring their digital ideas to
                life.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <GlowButton href="#contact" variant="primary">
                Contact Me
              </GlowButton>
              <GlowButton href="#projects" variant="ghost">
                View Projects
              </GlowButton>
            </div>
          </div>
        </div>
      </div>

      {/* Particle canvas — hidden on tablet and mobile */}
      <div className="canvas w-full h-[40vh] md:h-full md:w-1/2 mt-8 md:mt-0 hidden md:flex items-center justify-center">
        <ParticleSketch />
      </div>
    </div>
  );
}
