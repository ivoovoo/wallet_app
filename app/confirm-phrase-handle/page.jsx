"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import MyButton from "@/components/UI/buttons/MyButton";
import Image from "next/image";
import Heading from "@/components/layout/heading";
import MyButtonDark from "@/components/UI/buttons/MyButtonDark";
import MnemonicInput from "@/components/UI/inputs/MnemonicInput";
import MyButton_copy from "@/components/UI/buttons/MyButton_copy";

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
            if (gridWords.some((word) => word.trim() === "")) {
                alert("Please fill in all 16 words of the phrase");
                return;
            }

            const phrase = gridWords.join(" ");
            sessionStorage.setItem("mnemonic_phrase", phrase);

            router.push("/enter-password");
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
            const words = text.trim().split(/ \s?/);

            if (words.length !== 16) {
                alert("Error: The nubmer of words in the phrase is incorrect.");
                return;
            }
            setGridWords(words);
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
                            <MnemonicInput
                                key={index}
                                index={index}
                                word={word}
                                onChange={handleInputChange}
                            />
                        ))}
                    </div>
                    <MyButton_copy
                        onClick={pasteFromClipboard}
                        icon='/copy.svg'
                        alt='copy icon'
                    >
                        Paste 16 phrase
                    </MyButton_copy>
                </div>
                <div className={styles.btnDark_wrapper}>
                    <MyButtonDark onClick={() => router.push("/create-login")}>
                        Create a new wallet
                    </MyButtonDark>
                </div>
            </div>
            <div className='footer'>
                <div className={styles.footer_wrapper}>
                    <div className={styles.btn_wrapper}>
                        <MyButton onClick={handleSubmit} isLoading={isLoading}>
                            Continue
                        </MyButton>
                    </div>
                </div>
            </div>
        </>
    );
}
