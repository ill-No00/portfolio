"use client";

import { useEffect, useRef } from "react";
import { spaceGrotesk } from "@/lib/fonts";

/**
 * @typedef {Object} ProjectModalProps
 * @property {string} accentColor - Hex color representing the active project theme.
 * @property {() => void} onClose - Callback invoked to close the modal.
 */

/**
 * A responsive modal dialog indicating a project link is not yet available.
 * Accessible with escape-key close support and proper aria attributes.
 *
 * @param {ProjectModalProps} props
 */
export default function ProjectModal({ accentColor, onClose }) {
  const closeButtonRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    
    // Auto focus the close button for accessibility
    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 animate-fade-in"
      onClick={onClose}
      role="presentation"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal Dialog */}
      <div
        className="relative bg-[var(--color-surface-raised)] border border-[var(--color-border-hover)] rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl animate-pop-in"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        {/* Glow effect behind modal */}
        <div
          aria-hidden="true"
          className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-16 rounded-full blur-3xl opacity-30 pointer-events-none"
          style={{ backgroundColor: accentColor }}
        />

        {/* Warning Icon */}
        <div className="flex items-center justify-center mb-4">
          <div className="w-14 h-14 rounded-full border border-[var(--color-border)] flex items-center justify-center bg-white/[0.03]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 text-[var(--color-text-muted)]"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
              />
            </svg>
          </div>
        </div>

        {/* Text Details */}
        <h3
          id="modal-title"
          className={`text-xl text-[var(--color-text-primary)] mb-2 ${spaceGrotesk.className}`}
        >
          Not Available Yet
        </h3>
        <p
          id="modal-description"
          className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6"
        >
          This project link is not available yet. Check back soon!
        </p>

        {/* Close Button */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="px-6 py-2.5 rounded-xl text-sm font-medium text-white cursor-pointer border-none outline-none transition-all duration-300 hover:opacity-90 focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none"
          style={{ backgroundColor: accentColor }}
        >
          Got it
        </button>
      </div>
    </div>
  );
}
