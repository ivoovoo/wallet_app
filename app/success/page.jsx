import Image from "next/image";
import styles from "./page.module.css";
import MyButton_link from "@/components/UI/buttons/MyButton_link";

export default function Success() {
    return (
        <div className='container'>
            <div className={styles.page}>
                <div className={styles.header}>
                    <div className={styles.img_wrapp}>
                        <Image
                            src='/High_five-rafiki_1.svg'
                            alt='image'
                            width={264}
                            height={264}
                        />
                    </div>
                </div>
                <div className={styles.main}>
                    <h1 className={styles.title}>
                        Your wallet has been successfully created
                    </h1>
                </div>
                <div className={styles.footer}>
                    <MyButton_link href='/' prefetch={true}>
                        Let`s go!
                    </MyButton_link>

                    <p>Explore your wallet</p>
                </div>
            </div>
        </div>
    );
}
