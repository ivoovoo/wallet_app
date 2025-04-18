"use client";
import styles from "./MyInput.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function MyInput({ type = "text", ...props }) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const isPasswordField =
        type === "password" || props.id.includes("password");

    return (
        <div className={styles.input_wrapper}>
            {isPasswordField && (
                <label
                    className={styles.input_label}
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                >
                    <Image
                        src='/eye.svg'
                        alt='Переключить видимость пароля'
                        width={24}
                        height={24}
                        className={!isPasswordVisible ? styles.filter : ""}
                    />
                </label>
            )}
            <input
                {...props}
                id={props.id}
                name={props.id}
                className={styles.input}
                type={isPasswordVisible ? "text" : type}
                autoComplete='off'
            />
        </div>
    );
}
