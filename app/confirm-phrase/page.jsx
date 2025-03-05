"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import MyButton from "@/components/UI/buttons/MyButton";
import { fetchMnemonic } from "@/helpers/downloadMnemonic";
import USER from "@/constants/user";

export default function CopyPhrase() {
    const userId = USER.user.id;
    const sessionId = USER.access_token;
    const router = useRouter();

    const [gridWords, setGridWords] = useState(Array(12).fill(null));
    const [wordList, setWordList] = useState([]);

    useEffect(() => {
        const getMnemonic = async () => {
            const phrase = await fetchMnemonic(userId, sessionId);
            setWordList(phrase);
        };
        getMnemonic();
    }, []);

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

    return (
        <div className='container'>
            <div className='page'>
                <div className='header'></div>
                <div className={`main ${styles.main_special}`}>
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
