import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import styles from "styles/more.module.css";

type More = {
    text: string;
    example: string;
};

type Props = {
    more: More[];
};

export function More(props: Props) {
    const { more } = props;

    return (
        <div className={styles.captionBox}>
            <h2 className={styles.caption}><TipsAndUpdatesIcon />More</h2>
            <dl>
                {more.map((item, index) => (
                    <div key={index}>
                        <dt>{item.text}</dt>
                        <dd className={styles.dd}>{item.example}</dd>
                    </div>
                ))}
            </dl>
        </div>
    );
}
