"use client";

import { useState, useEffect, useCallback } from "react";
import { spaceGrotesk } from "@/lib/fonts";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy — track active section
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Close mobile menu on Escape
  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") setMobileOpen(false);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [mobileOpen, handleKeyDown]);

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--color-bg)]/85 backdrop-blur-2xl border-b border-[var(--color-border)] shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[var(--max-width)] mx-auto px-[var(--section-px)] flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#home"
          className={`text-xl md:text-2xl ${spaceGrotesk.className} bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent hover:from-white hover:to-white transition-all duration-300`}
        >
          Ilyas<span className="text-white/30">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm px-3.5 py-2 rounded-lg transition-all duration-300 relative ${
                activeSection === link.href
                  ? "text-white bg-white/[0.06]"
                  : "text-[#707070] hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 cursor-pointer p-2 rounded-lg hover:bg-white/5 transition-colors"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span
            className={`w-5 h-[1.5px] bg-white/80 transition-all duration-300 origin-center ${
              mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""
            }`}
          />
          <span
            className={`w-5 h-[1.5px] bg-white/80 transition-all duration-300 ${
              mobileOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`w-5 h-[1.5px] bg-white/80 transition-all duration-300 origin-center ${
              mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
          mobileOpen
            ? "max-h-80 opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        } bg-[var(--color-bg)]/95 backdrop-blur-2xl border-b border-[var(--color-border)]`}
      >
        <div className="flex flex-col px-[var(--section-px)] py-4 gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`text-base py-2.5 px-3 rounded-lg transition-all duration-300 ${
                activeSection === link.href
                  ? "text-white bg-white/[0.06]"
                  : "text-[#808080] hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
