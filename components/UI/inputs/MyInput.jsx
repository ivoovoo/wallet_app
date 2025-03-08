"use client";

import styles from "./MyInput.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function MyInput({ ...props }) {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const checkScreenSize = () =>
                setIsSmallScreen(window.innerWidth < 768);
            checkScreenSize();
            window.addEventListener("resize", checkScreenSize);
            return () => window.removeEventListener("resize", checkScreenSize);
        }
    }, []);
    const handleFocus = (e) => {
        if (isSmallScreen) {
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 100);
        }
    };

    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prev) => !prev);
    };

    return (
        <div className={styles.input_wrapper}>
            <label
                className={styles.input_label}
                onClick={togglePasswordVisibility}
            >
                <Image src='/eye.svg' alt='image' width={24} height={24} />
            </label>
            <input
                {...props}
                className={styles.input}
                onFocus={handleFocus}
                type={isPasswordVisible ? "text" : "password"}
            />
        </div>
    );
}
