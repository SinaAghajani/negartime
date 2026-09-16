"use client";

import { useEffect, useState } from "react";

interface ScrollState {
    x: number;
    y: number;
    direction: "up" | "down" | null;
    isScrolled: boolean;
}

export function useScroll(threshold = 20): ScrollState {
    const [state, setState] = useState<ScrollState>({
        x: 0,
        y: 0,
        direction: null,
        isScrolled: false,
    });

    useEffect(() => {
        let previousY = window.scrollY;

        const handleScroll = () => {
            const currentY = window.scrollY;

            setState({
                x: window.scrollX,
                y: currentY,
                direction:
                    currentY > previousY
                        ? "down"
                        : currentY < previousY
                            ? "up"
                            : null,
                isScrolled: currentY > threshold,
            });

            previousY = currentY;
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, [threshold]);

    return state;
}

export function useIsScrolled(threshold = 20): boolean {
    return useScroll(threshold).isScrolled;
}
