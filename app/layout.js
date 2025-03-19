"use client";

import { Space_Grotesk, Outfit } from "next/font/google";
import { useEffect } from "react";
import "./globals.css";

const geistOutfit = Outfit({
    variable: "--font-geist-outfit",
    subsets: ["latin"],
});

const geistSpaceGrotesk = Space_Grotesk({
    variable: "--font-geist-space-grotesk",
    subsets: ["latin"],
});

export default function RootLayout({ children }) {
    useEffect(() => {
        const preventScroll = (e) => {
            e.preventDefault();
            e.stopPropagation();
            return false;
        };

        window.addEventListener("touchmove", preventScroll, { passive: false });

        return () => {
            window.removeEventListener("touchmove", preventScroll);
        };
    }, []);

    const setHeight = () => {
        document.querySelector(
            ".page"
        ).style.height = `${window.innerHeight}px`;
    };

    window.addEventListener("resize", setHeight);
    window.addEventListener("load", setHeight);

    return (
        <html lang='en'>
            <meta
                name='viewport'
                content='width=device-width, initial-scale=1, user-scalable=no, viewport-fit=cover'
            />
            <meta name='mobile-web-app-capable' content='yes' />
            <meta name='apple-mobile-web-app-capable' content='yes' />
            <meta
                name='apple-mobile-web-app-status-bar-style'
                content='black-translucent'
            />

            <body
                data-page={children.props.page || "default"}
                className={`${geistOutfit.variable} ${geistSpaceGrotesk.variable}`}
            >
                {children}
            </body>
        </html>
    );
}
