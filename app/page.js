"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import ArrowBack from "@/components/UI/arrows/arrow_back";

export default function Home() {
    const [isLoaded, setIsLoaded] = useState(false);
    const animationSrc = "/images/Animation_6.json";

    useEffect(() => {
        const preloadAnimation = async () => {
            try {
                const response = await fetch(animationSrc);
                if (response.ok) {
                    setIsLoaded(true);
                }
            } catch (error) {
                console.error("Ошибка загрузки анимации:", error);
            }
        };

        preloadAnimation();
    }, []);

    if (!isLoaded) return null;

    return (
        <>
            <div className='header'></div>
            <div className='main'>
                <div className='container'>
                    <div className={styles.arrow_wrapper}>
                        <ArrowBack />
                    </div>
                    <div className={styles.main_wrapper}>
                        <div className={styles.img_wrapper}>
                            <DotLottieReact src={animationSrc} loop autoplay />
                        </div>
                        <h1>
                            A safe haven for all your <span>assets</span>
                        </h1>
                        <p>
                            With our advanced wallet support of over 125
                            blockchains and protocols, storing all your crypto
                            assets in one place has never been more easy
                        </p>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <div className='container'>
                    <div className={styles.footer_wrapper}>
                        <div className={styles.points}>
                            <div className={styles.active}></div>
                            <div></div>
                            <div></div>
                        </div>
                        <Link href='/onboarding2' prefetch={true}>
                            Next
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
