"use client";

import { Space_Grotesk, Outfit } from "next/font/google";
import { useEffect, useState } from "react";
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
    const [viewportHeight, setViewportHeight] = useState("100vh");

    useEffect(() => {
        const updateViewportHeight = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty("--vh", `${vh}px`);
            setViewportHeight(`${window.innerHeight}px`);
        };

        updateViewportHeight();

        window.addEventListener("resize", updateViewportHeight);
        window.addEventListener("orientationchange", updateViewportHeight);

        return () => {
            window.removeEventListener("resize", updateViewportHeight);
            window.removeEventListener(
                "orientationchange",
                updateViewportHeight
            );
        };
    }, []);
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
                <div className='page' style={{ height: viewportHeight }}>
                    {children}
                </div>
            </body>
        </html>
    );
}
