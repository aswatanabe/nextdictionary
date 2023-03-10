import React from 'react';
import styles from "styles/twoColumn.module.css";

type Props={
	children: React.ReactNode;
};


export function TwoColumn({ children } : Props) {
    return (
        <div className={styles.flexContainer}>
            {children}
        </div>
    )
}

export function TwoColumnMain({ children } : Props) {
    return (
        <div className={styles.main}>
            {children}
        </div>
    )
}

export function TwoColumnSidebar({ children } : Props) {
    return (
        <div className={styles.sidebar}>
            {children}
        </div>
    )
}