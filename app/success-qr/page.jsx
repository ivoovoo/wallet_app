"use client";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import styles from "./page.module.css";
import MyButton from "@/components/UI/buttons/MyButton";
import Heading from "@/components/layout/heding";
import MyButtonDark from "@/components/UI/buttons/MyButtonDark";
import { copyToClipboard } from "@/helpers/downloadMnemonic";

export default function Success() {
    const router = useRouter();
    const addressRef = useRef(null);

    const handleCkick = () => {
        router.push("/success-details");
    };
    const handleCopy = async () => {
        if (addressRef.current) {
            const text = addressRef.current.textContent.trim();
            await copyToClipboard(text);
        }
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
                    <MyButtonDark onClick={handleCopy}>
                        <span ref={addressRef}>31icdjsoidcnslkjnopd</span>
                        <img
                            src='/copy.svg'
                            alt='icon'
                            onClick={(e) => {
                                e.stopPropagation();
                                handleCopy();
                            }}
                        />
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
