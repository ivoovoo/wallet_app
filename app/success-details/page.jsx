"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";
import styles from "./page.module.css";
import MyButton from "@/components/UI/buttons/MyButton";
import animationData from "@/public/images/Animation_5.json";
import dynamic from "next/dynamic";
import Heading from "@/components/layout/heding";
import { copyToClipboard } from "@/helpers/downloadMnemonic";

const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

export default function Success() {
    const router = useRouter();

    const qBlockchainRef1 = useRef(null);
    const solanaBlockchainRef = useRef(null);
    const qBlockchainRef2 = useRef(null);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: { preserveAspectRatio: "xMidYMid meet" },
    };

    const handleClick = () => router.push("/create-password");
    const handleQRClick = () => router.push("/success-qr");

    const handleCopy = (ref) => {
        if (ref.current) {
            const text = ref.current.textContent.trim();
            copyToClipboard(text);
        }
    };

    return (
        <>
            <div className={`header ${styles.header_small}`}></div>
            <div className='main'>
                <Heading />
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
                                <p ref={qBlockchainRef1}>
                                    31icdjsoidcnslkjnopd
                                </p>
                                <div className={styles.btnGroup}>
                                    <img
                                        src='/copy.svg'
                                        alt='Copy'
                                        onClick={() =>
                                            handleCopy(qBlockchainRef1)
                                        }
                                    />
                                    <img
                                        src='/qr.svg'
                                        alt='QR'
                                        onClick={handleQRClick}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={styles.details_item}>
                            <div className={styles.details_item_title}>
                                SOLANA BLOCKCHAIN
                            </div>
                            <div className={styles.details_item_row}>
                                <p ref={solanaBlockchainRef}>
                                    3893910jdoijcsjlhkhgkgjfgfjkjdowij20
                                </p>
                                <div className={styles.btnGroup}>
                                    <img
                                        src='/copy.svg'
                                        alt='Copy'
                                        onClick={() =>
                                            handleCopy(solanaBlockchainRef)
                                        }
                                    />
                                    <img
                                        src='/qr.svg'
                                        alt='QR'
                                        onClick={handleQRClick}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={styles.details_item}>
                            <div className={styles.details_item_title}>
                                Q BLOCKCHAIN
                            </div>
                            <div className={styles.details_item_row}>
                                <p ref={qBlockchainRef2}>
                                    UQDJylSNNoHdd8fEFiE-Z-3vzO-YXYosou4FhBb0uu2E10pX
                                </p>
                                <div className={styles.btnGroup}>
                                    <img
                                        src='/copy.svg'
                                        alt='Copy'
                                        onClick={() =>
                                            handleCopy(qBlockchainRef2)
                                        }
                                    />
                                    <img
                                        src='/qr.svg'
                                        alt='QR'
                                        onClick={handleQRClick}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <div className={styles.footer_wrapper}>
                    <MyButton onClick={handleClick}>Open Bank</MyButton>
                </div>
            </div>
        </>
    );
}
