"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import MyButton from "@/components/UI/buttons/MyButton";
import MyInput from "@/components/UI/inputs/MyInput";
import MySwitcher from "@/components/UI/switchers/MySwitcher";
import Heading from "@/components/layout/heading";

export default function CreateLogin() {
    const router = useRouter();
    const [login, setLogin] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!login.trim()) {
            alert("Login cannot be empty");
            return;
        }
        localStorage.setItem("wallet_login", login);
        setTimeout(() => {
            requestAnimationFrame(() => {
                router.push("/create-password");
            });
        }, 2000);
    };
    return (
        <>
            <div className='header'></div>
            <div className='main'>
                <Heading></Heading>
                <div className={styles.main_wrapper}>
                    <h1>Create a login</h1>
                    <p>Create login for your wallet</p>
                    <form
                        id='myForm'
                        className={styles.form}
                        onSubmit={handleSubmit}
                        autoComplete='off'
                    >
                        <MyInput
                            id='login_enter'
                            placeholder='Enter a login'
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
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
                        <MyButton type='submit' form='myForm'>
                            Create login
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
