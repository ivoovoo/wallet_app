"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import MyButton from "@/components/UI/buttons/MyButton";
import Heading from "@/components/layout/heading";
import { getMnemonicPhrase } from "@/lib/auth";
import MnemonicInput from "@/components/UI/inputs/MnemonicInput";
import Word from "@/components/UI/words/Word";
import MyButton_copy from "@/components/UI/buttons/MyButton_copy";

export default function CopyPhrase() {
    const router = useRouter();

    const [gridWords, setGridWords] = useState(Array(16).fill(""));
    const [wordList, setWordList] = useState([]);
    const [originalPhrase, setOriginalPhrase] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const fetchMnemonic = async () => {
            const phraseArray = await getMnemonicPhrase();
            setOriginalPhrase(phraseArray);
            setWordList(phraseArray);
        };

        fetchMnemonic();
    }, []);

    const handleInputChange = (index, value) => {
        setGridWords((prev) => {
            const newGrid = [...prev];
            newGrid[index] = value;
            return newGrid;
        });
    };

    const handleClickWord = (word) => {
        const emptyIndex = gridWords.findIndex((cell) => cell === "");
        if (emptyIndex !== -1) {
            setGridWords((prev) => {
                const newGrid = [...prev];
                newGrid[emptyIndex] = word;
                return newGrid;
            });
            setWordList((prev) => prev.filter((w) => w !== word));
        }
    };

    const handleClickGrid = (index) => {
        if (gridWords[index]) {
            setWordList((prev) => [...prev, gridWords[index]]);
            setGridWords((prev) => {
                const newGrid = [...prev];
                newGrid[index] = "";
                return newGrid;
            });
        }
    };

    const handleFinish = async () => {
        setIsLoading(true);

        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (gridWords.join(" ") === originalPhrase.join(" ")) {
            router.push("/success-details");
        } else {
            alert("It's important that you enter your words correctly.");

            setGridWords(Array(16).fill(null));
            setWordList([...originalPhrase].sort(() => Math.random() - 0.5));
        }

        setIsLoading(false);
    };

    const pasteFromClipboard = async () => {
        try {
            const text = await navigator.clipboard.readText();
            const words = text.trim().split(/\s+/);

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
                        Add Verify Recovery{" "}
                        <span className='accent'>Phrase!</span>
                    </h1>
                    <div className={styles.grid_input}>
                        {gridWords.map((word, index) => (
                            <MnemonicInput
                                key={index}
                                index={index}
                                word={word}
                                onChange={handleInputChange}
                            />
                        ))}
                    </div>
                    <div className={styles.grid_word}>
                        {wordList.map((word) => (
                            <Word
                                key={word}
                                word={word}
                                onClick={handleClickWord}
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
            </div>
            <div className='footer'>
                <div className={styles.btn_wrapper}>
                    <MyButton onClick={handleFinish} isLoading={isLoading}>
                        Finish
                    </MyButton>
                </div>
            </div>
        </>
    );
}
