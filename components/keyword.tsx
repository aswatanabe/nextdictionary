import styles from 'styles/keyword.module.css';

export function Keyword() {
    return (
        <div className={styles.sideBySide}>
            <h1>be used to</h1>
            <p className={`${styles.icon} ${styles.iconText}`}>助動詞</p>
            <p className={`${styles.icon} ${styles.iconText}`}>熟語</p>
        </div>
    )
}
