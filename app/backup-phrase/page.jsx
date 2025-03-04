"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";
import MyButton from "@/components/UI/buttons/MyButton";

export default function BackupPhrase() {
    const router = useRouter();

    const handleCkick = (event) => {
        router.push("/copy-phrase");
    };
    return (
        <div className='container'>
            <div className='page'>
                <div className={`header ${styles.header_small}`}></div>
                <div className='main'>
                    <div className={styles.main_wrapper}>
                        <h1>Backup your recovery phrase </h1>
                        <p>
                            Without the recovery phrase, when you lose your
                            device or delete the app, you will permanently lose
                            all assets stored on the wallet
                        </p>
                        <div className={styles.img_wrapper}>
                            <Image
                                src='/Vault-rafiki_1.svg'
                                alt='image'
                                width={324}
                                height={324}
                            />
                        </div>
                    </div>
                </div>
                <div className='footer'>
                    <div className={styles.btn_wrapper}>
                        <MyButton onClick={handleCkick}>
                            Backup my phrase now
                        </MyButton>
                        <p>I will backup later.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
