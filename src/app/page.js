"use client";

import { useState } from "react";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import LoadingScreen from "@/components/loading-screen";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onFinished={() => setLoading(false)} />}

      <div
        className={`min-h-screen bg-[var(--color-bg)] font-sans transition-opacity duration-700 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Navbar />

        <main id="main-content" className="w-full">
          {/* Decorative grid background — top-left corner */}
          <div
            aria-hidden="true"
            className="fixed top-0 left-0 right-[40%] bottom-[40%] z-0 opacity-[0.15] pointer-events-none bg-grid-pattern"
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 80% at 0% 0%, #000 40%, transparent 85%)",
              maskImage:
                "radial-gradient(ellipse 80% 80% at 0% 0%, #000 40%, transparent 85%)",
            }}
          />

          <section className="h-dvh w-full">
            <Hero />
          </section>

          <section className="px-[var(--section-px)] py-[var(--section-py)]">
            <Skills />
          </section>

          <section className="py-[var(--section-py)]">
            <Projects />
          </section>

          <section className="py-[var(--section-py)]">
            <About />
          </section>

          <section className="py-[var(--section-py)]">
            <Contact />
          </section>

          <Footer />
        </main>
      </div>
    </>
  );
}
