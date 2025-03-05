"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";
import MyButton from "@/components/UI/buttons/MyButton";

export default function Success() {
    const router = useRouter();

    const handleCkick = () => {
        router.push("/create-password");
    };
    return (
        <div className='container'>
            <div className='page'>
                <div className={`header ${styles.header_small}`}></div>
                <div className='main'>
                    <div className={styles.main_wrapper}>
                        <div className={styles.img_wrapper}>
                            <Image
                                src='/High_five-rafiki_1.svg'
                                alt='image'
                                width={264}
                                height={264}
                            />
                        </div>
                        <h1>Your wallet has been successfully created</h1>
                    </div>
                </div>
                <div className='footer'>
                    <div className={styles.footer_wrapper}>
                        <MyButton onClick={handleCkick}>
                            Explore your wallet
                        </MyButton>
                    </div>
                </div>
            </div>
        </div>
    );
}
