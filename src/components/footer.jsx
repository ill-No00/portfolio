"use client";

import { spaceGrotesk } from "@/lib/fonts";
import SocialLinks from "@/components/ui/social-links";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] mt-10">
      <div className="max-w-[var(--max-width)] mx-auto px-[var(--section-px)] py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <span
            className={`text-lg ${spaceGrotesk.className} bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent`}
          >
            Ilyas<span className="text-white/30">.</span>
          </span>
          <span className="text-xs text-[var(--color-text-muted)]">
            &copy; {new Date().getFullYear()} All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-6">
          <SocialLinks variant="compact" />

          {/* Back to top */}
          <div className="w-px h-5 bg-[var(--color-border)]" />
          <a
            href="#home"
            className="text-[var(--color-text-muted)] hover:text-white transition-colors duration-300 p-1.5 rounded-lg hover:bg-white/5"
            aria-label="Back to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
