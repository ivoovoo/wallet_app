"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";
import MyButton from "@/components/UI/buttons/MyButton";
import { downloadMnemonic, fetchMnemonic } from "@/helpers/downloadMnemonic";

export default function CopyPhrase() {
    const userId = 181818;
    const sessionId = "181818";
    const [mnemonic, setMnemonic] = useState([]);
    const router = useRouter();

    const handleClick = (event) => {
        router.push("/confirm-phrase");
    };

    useEffect(() => {
        const getMnemonic = async () => {
            const phrase = await fetchMnemonic(userId, sessionId);
            setMnemonic(phrase);
        };
        getMnemonic();
    }, []);

    return (
        <div className='container'>
            <div className='page'>
                <div className={`header ${styles.header_small}`}></div>
                <div className='main'>
                    <div className={styles.main_wrapper}>
                        <p className={styles.label}>Q Wallet</p>
                        <h1>
                            Your Recovery <span>Phrase!</span>{" "}
                        </h1>
                        <div className={styles.flex}>
                            {mnemonic.length > 0 ? (
                                mnemonic.map((word, index) => (
                                    <div
                                        key={index}
                                        className={styles.flex_item}
                                    >
                                        {index + 1}. {word}
                                    </div>
                                ))
                            ) : (
                                <p>Loading mnemonic...</p>
                            )}
                        </div>
                        <div className={styles.download_wrapper}>
                            <div
                                className={styles.download}
                                onClick={() =>
                                    downloadMnemonic(sessionId, userId)
                                }
                            >
                                <Image
                                    src='/copy.svg'
                                    alt='image'
                                    width={24}
                                    height={24}
                                />
                                <p>Download all phrase</p>
                            </div>
                        </div>
                        <div className={styles.banner}>
                            Do not store your phrase in your email or phone note
                            app. Keep them safe and never share with anybody
                        </div>
                    </div>
                </div>
                <div className='footer'>
                    <div className={styles.btn_wrapper}>
                        <MyButton onClick={handleClick}>Continue</MyButton>
                    </div>
                </div>
            </div>
        </div>
    );
}
