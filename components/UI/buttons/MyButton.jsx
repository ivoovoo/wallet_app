"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./MyButton.module.css";

export default function MyButton({ children, onClick, ...props }) {
    const [isOn, setIsOn] = useState(false);
    const [animationComplete, setAnimationComplete] = useState(false);
    const router = useRouter();

    const toggleSwitch = () => {
        setIsOn(!isOn);
        setAnimationComplete(false);
    };

    const handleAnimationEnd = () => {
        setAnimationComplete(true);
    };

    useEffect(() => {
        if (animationComplete && onClick) {
            setTimeout(() => {
                onClick();
            }, 2500);
        }
    }, [animationComplete]);

    return (
        <button
            {...props}
            className={`${styles.button} ${isOn ? styles.on : styles.off}`}
            onClick={toggleSwitch}
            onAnimationEnd={handleAnimationEnd}
        >
            <div className={styles.circle}>
                {isOn && <span className={styles.checkmark}>✔</span>}
            </div>
            <p className={`${styles.text} ${isOn ? styles.hideText : ""}`}>
                {children}
            </p>
        </button>
    );
}
