"use client";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import MyButton from "@/components/UI/buttons/MyButton";
import ArrowBack from "@/components/UI/arrows/arrow_back";
import animationData from "@/public/images/Animation_5.json";
import dynamic from "next/dynamic";
import Heading from "@/components/layout/heding";
import { copyToClipboard } from "@/helpers/downloadMnemonic";
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
    const handleQRCkick = () => {
        router.push("/success-qr");
    };
    return (
        <>
            <div className={`header ${styles.header_small}`}></div>
            <div className='main'>
                <Heading></Heading>
                <div className={styles.main_wrapper}>
                    <div className={styles.img_wrapper}>
                        <Lottie options={defaultOptions} />
                    </div>
                    <h1>Your wallet has been successfully created</h1>
                    <div className={styles.details}>
                        <div className={styles.details_item}>
                            <div className={styles.details_item_title}>
                                Q BLOCKCHAIN
                            </div>
                            <div className={styles.details_item_row}>
                                <p>31icdjsoidcnslkjnopd</p>
                                <div className={styles.btnGroup}>
                                    <img
                                        src='/copy.svg'
                                        alt='icon'
                                        onClick={copyToClipboard(
                                            "31icdjsoidcnslkjnopd"
                                        )}
                                    />
                                    <img
                                        src='/qr.svg'
                                        alt='icon'
                                        onClick={handleQRCkick}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={styles.details_item}>
                            <div className={styles.details_item_title}>
                                SOLANA BLOCKCHAIN
                            </div>
                            <div className={styles.details_item_row}>
                                <p>3893910jdoijcsjlhkhgkgjfgfjkjdowij20</p>
                                <div className={styles.btnGroup}>
                                    <img
                                        src='/copy.svg'
                                        alt='icon'
                                        onClick={copyToClipboard(
                                            "3893910jdoijcsjlhkhgkgjfgfjkjdowij20"
                                        )}
                                    />
                                    <img
                                        src='/qr.svg'
                                        alt='icon'
                                        onClick={handleQRCkick}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={styles.details_item}>
                            <div className={styles.details_item_title}>
                                Q BLOCKCHAIN
                            </div>
                            <div className={styles.details_item_row}>
                                <p>
                                    UQDJylSNNoHdd8fEFiE-Z-3vzO-YXYosou4FhBb0uu2E10pX 
                                </p>
                                <div className={styles.btnGroup}>
                                    <img
                                        src='/copy.svg'
                                        alt='icon'
                                        onClick={copyToClipboard(
                                            "UQDJylSNNoHdd8fEFiE-Z-3vzO-YXYosou4FhBb0uu2E10pX"
                                        )}
                                    />
                                    <img
                                        src='/qr.svg'
                                        alt='icon'
                                        onClick={handleQRCkick}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
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
