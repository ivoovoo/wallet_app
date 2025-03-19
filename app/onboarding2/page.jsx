"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import ArrowBack from "@/components/UI/arrows/arrow_back";

export default function Onboarding2() {
    return (
        <div className='page'>
            <div className='header'></div>
            <div className='main'>
                <div className='container'>
                    <div className={styles.arrow_wrapper}>
                        <ArrowBack />
                    </div>
                    <div className={styles.main_wrapper}>
                        <div className={styles.img_wrapper}>
                            <DotLottieReact
                                src='images/Animation_2.json'
                                loop
                                autoplay
                            />
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
        </div>
    );
}
