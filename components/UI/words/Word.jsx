"use client";

import styles from "./Word.module.css"; // или используй существующий файл стилей

export default function Word({ word, onClick }) {
    return (
        <div className={styles.word} onClick={() => onClick(word)}>
            {word}
        </div>
    );
}
