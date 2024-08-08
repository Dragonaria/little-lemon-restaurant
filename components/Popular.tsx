// component.Popular

"use client";

import Image from "next/image";
import { EmblaOptionsType } from 'embla-carousel'
import Carousel from "./Carousel";

export default function Popular() {
    const OPTIONS: EmblaOptionsType = { loop: true }
    const SLIDE_COUNT = 5
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    return (
        <section id="section-popular">
            <div id="popular-container">
                <div id="popular-head">
                    <h2>Popular Dishes</h2>
                </div>

                <div id="popular-item">
                    <Carousel slides={SLIDES} options={OPTIONS}/>
                </div>
            </div>
        </section>
    )
}
