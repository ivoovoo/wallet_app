"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";
import MyButton from "@/components/UI/buttons/MyButton";
import MyInput from "@/components/UI/inputs/MyInput";
import MySwitcher from "@/components/UI/switchers/MySwitcher";

export default function Onboarding3() {
    const router = useRouter();

    const handleSubmit = () => {
        router.push("/backup-phrase");
    };
    return (
        <div className='container'>
            <div className={styles.page}>
                <div className={styles.header}></div>
                <div className={styles.main}>
                    <h1 className={styles.title}>Create a Password</h1>
                    <p>Now that you’ve created your wallet, Lets secure it!</p>
                </div>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <MyInput type='text' label='Enter a password' />
                    <MyInput type='text' label='Confirm password' />
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
                    <div className={styles.btn_wrapper}>
                        <MyButton type='submit'>Create password</MyButton>
                    </div>
                </form>
            </div>
        </div>
    );
}
