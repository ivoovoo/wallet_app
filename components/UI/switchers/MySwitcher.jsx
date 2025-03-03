"use client";

import { useState } from "react";
import styles from "./MySwitcher.module.css";

export default function MySwitcher() {
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => {
        setIsOn(!isOn);
    };

    return (
        <div className={styles.switch} onClick={toggleSwitch}>
            <div
                className={`${styles.switchCircle} ${
                    isOn ? styles.on : styles.off
                }`}
            />
        </div>
    );
}
