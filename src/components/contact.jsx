"use client";

import { useRef } from "react";
import { spaceGrotesk } from "@/lib/fonts";
import { useInView } from "@/hooks/use-in-view";
import SectionHeading from "@/components/ui/section-heading";
import SocialLinks from "@/components/ui/social-links";
import GlowButton from "@/components/ui/glow-button";

export default function Contact() {
  const ref = useRef(null);
  const visible = useInView(ref);

  return (
    <div id="contact" className="px-[var(--section-px)]">
      <SectionHeading>Get In Touch</SectionHeading>

      <div
        ref={ref}
        className={`max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 ${
          visible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        {/* Left - Info */}
        <div className="flex flex-col gap-8">
          <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm sm:text-base">
            I&apos;m always interested in hearing about new projects and
            opportunities. Whether you have a question, want to collaborate, or
            just want to say hi — feel free to reach out.
          </p>

          <SocialLinks variant="verbose" />
        </div>

        {/* Right - Contact Form */}
        <form
          className="flex flex-col gap-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col gap-2">
            <label
              className="text-xs text-[var(--color-text-muted)] uppercase tracking-[0.15em] font-medium"
              htmlFor="contact-name"
            >
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              placeholder="Your name"
              className="bg-white/[0.02] border border-[var(--color-border)] rounded-xl px-4 py-3 text-sm text-white placeholder-[#333] focus:outline-none focus:border-white/20 focus:bg-white/[0.04] transition-all duration-300"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              className="text-xs text-[var(--color-text-muted)] uppercase tracking-[0.15em] font-medium"
              htmlFor="contact-email"
            >
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              placeholder="your@email.com"
              className="bg-white/[0.02] border border-[var(--color-border)] rounded-xl px-4 py-3 text-sm text-white placeholder-[#333] focus:outline-none focus:border-white/20 focus:bg-white/[0.04] transition-all duration-300"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              className="text-xs text-[var(--color-text-muted)] uppercase tracking-[0.15em] font-medium"
              htmlFor="contact-message"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              rows={5}
              placeholder="Tell me about your project..."
              className="bg-white/[0.02] border border-[var(--color-border)] rounded-xl px-4 py-3 text-sm text-white placeholder-[#333] focus:outline-none focus:border-white/20 focus:bg-white/[0.04] transition-all duration-300 resize-none"
            />
          </div>

          <div className="mt-2">
            <GlowButton type="submit" variant="primary">
              Send Message
            </GlowButton>
          </div>
        </form>
      </div>
    </div>
  );
}
