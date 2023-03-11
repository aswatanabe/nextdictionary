import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import styles from "styles/tips.module.css";

type Tips = {
    id: number;
    text: string[];
};

type Props = {
    tips: Tips;
};

export function Tips(props: Props) {
    const { tips } = props;
    
    return (
        <div>
            <h2>Tips</h2>
            <ul>
                {Array.isArray(tips)
                    ? tips.map((tip, index) => (
                        <li key={index}>
                            <AutoAwesomeIcon className={styles.listIcon} />
                            {tip}
                        </li>
                    ))
                    : (
                        <li key={tips.id}>
                            <AutoAwesomeIcon className={styles.listIcon} />
                            {tips.text}
                        </li>
                    )
                }
            </ul>
        </div>
    );
}