import styles from "./MyButton_copy.module.css";
import Image from "next/image";

export default function MyButton_copy({
    children,
    icon = "/copy.svg",
    alt = "icon",
    ...props
}) {
    return (
        <div {...props} className={styles.button}>
            <div className={styles.image_wrapper}>
                <Image src={icon} alt={alt} width={24} height={24} />
            </div>
            <p>{children}</p>
        </div>
    );
}
