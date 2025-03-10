"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./MyButton.module.css";

export default function MyButton({
    children,
    onClick,
    type = "button",
    isLoading = false, // Значение по умолчанию false
    ...props
}) {
    const [isOn, setIsOn] = useState(false);
    const [circlePosition, setCirclePosition] = useState(7);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const buttonRef = useRef(null);
    const circleRef = useRef(null);
    const isDragging = useRef(false);

    useEffect(() => {
        const checkScreenSize = () => setIsSmallScreen(window.innerWidth < 768);
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    useEffect(() => {
        if (!isLoading) {
            setIsOn(false);
            setCirclePosition(7);
        }
    }, [isLoading]);

    const handleMove = (e) => {
        if (!isSmallScreen || !buttonRef.current) return;

        const buttonRect = buttonRef.current.getBoundingClientRect();
        let clientX = e.touches ? e.touches[0].clientX : e.clientX;
        let newPosition = clientX - buttonRect.left;

        newPosition = Math.max(0, Math.min(newPosition, buttonRect.width - 40));
        setCirclePosition(newPosition);
    };

    const handleEnd = () => {
        if (!isDragging.current) return;
        isDragging.current = false;

        if (!isSmallScreen || !buttonRef.current) return;

        const buttonWidth = buttonRef.current.clientWidth;
        const maxPosition = buttonWidth - 40;

        if (circlePosition >= maxPosition * 0.9) {
            setIsOn(true);
        } else {
            setCirclePosition(7);
        }
        runAnimation();
    };

    const runAnimation = () => {
        if (isLoading) return;

        setIsOn(true);

        setTimeout(() => {
            if (type === "submit") {
                document.getElementById("myForm")?.requestSubmit();
            } else if (onClick) {
                onClick();
            }
        }, 1500);
    };

    return (
        <button
            {...props}
            ref={buttonRef}
            type={type}
            className={`${styles.button} ${isOn ? styles.on : styles.off} ${
                isLoading ? styles.loading : ""
            }`}
            onTouchStart={() => (isDragging.current = true)}
            onTouchMove={isSmallScreen ? handleMove : undefined}
            onTouchEnd={isSmallScreen ? handleEnd : undefined}
            onClick={runAnimation}
            disabled={isLoading}
        >
            <div
                ref={circleRef}
                className={styles.circle}
                style={{
                    left: `${circlePosition}px`,
                }}
            >
                {isOn && <span className={styles.checkmark}>✔</span>}
            </div>
            <p
                className={`${styles.text} ${
                    isOn || isLoading ? styles.hideText : ""
                }`}
            >
                {children}
            </p>
        </button>
    );
}
