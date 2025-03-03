import Image from "next/image";
import styles from "./page.module.css";
import MyButton_link from "@/components/UI/buttons/MyButton_link";

export default function Onboarding3() {
    return (
        <div className='container'>
            <div className={styles.page}>
                <div className={styles.header}>
                    <div className={styles.img_wrapp}>
                        <Image
                            src='/Fast_loading_rafiki.svg'
                            alt='image'
                            width={264}
                            height={264}
                        />
                    </div>
                </div>
                <div className={styles.main}>
                    <h1 className={styles.title}>
                        Fast & secure access to <span>Dapps</span>
                    </h1>
                    <p>
                        Enjoy seamless access and to your favourite
                        decentralized app and services without boundaries
                    </p>
                </div>
                <div className={styles.footer}>
                    <MyButton_link href='/create-password' prefetch={true}>
                        Create a new wallet
                    </MyButton_link>

                    <p>
                        Already have a wallet? {"\u00A0"}
                        <span> Import here</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
