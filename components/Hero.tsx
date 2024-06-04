// component.Hero

"use client";

import { useState } from "react";
import Image from "next/image";
import bgPatterns1 from "@/public/slider/bg-pattern1.svg";
import bgPatterns2 from "@/public/slider/bg-pattern2.svg";
import sliderBg from "@/public/slider/slider-bg.png";
import { karla, markazi } from "@/app/fonts";
import { AnimatePresence, motion } from "framer-motion";
import { slider } from "@/app/constants";

export default function Hero() {
    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <section className="relative mt-8 min-[1152px]:mt-44" id="section-hero">
            <Image
                src={bgPatterns1}
                className=""
                alt="Background Patterns 1"
            />
            <Image
                src={bgPatterns2}
                className=""
                alt="Background Patterns 2"
            />
            <div className="flex items-start justify-center min-[1152px]:justify-between m-auto max-w-6xl" id="hero-container">
                <div className="max-w-md" id="hero-text">
                    <h1 className={`${markazi.className} text-dark-color text-5xl min-[1152px]:text-6xl`}>
                        Discover the unforgettable taste
                    </h1>
                    <p className={`${karla.className} font-normal text-base min-[1152px]:text-lg`}>
                        Little Lemon is a charming neighborhood bistro
                        that serves simple food and classic cocktails
                        in a lively but casual environment. The restaurant
                        features a locally-sourced menu with daily specials
                    </p>
                </div>
                <div className="flex items-center gap-28 ml-12 mt-[-3rem] relative" id="hero-slide">
                    <AnimatePresence>
                        <div className="min-w-[110%]" id="highlight-image">
                            <motion.img
                                key={activeSlide}
                                initial={{ opacity: 0, rotate: 90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: 90 }}
                                transition={{ duration: 0.4 }}
                                src={slider[activeSlide].img.src}
                                alt={slider[activeSlide].title}
                            />
                        </div>
                    </AnimatePresence>
                    <Image
                        className="absolute select-none w-11/12 left-[-40px] top-[-90px] -z-10"
                        src={sliderBg}
                        alt="sliderBg"
                        id="sliderBg"
                    />
                </div>
            </div>

        </section>
    );
}
