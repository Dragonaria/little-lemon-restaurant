// component.Header

"use client";

import { useEffect, useRef, useState } from "react";

export default function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
        setLastScrollY(currentScrollY);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
           window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return(
        <header className={`bg-slate-700 h-14 sticky z-10 ${isVisible ? 'top-0' : ''} `}>
            HEADER
        </header>
    );
}
