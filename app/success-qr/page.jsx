"use client";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import MyButton from "@/components/UI/buttons/MyButton";
import ArrowBack from "@/components/UI/arrows/arrow_back";
import Heading from "@/components/layout/heding";
import MyButtonDark from "@/components/UI/buttons/MyButtonDark";

export default function Success() {
    const router = useRouter();

    const handleCkick = () => {
        router.push("/create-password");
    };
    return (
        <>
            <div className='header'></div>
            <div className='main'>
                <Heading>Q Wallet</Heading>
                <div className={styles.main_wrapper}>
                    <h1>
                        Read the QR Code of <br />
                        <span className='accent'>your wallet!</span>{" "}
                    </h1>
                    <div className={styles.img_wrapper}>
                        <img src='/images/qr.png' alt='qr' />
                    </div>
                    <p>Your wallet Q Blockchain</p>
                    <MyButtonDark>
                        31icdjsoidcnslkjnopd
                        <img src='/copy.svg' alt='icon' />
                    </MyButtonDark>
                </div>
            </div>
            <div className='footer'>
                <div className={styles.footer_wrapper}>
                    <MyButton onClick={handleCkick}>Open Bank</MyButton>
                </div>
            </div>
        </>
    );
}
