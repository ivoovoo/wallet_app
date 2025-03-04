"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";
import MyButton from "@/components/UI/buttons/MyButton";

export default function CopyPhrase() {
    const router = useRouter();

    const handleCkick = (event) => {
        router.push("/confirm-phrase");
    };
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
                            <div className={styles.flex_item}>1. Said</div>
                            <div className={styles.flex_item}>2. Done</div>
                            <div className={styles.flex_item}>3. Gone</div>
                            <div className={styles.flex_item}>12. After </div>
                            <div className={styles.flex_item}>4. Alchemy</div>
                            <div className={styles.flex_item}>5. Dove</div>
                            <div className={styles.flex_item}>6. House</div>
                            <div className={styles.flex_item}>8. Dart</div>
                            <div className={styles.flex_item}>9. Caves</div>
                            <div className={styles.flex_item}>10. Good</div>
                            <div className={styles.flex_item}>11. Favor</div>
                            <div className={styles.flex_item}>12. Memo</div>
                        </div>
                        <div className={styles.download_wrapper}>
                            <div className={styles.download}>
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
                            app. Keep them safe and never share wih anybody
                        </div>
                    </div>
                </div>
                <div className='footer'>
                    <div className={styles.btn_wrapper}>
                        <MyButton onClick={handleCkick}>Continue</MyButton>
                    </div>
                </div>
            </div>
        </div>
    );
}
