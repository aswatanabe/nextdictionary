import styles from "../styles/example.module.css";

type Example = {
    id: number;
    en: string;
    ja: string;
};

type Props = {
    examples: Example[];
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
