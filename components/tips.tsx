import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import styles from "styles/tips.module.css";

type Props = {
    tips: string[];
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
                        <li>
                            <AutoAwesomeIcon className={styles.listIcon} />
                            {tips}
                        </li>
                    )
                }
            </ul>
        </div>
    );
}