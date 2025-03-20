"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import ArrowBack from "@/components/UI/arrows/arrow_back";

export default function Onboarding2() {
    const [isLoaded, setIsLoaded] = useState(false);
    const animationSrc = "/images/Animation_2.json";

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
                            Simple wallet <span>control</span> everywhere
                        </h1>
                        <p>
                            Enjoy lightning fast execution of your crypto
                            transfers and smart contracts. No limits to what you
                            can do with your assets
                        </p>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <div className='container'>
                    <div className={styles.footer_wrapper}>
                        <div className={styles.points}>
                            <div></div>
                            <div className={styles.active}></div>
                            <div></div>
                        </div>
                        <Link href='/onboarding3' prefetch={true}>
                            Next
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
