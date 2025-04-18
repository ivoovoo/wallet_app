"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";
import MyButton from "@/components/UI/buttons/MyButton";
import Link from "next/link";
import { copyToClipboard } from "@/helpers/downloadMnemonic";
import Heading from "@/components/layout/heading";
import { getMnemonicPhrase } from "@/lib/auth";

export default function CopyPhrase() {
    const [mnemonic, setMnemonic] = useState([]);
    const router = useRouter();

    const handleClick = () => {
        router.push("/confirm-phrase-handle");
    };

    useEffect(() => {
        const fetchMnemonic = async () => {
            const phraseArray = await getMnemonicPhrase();
            setMnemonic(phraseArray);
        };

        fetchMnemonic();
    }, []);

    return (
        <>
            <div className={`header ${styles.header_small}`}></div>
            <div className='main'>
                <div className={styles.main_wrapper}>
                    <Heading>Q Wallet</Heading>
                    <h1>
                        Your Recovery <span className='accent'>Phrase!</span>{" "}
                    </h1>
                    <div className={styles.flex}>
                        {mnemonic.length > 0 ? (
                            mnemonic.map((word, index) => (
                                <div key={index} className={styles.flex_item}>
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
                            onClick={() => copyToClipboard(mnemonic.join(" "))}
                        >
                            <Image
                                src='/copy.svg'
                                alt='image'
                                width={24}
                                height={24}
                            />
                            <p>Copy 16 phrase</p>
                        </div>
                    </div>
                    <div className={styles.banner}>
                        Do not store your phrase in your email or phone note
                        app. Keep them safe and never share with anybody
                    </div>
                </div>
            </div>
            <div className='footer'>
                <div className={styles.footer_wrapper}>
                    <div className={styles.btn_wrapper}>
                        <MyButton onClick={handleClick}>Continue</MyButton>
                    </div>
                    <Link href='/confirm-phrase-handle' prefetch={true}>
                        I have wallet
                    </Link>
                </div>
            </div>
        </>
    );
}
