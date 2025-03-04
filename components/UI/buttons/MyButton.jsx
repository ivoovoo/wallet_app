"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./MyButton.module.css";

export default function MyButton({ children, onClick, ...props }) {
    const [isOn, setIsOn] = useState(false);
    const [animationComplete, setAnimationComplete] = useState(false);
    const [circlePosition, setCirclePosition] = useState(7);
    const buttonRef = useRef(null);
    const isSmallScreen = useRef(window.innerWidth < 768); // Проверяем при загрузке

    useEffect(() => {
        // Обновляем флаг при изменении ширины экрана
        const handleResize = () => {
            isSmallScreen.current = window.innerWidth < 768;
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
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
        if (!isSmallScreen.current || !buttonRef.current) return; // Запрещаем свайп на больших экранах

        const buttonRect = buttonRef.current.getBoundingClientRect();
        let clientX = e.touches ? e.touches[0].clientX : e.clientX;
        let newPosition = clientX - buttonRect.left;

        newPosition = Math.max(0, Math.min(newPosition, buttonRect.width - 58));

        setCirclePosition(newPosition);
    };

    const handleEnd = () => {
        if (!isSmallScreen.current || !buttonRef.current) return;

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
            onTouchMove={handleMove}
            onMouseMove={handleMove}
            onTouchEnd={handleEnd}
            onMouseUp={handleEnd}
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
