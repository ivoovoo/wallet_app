import styles from "./MyButton_link.module.css";
import Link from "next/link";

export default function MyButton({ children, ...props }) {
    return (
        <Link {...props} className={styles.button}>
            {children}
        </Link>
    );
}
