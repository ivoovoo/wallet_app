"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";
import MyButton from "@/components/UI/buttons/MyButton";
import Link from "next/link";

export default function Onboarding3() {
    const router = useRouter();

    const handleCkick = () => {
        router.push("/create-password");
    };
    return (
        <div className='container'>
            <div className='page'>
                <div className={`header ${styles.header_large}`}>
                    <div className={styles.img_wrapp}>
                        <Image
                            src='/Fast_loading_rafiki.svg'
                            alt='image'
                            width={264}
                            height={264}
                        />
                    </div>
                </div>
                <div className='main'>
                    <div className={styles.main_wrapper}>
                        <h1>
                            Fast & secure access to <span>Dapps</span>
                        </h1>
                        <p>
                            Enjoy seamless access and to your favourite
                            decentralized app and services without boundaries
                        </p>
                    </div>
                </div>
                <div className='footer'>
                    <div className={styles.footer_wrapper}>
                        <MyButton onClick={handleCkick}>
                            Create a new wallet
                        </MyButton>

                        <p>
                            Already have a wallet? {"\u00A0"}
                            <Link href='/copy-phrase' prefetch={true}>
                                <span> Import here</span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
