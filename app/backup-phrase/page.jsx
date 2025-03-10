"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";
import MyButton from "@/components/UI/buttons/MyButton";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Link from "next/link";

export default function BackupPhrase() {
    const router = useRouter();

    const handleCkick = () => {
        router.push("/copy-phrase");
    };
    return (
        <div className='container'>
            <div className='page'>
                <div className={`header ${styles.header_small}`}></div>
                <div className='main'>
                    <div className={styles.main_wrapper}>
                        <h1>Backup your recovery phrase </h1>
                        <p>
                            Without the recovery phrase, when you lose your
                            device or delete the app, you will permanently lose
                            all assets stored on the wallet
                        </p>
                        <div className={styles.img_wrapper}>
                            <DotLottieReact
                                src='images/Animation_4.json'
                                loop
                                autoplay
                            />
                        </div>
                    </div>
                </div>
                <div className='footer'>
                    <div className={styles.btn_wrapper}>
                        <MyButton onClick={handleCkick}>
                            Backup my phrase now
                        </MyButton>
                        <Link href='/confirm-phrase'>I will backup later.</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
