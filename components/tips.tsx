import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import styles from "styles/tips.module.css";

type Tip = {
    id: number;
    text: string;
};

type Props = {
    tips: Tip[];
};

export function Tips(props: Props) {
    const { tips } = props;
    
    return (
        <div>
            <h2>Tips</h2>
            <ul>
                {tips.map((tip) => (
                    <li key={tip.id}>
                        <AutoAwesomeIcon className={styles.listIcon} />
                        {tip.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}