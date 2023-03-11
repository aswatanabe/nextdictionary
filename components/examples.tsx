import styles from "../styles/example.module.css";

type Examples = {
    id: number;
    en: string;
    ja: string;
};

type Props = {
    examples: Examples[];
};

export function Examples(props: Props) {
    const { examples } = props;

    return (
        <div>
            <h2>例</h2>
            {examples.map((example) => (
                <div key={example.id} className={styles.example}>
                    <p>{example.en}</p>
                    <p>{example.ja}</p>
                </div>
            ))}
        </div>
    );
}
