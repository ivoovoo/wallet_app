"use client";

import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import MyButton from "@/components/UI/buttons/MyButton";
import Link from "next/link";
import ArrowBack from "@/components/UI/arrows/arrow_back";
import animationData from "@/public/images/Animation_3.json";
import Lottie from "react-lottie";

export default function Onboarding3() {
    const router = useRouter();
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid meet",
        },
    };

    const handleCkick = () => {
        router.push("/create-password");
    };
    return (
        <>
            <div className={`header ${styles.header_large}`}></div>
            <div className='main'>
                <div className='container'>
                    <div className={styles.arrow_wrapper}>
                        <ArrowBack />
                    </div>
                    <div className={styles.main_wrapper}>
                        <div className={styles.img_wrapper}>
                            <Lottie options={defaultOptions} />
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
            </div>
            <div className='footer'>
                <div className='container'>
                    <div className={styles.footer_wrapper}>
                        <MyButton onClick={handleCkick}>
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
        </>
    );
}
