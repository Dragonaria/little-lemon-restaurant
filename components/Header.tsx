// component.Header

import { useEffect, useRef } from "react";

export default function Header() {
    const headerRef = useRef(null)

    useEffect(() => {
        let prevScrollPos = window.scrollY;

        // Handle scroll events
        const handleScroll = () => {
            const currScrollPos = window.scrollY;
            const currHeaderElement = headerRef.current;

            if (!currHeaderElement)
                return;

            if (prevScrollPos > currScrollPos)
                currHeaderElement.style.transform = "translateY(0)";
            else
                currHeaderElement.style.transform = "translateY(-200px)";

            prevScrollPos = currScrollPos;
        };

        // Set up listeners for the scroll event
        window.addEventListener("scroll", handleScroll);

        // Remove listeners for the scroll event
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return(
        <header className="header" ref={headerRef}>
            HEADER
        </header>
    );
}
