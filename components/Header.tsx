// component.Header

"use client";

import { useEffect, useState } from "react";

export default function Header(props: any) {
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
        <header className={`sticky z-10 py-4 px-0 bg-white ${isVisible ? 'top-0' : ''} `}>
            {props.children}
        </header>
    );
}
