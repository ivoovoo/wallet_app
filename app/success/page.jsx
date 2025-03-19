"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";
import MyButton from "@/components/UI/buttons/MyButton";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import ArrowBack from "@/components/UI/arrows/arrow_back";

export default function Success() {
    const router = useRouter();

    const handleCkick = () => {
        router.push("/create-password");
    };
    return (
        <div className='page'>
            <div className={`header ${styles.header_small}`}></div>
            <div className='main'>
                <div className='container'>
                    <div className={styles.arrow_wrapper}>
                        <ArrowBack />
                    </div>
                    <div className={styles.main_wrapper}>
                        <div className={styles.img_wrapper}>
                            <DotLottieReact
                                src='images/Animation_5.json'
                                loop
                                autoplay
                            />
                        </div>
                        <h1>Your wallet has been successfully created</h1>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <div className='container'>
                    <div className={styles.footer_wrapper}>
                        <MyButton onClick={handleCkick}>
                            Explore your wallet
                        </MyButton>
                    </div>
                </div>
            </div>
        </div>
    );
}
