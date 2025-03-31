"use client";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import MyButton from "@/components/UI/buttons/MyButton";
import ArrowBack from "@/components/UI/arrows/arrow_back";
import animationData from "@/public/images/Animation_5.json";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("react-lottie"), {
    ssr: false,
});

export default function Success() {
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
            <div className={`header ${styles.header_small}`}></div>
            <div className='main'>
                <div className='container'>
                    <div className={styles.arrow_wrapper}>
                        <ArrowBack />
                    </div>
                    <div className={styles.main_wrapper}>
                        <div className={styles.img_wrapper}>
                            <Lottie options={defaultOptions} />
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
        </>
    );
}
