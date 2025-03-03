import styles from "./MyInput.module.css";
import Image from "next/image";

export default function MyInput({ label, ...props }) {
    return (
        <div className={styles.input_wrapper}>
            <label className={styles.input_label}>
                {label}
                <Image src='/eye.svg' alt='image' width={24} height={24} />
            </label>
            <input {...props} className={styles.input} />
        </div>
    );
}
