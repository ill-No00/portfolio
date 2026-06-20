import { Space_Grotesk } from "next/font/google";

/**
 * Shared Space Grotesk font instance.
 * Import this everywhere instead of re-instantiating per component.
 *
 * Next.js font optimization only works correctly when fonts are
 * instantiated once at module scope.
 */
export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});
