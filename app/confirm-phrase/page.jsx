"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import MyButton from "@/components/UI/buttons/MyButton";

export default function CopyPhrase() {
    const router = useRouter();

    const handleCkick = (event) => {
        router.push("/success");
    };

    useEffect(() => {
        document.body.dataset.page = "special";

        return () => {
            document.body.dataset.page = "default";
        };
    }, []);
    return (
        <div className='container' page='special'>
            <div className={styles.page}>
                <div className={styles.main}>
                    <p>Q Wallet</p>
                    <h1 className={styles.title}>
                        Add Verify Recovery <span>Phrase!</span>
                    </h1>
                </div>
                <div className={styles.grid}>
                    <div className={styles.grid_item}>1. </div>
                    <div className={styles.grid_item}>2.</div>
                    <div className={styles.grid_item}>3.</div>
                    <div className={styles.grid_item}>4. </div>
                    <div className={styles.grid_item}>5.</div>
                    <div className={styles.grid_item}>6.</div>
                    <div className={styles.grid_item}>7.</div>
                    <div className={styles.grid_item}>8.</div>
                    <div className={styles.grid_item}>9.</div>
                    <div className={styles.grid_item}>10.</div>
                    <div className={styles.grid_item}>11.</div>
                    <div className={styles.grid_item}>12.</div>
                </div>
                <div className={styles.grid2}>
                    <div className={styles.grid_item2}>Dart</div>
                    <div className={styles.grid_item2}>Done</div>
                    <div className={styles.grid_item2}>Favor</div>
                    <div className={styles.grid_item2}>House</div>
                    <div className={styles.grid_item2}>Gone</div>
                    <div className={styles.grid_item2}>After</div>
                    <div className={styles.grid_item2}>Good</div>
                    <div className={styles.grid_item2}>Said</div>
                    <div className={styles.grid_item2}>Alchemy</div>
                    <div className={styles.grid_item2}>Dove</div>
                    <div className={styles.grid_item2}>Memo</div>
                    <div className={styles.grid_item2}>Caves</div>
                </div>
                <div className={styles.btn_wrapper}>
                    <MyButton onClick={handleCkick}>Finish</MyButton>
                </div>
            </div>
        </div>
    );
}
