"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./MyButton.module.css";

export default function MyButton({ children, onClick, ...props }) {
    const [isOn, setIsOn] = useState(false);
    const [animationComplete, setAnimationComplete] = useState(false);
    const [circlePosition, setCirclePosition] = useState(7);
    const [isSmallScreen, setIsSmallScreen] = useState(false); // Теперь это useState
    const buttonRef = useRef(null);

    useEffect(() => {
        // Проверяем размер экрана только в браузере
        const checkScreenSize = () => setIsSmallScreen(window.innerWidth < 768);

        checkScreenSize(); // Проверяем при загрузке
        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    useEffect(() => {
        if (animationComplete) {
            setTimeout(() => {
                if (onClick) {
                    onClick();
                } else {
                    document.getElementById("myForm")?.requestSubmit();
                }
            }, 2500);
        }
    }, [animationComplete]);

    const handleMove = (e) => {
        if (!isSmallScreen || !buttonRef.current) return; // Запрещаем свайп на больших экранах

        const buttonRect = buttonRef.current.getBoundingClientRect();
        let clientX = e.touches ? e.touches[0].clientX : e.clientX;
        let newPosition = clientX - buttonRect.left;

        newPosition = Math.max(0, Math.min(newPosition, buttonRect.width - 58));
        setCirclePosition(newPosition);
    };

    const handleEnd = () => {
        if (!isSmallScreen || !buttonRef.current) return;

        const buttonWidth = buttonRef.current.clientWidth;
        const maxPosition = buttonWidth - 58;

        if (circlePosition >= maxPosition * 0.9) {
            setIsOn(true);
        } else {
            setCirclePosition(7);
        }
    };

    const handleAnimationEnd = () => {
        setAnimationComplete(true);
    };

    const toggleSwitch = () => {
        setIsOn(!isOn);
        setAnimationComplete(false);
    };

    return (
        <button
            {...props}
            ref={buttonRef}
            className={`${styles.button} ${isOn ? styles.on : styles.off}`}
            onTouchMove={isSmallScreen ? handleMove : undefined}
            onMouseMove={isSmallScreen ? handleMove : undefined}
            onTouchEnd={isSmallScreen ? handleEnd : undefined}
            onMouseUp={isSmallScreen ? handleEnd : undefined}
            onClick={toggleSwitch}
            onAnimationEnd={handleAnimationEnd}
        >
            <div
                className={styles.circle}
                style={{ left: `${circlePosition}px` }}
            >
                {isOn && <span className={styles.checkmark}>✔</span>}
            </div>
            <p className={`${styles.text} ${isOn ? styles.hideText : ""}`}>
                {children}
            </p>
        </button>
    );
}
