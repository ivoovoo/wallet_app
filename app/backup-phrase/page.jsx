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
            <div className={styles.page}>
                <div className={styles.main}>
                    <h1 className={styles.title}>
                        Backup your recovery phrase{" "}
                    </h1>
                    <p>
                        Without the recovery phrase, when you lose your device
                        or delete the app, you will permanently lose all assets
                        stored on the wallet
                    </p>
                </div>
                <div className={styles.img_wrapper}>
                    <Image
                        src='/Vault-rafiki_1.svg'
                        alt='image'
                        width={324}
                        height={324}
                    />
                </div>

                <div className={styles.btn_wrapper}>
                    <MyButton onClick={handleCkick}>
                        Backup my phrase now
                    </MyButton>
                    <p>I will backup later.</p>
                </div>
            </div>
        </div>
    );
}
