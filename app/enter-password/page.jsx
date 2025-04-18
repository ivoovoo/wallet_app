"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";
import MyButton from "@/components/UI/buttons/MyButton";
import MyInput from "@/components/UI/inputs/MyInput";
import MySwitcher from "@/components/UI/switchers/MySwitcher";
import Heading from "@/components/layout/heading";
import { useState, useEffect } from "react";
import { login } from "@/lib/auth";

export default function EnterPassword() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        word: "",
        password: "",
    });
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const phrase = sessionStorage.getItem("mnemonic_phrase");
        if (phrase) {
            setFormData((prev) => ({
                ...prev,
                word: phrase,
            }));
        }
    }, []);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (isLoading) return;

        setIsLoading(true);

        try {
            await login({
                word: formData.word,
                password: formData.password,
            });
            router.push("/success-details");
        } catch (err) {
            setError(err.message);
            alert("Registration error:", err.error);
            console.error("Registration error:", err);
        } finally {
            sessionStorage.removeItem("mnemonic_phrase");
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className='header'></div>
            <div className='main'>
                <Heading />
                <div className={styles.main_wrapper}>
                    <h1>Enter your password</h1>
                    <p>Please enter your password</p>
                    {error && <div className={styles.error}>{error}</div>}
                    <form
                        id='myForm'
                        className={styles.form}
                        onSubmit={handleSubmit}
                        autoComplete='off'
                    >
                        <MyInput
                            id='password'
                            placeholder='Enter a password'
                            type='password'
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />

                        <div className={styles.faceId}>
                            <Image
                                src='/faceId.svg'
                                alt='image'
                                width={32}
                                height={32}
                            />
                            <p>Sign in with face ID?</p>
                            <MySwitcher />
                        </div>
                    </form>
                    <div className={styles.btn_wrapper}>
                        <MyButton
                            type='submit'
                            form='myForm'
                            disabled={isLoading}
                        >
                            {isLoading ? "Processing..." : "Sign In"}
                        </MyButton>
                    </div>
                </div>
            </div>
            <div className={`footer ${styles.footer_top}`}>
                <div className={styles.footer_wrapper}></div>
            </div>
        </>
    );
}
