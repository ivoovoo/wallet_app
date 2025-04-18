"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";
import MyButton from "@/components/UI/buttons/MyButton";
import MyInput from "@/components/UI/inputs/MyInput";
import MySwitcher from "@/components/UI/switchers/MySwitcher";
import Heading from "@/components/layout/heading";
import { useState, useEffect } from "react";
import { register } from "@/lib/auth";

export default function CreatePassword() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        confirm_password: "",
    });
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const savedUsername = localStorage.getItem("wallet_login");
        if (savedUsername) {
            setFormData((prev) => ({
                ...prev,
                username: savedUsername,
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

        if (formData.password !== formData.confirm_password) {
            setError("Passwords don't match");
            return;
        }

        if (isLoading) return;

        setIsLoading(true);

        try {
            const data = await register({
                username: formData.username,
                password: formData.password,
                confirm_password: formData.confirm_password,
            });
            sessionStorage.setItem("mnemonic_phrase", data.mnemonic_phrase);
            localStorage.removeItem("wallet_login");
            router.push("/backup-phrase");
        } catch (err) {
            setError(err.message);
            console.error("Registration error:", err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className='header'></div>
            <div className='main'>
                <Heading />
                <div className={styles.main_wrapper}>
                    <h1>Create a Password</h1>
                    <p>Now that you've created your wallet, Let’s secure it!</p>
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
                        <MyInput
                            id='confirm_password'
                            placeholder='Confirm a password'
                            type='password'
                            value={formData.confirm_password}
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
                            {isLoading ? "Processing..." : "Create password"}
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
