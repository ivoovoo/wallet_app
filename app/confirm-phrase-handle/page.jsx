"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import MyButton from "@/components/UI/buttons/MyButton";
import Image from "next/image";
import Heading from "@/components/layout/heding";

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

    const pasteFromClipboard = async () => {
        try {
            const text = await navigator.clipboard.readText();
            const words = text.trim().split(/,\s?/);

            if (words.length !== 16) {
                alert("Error: The nubmer of words in the phrase is incorrect.");
                return;
            }

            setGridWords(words);
            setWordList([]);
        } catch (error) {
            alert("Insertion error!");
            console.error("Insertion error:", error);
        }
    };

    return (
        <>
            <div className='header'></div>
            <div className={`main ${styles.main_special}`}>
                <div className={styles.main_wrapper}>
                    <Heading>Q Wallet</Heading>
                    <h1 className={styles.title}>
                        Enter your secret &ensp;
                        <span className='accent'>Phrase!</span>
                    </h1>
                    <div className={styles.grid}>
                        {gridWords.map((word, index) => (
                            <div className={styles.input_wrapper}>
                                <span>{`${index + 1}.`}</span>
                                <input
                                    type='text'
                                    key={index}
                                    value={word}
                                    onChange={(e) =>
                                        handleInputChange(index, e.target.value)
                                    }
                                    className={styles.grid_item}
                                />
                            </div>
                        ))}
                    </div>
                    <div className={styles.download_wrapper}>
                        <div
                            className={styles.download}
                            onClick={pasteFromClipboard}
                        >
                            <Image
                                src='/copy.svg'
                                alt='image'
                                width={24}
                                height={24}
                            />
                            <p>Paste 16 phrase</p>
                        </div>
                    </div>
                </div>
                <button
                    className={styles.button}
                    onClick={() => router.push("/confirm-phrase")}
                >
                    Create a new wallet
                </button>
            </div>
            <div className='footer'>
                <div className={styles.footer_wrapper}>
                    <div className={styles.btn_wrapper}>
                        <MyButton onClick={handleSubmit} isLoading={isLoading}>
                            Finish
                        </MyButton>
                    </div>
                </div>
            </div>
        </>
    );
}
