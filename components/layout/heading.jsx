import ArrowBack from "../UI/arrows/arrow_back";
import styles from "./heading.module.css";

export default function Heading({ children }) {
    return (
        <div className={styles.heading}>
            <ArrowBack />
            <p className={styles.label}>{children}</p>
            <div></div>
        </div>
    );
}
