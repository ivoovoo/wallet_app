"use client";

import styles from "./MnemonicInput.module.css";
export default function MnemonicInput({ index, word, onChange }) {
    return (
        <div className={styles.input_wrapper} key={index}>
            <span>{`${index + 1}.`}</span>
            <input
                type='text'
                value={word || ""}
                onChange={(e) => onChange(index, e.target.value)}
                className={styles.input}
            />
        </div>
    );
}
