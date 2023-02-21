import styles from 'styles/keyword.module.css';

export function Keyword() {
    const keyword = {
        h1: "be used to",
        p: [
            "助動詞",
            "熟語"
        ]
    };

    return (
        <div className={styles.sideBySide}>
            <h1>{keyword.h1}</h1>
                {keyword.p.map((p, index) => (
                    <p key={index} className={`${styles.icon} ${styles.iconText}`}>{p}</p>
                ))}
        </div>
    )
}