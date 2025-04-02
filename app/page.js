"use client";
import Link from "next/link";
import styles from "./page.module.css";
import ArrowBack from "@/components/UI/arrows/arrow_back";
import animationData from "@/public/images/Animation_6.json";
import dynamic from "next/dynamic";
import Heading from "@/components/layout/heding";
const Lottie = dynamic(() => import("react-lottie"), {
    ssr: false,
});

export default function Home() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <>
            <div className='header'></div>
            <div className='main'>
                <Heading></Heading>
                <div className={styles.main_wrapper}>
                    <div className={styles.img_wrapper}>
                        <Lottie options={defaultOptions} />
                    </div>

                    <h1>
                        A safe haven for all your{" "}
                        <span className='accent'>assets</span>
                    </h1>
                    <p>
                        With our advanced wallet support of over 125 blockchains
                        and protocols, storing all your crypto assets in one
                        place has never been more easy
                    </p>
                </div>
            </div>
            <div className='footer'>
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
        </>
    );
}
