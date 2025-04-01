"use client";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import MyButton from "@/components/UI/buttons/MyButton";
import ArrowBack from "@/components/UI/arrows/arrow_back";

export default function Success() {
    const router = useRouter();

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
                        <p className={styles.label}>Q Wallet</p>
                        <h1>
                            Read the QR Code of <br />
                            <span>your wallet!</span>{" "}
                        </h1>
                        <div className={styles.img_wrapper}>
                            <img src='/images/qr.png' alt='qr' />
                        </div>
                        <p>Your wallet Q Blockchain</p>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <div className='container'>
                    <div className={styles.footer_wrapper}>
                        <button className={styles.button}>
                            31icdjsoidcnslkjnopd
                            <img src='/copy.svg' alt='icon' />
                        </button>
                        <MyButton onClick={handleCkick}>Open Bank</MyButton>
                    </div>
                </div>
            </div>
        </>
    );
}
