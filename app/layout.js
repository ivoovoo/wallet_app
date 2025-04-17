"use client";

import { Space_Grotesk, Outfit } from "next/font/google";
import { useEffect, useState } from "react";
import { AuthProvider } from "@/context/authContext";
import "./globals.css";

const outfit = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
    variable: "--font-space-grotesk",
    subsets: ["latin"],
});

export default function RootLayout({ children }) {
    const [viewportHeight, setViewportHeight] = useState("100svh");

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

            <body className={`${outfit.variable} ${spaceGrotesk.variable}`}>
                <div className='container' style={{ height: viewportHeight }}>
                    <div className='content'>
                        <AuthProvider>{children}</AuthProvider>
                    </div>
                </div>
            </body>
        </html>
    );
}
