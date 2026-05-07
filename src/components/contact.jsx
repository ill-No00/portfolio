"use client";

import { Space_Grotesk } from "next/font/google";
import { useRef, useState, useEffect } from "react";

const Space_Grotesk_font = Space_Grotesk({
  subsets: ["latin"],
  weight: "700",
});

function useInView(ref) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return isVisible;
}

export default function Contact() {
  const ref = useRef(null);
  const visible = useInView(ref);
  const titleRef = useRef(null);
  const titleVisible = useInView(titleRef);

  return (
    <div id="contact" className="px-4 sm:px-6 md:px-10 py-20 md:py-32">
      <div ref={titleRef} className={`flex items-center justify-center h-fit w-full mb-16 ${titleVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <span className={`text-3xl sm:text-4xl text-[#e3e3e3] ${Space_Grotesk_font.className} pt-10 absolute mx-auto py-4 flex border w-fit bg-linear-to-r blur-xl from-white from-0% to-gray-400 to-60% bg-clip-text box-content text-transparent text-center select-none`}>Get In Touch</span>
        <span className={`text-3xl sm:text-4xl text-[#e3e3e3] ${Space_Grotesk_font.className} pt-10 relative top-0 w-fit h-auto py-4 justify-center flex bg-linear-to-r items-center from-white from-0% to-gray-400 to-60% bg-clip-text text-transparent text-center select-none`}>Get In Touch</span>
      </div>

      <div ref={ref} className={`max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 ${visible ? "animate-fade-in-up" : "opacity-0"}`}>
        {/* Left - Info */}
        <div className="flex flex-col gap-8">
          <div>
            <p className="text-[#C0C0C0] leading-relaxed text-sm sm:text-base">
              I&apos;m always interested in hearing about new projects and opportunities. Whether you have a question, want to collaborate, or just want to say hi — feel free to reach out.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {/* Email */}
            <a href="mailto:ilyas@example.com" className="flex items-center gap-4 group">
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-[#C0C0C0] group-hover:text-white group-hover:bg-white/10 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-[#808080]">Email</span>
                <span className="text-sm text-[#C0C0C0] group-hover:text-white transition-colors duration-300">benhammoui042@gmail.com</span>
              </div>
            </a>

            {/* GitHub */}
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-[#C0C0C0] group-hover:text-white group-hover:bg-white/10 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-[#808080]">GitHub</span>
                <span className="text-sm text-[#C0C0C0] group-hover:text-white transition-colors duration-300">github.com/ill-No00</span>
              </div>
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-[#C0C0C0] group-hover:text-white group-hover:bg-white/10 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-[#808080]">LinkedIn</span>
                <span className="text-sm text-[#C0C0C0] group-hover:text-white transition-colors duration-300">linkedin.com/in/ilyas</span>
              </div>
            </a>
          </div>
        </div>

        {/* Right - Contact Form */}
        <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-2">
            <label className="text-xs text-[#808080] uppercase tracking-wider" htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              type="text"
              placeholder="Your name"
              className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-[#404040] focus:outline-none focus:border-white/25 transition-colors duration-300"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs text-[#808080] uppercase tracking-wider" htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              type="email"
              placeholder="your@email.com"
              className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-[#404040] focus:outline-none focus:border-white/25 transition-colors duration-300"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs text-[#808080] uppercase tracking-wider" htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              rows={5}
              placeholder="Tell me about your project..."
              className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-[#404040] focus:outline-none focus:border-white/25 transition-colors duration-300 resize-none"
            />
          </div>
          <div className="w-fit relative group mt-2">
            <div className="absolute bg-white/20 -inset-0.5 blur-sm rounded-4xl group-hover:bg-white/30 transition duration-600" />
            <button
              type="submit"
              className="relative px-10 py-2.5 border border-white rounded-4xl bg-black cursor-pointer text-sm text-white hover:bg-white/5 transition-colors duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
