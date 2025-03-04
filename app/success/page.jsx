import Image from "next/image";
import styles from "./page.module.css";
import MyButton_link from "@/components/UI/buttons/MyButton_link";

export default function Success() {
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
                        <MyButton_link href='/create-password' prefetch={true}>
                            Let`s go!
                            <p>Explore your wallet</p>
                        </MyButton_link>
                    </div>
                </div>
            </div>
        </div>
    );
}
