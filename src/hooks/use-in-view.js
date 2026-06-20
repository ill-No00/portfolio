"use client";

import { useState, useEffect } from "react";

/**
 * Custom hook that detects when an element enters the viewport.
 * Uses IntersectionObserver under the hood. Once visible, stays visible
 * (one-shot reveal for scroll animations).
 *
 * @param {React.RefObject} ref - React ref attached to the target element
 * @param {object} options
 * @param {number} options.threshold - Visibility threshold (0–1), default 0.15
 * @returns {boolean} Whether the element has been seen
 */
export function useInView(ref, { threshold = 0.15 } = {}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return isVisible;
}
