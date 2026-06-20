import { Geist, Geist_Mono } from "next/font/google";
import { spaceGrotesk } from "@/lib/fonts";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ilyas — Full-Stack Developer",
  description:
    "Portfolio of Ilyas, a full-stack developer specializing in React, Next.js, Node.js, and AI-powered applications. Explore my projects and get in touch.",
  keywords: [
    "full-stack developer",
    "React",
    "Next.js",
    "Node.js",
    "portfolio",
    "web developer",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable}`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
