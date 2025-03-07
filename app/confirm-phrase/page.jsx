import { useState, useEffect } from "react";
import styles from "./MyInput.module.css";
import Image from "next/image";

export default function MyInput({ ...props }) {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

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
        if (isSmallScreen && !hasScrolled) {
            setTimeout(() => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth", // Плавная прокрутка
                });
                setHasScrolled(true); // Запоминаем, что прокрутка была выполнена
            }, 100);
        }
    };

    return (
        <div className={styles.input_wrapper}>
            <label className={styles.input_label}>
                <Image src='/eye.svg' alt='image' width={24} height={24} />
            </label>
            <input {...props} className={styles.input} onFocus={handleFocus} />
        </div>
    );
}
