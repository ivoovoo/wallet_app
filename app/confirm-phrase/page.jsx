"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import MyButton from "@/components/UI/buttons/MyButton";

export default function CopyPhrase() {
    const router = useRouter();

    const [gridWords, setGridWords] = useState(Array(12).fill(null)); // Пустая сетка
    const [wordList, setWordList] = useState([
        "Dart",
        "Done",
        "Favor",
        "House",
        "Gone",
        "After",
        "Good",
        "Said",
        "Alchemy",
        "Dove",
        "Memo",
        "Caves",
    ]); // Список слов

    const handleClickWord = (word) => {
        const emptyIndex = gridWords.findIndex((cell) => cell === null);
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
                newGrid[index] = null;
                return newGrid;
            });
        }
    };

    useEffect(() => {
        document.body.dataset.page = "special";
        return () => {
            document.body.dataset.page = "default";
        };
    }, []);

    return (
        <div className='container' page='special'>
            <div className='page'>
                <div className={`header ${styles.header_small}`}></div>
                <div className='main'>
                    <div className={styles.main_wrapper}>
                        {" "}
                        <p className={styles.label}>Q Wallet</p>
                        <h1 className={styles.title}>
                            Add Verify Recovery <span>Phrase!</span>
                        </h1>{" "}
                        <div className={styles.grid}>
                            {gridWords.map((word, index) => (
                                <div
                                    key={index}
                                    className={styles.grid_item}
                                    onClick={() => handleClickGrid(index)}
                                >
                                    {index + 1}. {word}
                                </div>
                            ))}
                        </div>
                        <div className={styles.grid2}>
                            {wordList.map((word) => (
                                <div
                                    key={word}
                                    className={styles.grid_item2}
                                    onClick={() => handleClickWord(word)}
                                >
                                    {word}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='footer'>
                    <div className={styles.btn_wrapper}>
                        <MyButton onClick={() => router.push("/success")}>
                            Finish
                        </MyButton>
                    </div>
                </div>
            </div>
        </div>
    );
}
