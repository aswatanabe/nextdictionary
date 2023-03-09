import styles from 'styles/keyword.module.css';

export function Keyword(props) {
    const { keyword } = props;
    return (
        <div className={styles.sideBySide}>
            <h1>{keyword.h1}</h1>
            {keyword.p.map((p, index) => (
            <p key={index} className={`${styles.icon} ${styles.iconText}`}>
                {p}
            </p>
            ))}
        </div>
    );
}