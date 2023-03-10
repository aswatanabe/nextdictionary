import styles from 'styles/keyword.module.css';

type Keyword = {
    h1: string;
    p: string[];
};

type Props = {
    keyword: Keyword;
};

export function Keyword(props: Props) {
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