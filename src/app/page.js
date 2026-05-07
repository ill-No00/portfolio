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
        className={`flex min-h-screen items-center justify-center bg-black font-sans dark:bg-black transition-opacity duration-700 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Navbar />
        <main className="w-full">
          <div
            className="absolute top-0 left-0 right-[40%] bottom-[40%] z-0 opacity-[0.2] pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, #d1d5db 1px, transparent 1px),
                linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
              `,
              backgroundSize: "45px 45px",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)",
              maskImage:
                "radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)",
            }}
          />
          <section className="h-dvh w-dvw">
            <Hero />
          </section>
          <section className="px-4 sm:px-6 md:px-10 py-20">
            <Skills />
          </section>
          <section className="py-20">
            <Projects />
          </section>
          <section>
            <About />
          </section>
          <section>
            <Contact />
          </section>
          <Footer />
        </main>
      </div>
    </>
  );
}
