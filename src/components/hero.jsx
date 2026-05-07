"use client";

import dynamic from "next/dynamic";
import { Space_Grotesk } from "next/font/google";

const ParticleSketch = dynamic(() => import("./canvas"), { ssr: false });

const Space_Grotesk_font = Space_Grotesk({
    subsets: ["latin"],
    weight: "700"
})


export default function Hero() {

    return (
        <div id="home" className="w-full h-full flex flex-col md:flex-row items-center justify-center z-10">
            <div className="w-full h-full flex items-center px-6 sm:px-10 md:pl-20 pt-24 md:pt-0">
                <div className="flex flex-col gap-5 w-full">
                    <div className={`text-4xl sm:text-5xl md:text-6xl/snug ${Space_Grotesk_font.className} `}>
                        <span className="block">Hi, I&apos;m Ilyas</span>
                        <div className="relative">
                            <span className="absolute py-4 flex border w-fit bg-linear-to-r blur-xl from-white from-0% to-gray-400 to-60% bg-clip-text text-4xl sm:text-5xl md:text-6xl box-content font-extrabold text-transparent select-none">Full-Stack Developer</span>
                            <span className="relative top-0 w-fit h-auto py-4 flex bg-linear-to-r items-center from-white from-0% to-gray-400 to-60% bg-clip-text text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent select-none">Full-Stack Developer</span>
                        </div>
                    </div>
                    <div className="mt-4 md:mt-8 flex flex-col gap-6 md:gap-10">
                        <div className="flex flex-col gap-3">
                            <span className="text-[#C0C0C0] text-sm sm:text-base">
                                I build web experiences that matter.
                            </span>
                            <span className="text-[#C0C0C0] text-sm sm:text-base">
                                I help businesses and creators bring their digital ideas to life.
                            </span>
                        </div>

                        <div className="flex flex-row gap-4 sm:gap-5">
                            <a href="#contact" className="w-fit relative group">
                                <div className="absolute bg-white/20 -inset-0.5 blur-sm rounded-4xl group-hover:bg-white/30 transition duration-600">
                                </div>
                                <button className="relative mx-auto px-6 sm:px-10 py-2 border border-white rounded-4xl bg-black cursor-pointer text-sm sm:text-base text-white">Contact Me</button>
                            </a>

                            <a href="#projects" className="w-fit relative group">
                                <div className="absolute bg-white/20 -inset-0.5 blur-sm rounded-4xl group-hover:bg-white/30 transition duration-600">
                                </div>
                                <button className="relative mx-auto px-6 sm:px-10 py-2 border border-white rounded-4xl bg-black cursor-pointer text-sm sm:text-base text-white">View Projects</button>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            <div className="canvas w-full h-[50vh] md:h-full hidden md:block">
                <ParticleSketch />
            </div>
        </div>
    )
}
