"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";
import MyButton from "@/components/UI/buttons/MyButton";

export default function Onboarding3() {
    const router = useRouter();

    const handleCkick = () => {
        router.push("/create-password");
    };
    return (
        <div className='container'>
            <div className={styles.page}>
                <div className={styles.header}>
                    <div className={styles.img_wrapp}>
                        <Image
                            src='/Fast_loading_rafiki.svg'
                            alt='image'
                            width={264}
                            height={264}
                        />
                    </div>
                </div>
                <div className={styles.main}>
                    <h1 className={styles.title}>
                        Fast & secure access to <span>Dapps</span>
                    </h1>
                    <p>
                        Enjoy seamless access and to your favourite
                        decentralized app and services without boundaries
                    </p>
                </div>
                <div className={styles.footer}>
                    <MyButton onClick={handleCkick}>
                        Create a new wallet
                    </MyButton>

                    <p>
                        Already have a wallet? {"\u00A0"}
                        <span> Import here</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
