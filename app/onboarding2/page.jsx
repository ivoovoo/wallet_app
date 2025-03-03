import Link from "next/link";
import styles from "./page.module.css";

export default function Onboarding2() {
    return (
        <div className='container'>
            <div className={styles.page}>
                <div className={styles.header}></div>
                <div className={styles.main}>
                    <h1 className={styles.title}>
                        Simple wallet <span>control</span> everywhere
                    </h1>
                    <p>
                        Enjoy lightning fast execution of your crypto transfers
                        and smart contracts. No limits to what you can do with
                        your assets
                    </p>
                </div>
                <div className={styles.footer}>
                    <div className={styles.points}>
                        <div></div>
                        <div className={styles.active}></div>
                        <div></div>
                    </div>
                    <Link href='/onboarding3' prefetch={true}>
                        Next
                    </Link>
                </div>
            </div>
        </div>
    );
}
