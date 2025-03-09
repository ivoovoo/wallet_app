"use client";

import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import MyButton from "@/components/UI/buttons/MyButton";
import Link from "next/link";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Динамический импорт DotLottieReact
const DotLottieReact = dynamic(
    () =>
        import("@lottiefiles/dotlottie-react").then(
            (mod) => mod.DotLottieReact
        ),
    { ssr: false }
);

export default function Onboarding3() {
    const [animationData, setAnimationData] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const preloadAnimation = async () => {
            try {
                const response = await fetch("/images/Animation_3.json");
                const data = await response.json();
                setAnimationData(data);
            } catch (error) {
                console.error("Ошибка загрузки анимации:", error);
            }
        };

        preloadAnimation();
    }, []);

    const handleClick = () => {
        router.push("/create-password");
    };

    return (
        <div className='container'>
            <div className='page'>
                <div className={`header ${styles.header_large}`}></div>
                <div className='main'>
                    <div className={styles.main_wrapper}>
                        <div className={styles.img_wrapper}>
                            {animationData ? (
                                <DotLottieReact
                                    animationData={animationData}
                                    loop
                                    autoplay
                                />
                            ) : (
                                <p>Загрузка анимации...</p>
                            )}
                        </div>
                        <h1>
                            Fast & secure access to <span>Dapps</span>
                        </h1>
                        <p>
                            Enjoy seamless access and to your favourite
                            decentralized app and services without boundaries
                        </p>
                    </div>
                </div>
                <div className='footer'>
                    <div className={styles.footer_wrapper}>
                        <MyButton onClick={handleClick}>
                            Create a new wallet
                        </MyButton>
                        <p>
                            Already have a wallet? {"\u00A0"}
                            <Link href='/copy-phrase' prefetch={true}>
                                <span> Import here</span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
