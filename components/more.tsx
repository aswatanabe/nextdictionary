import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import styles from "styles/more.module.css";

export function More(props) {
    const { more } = props;
	return (
		<div className={styles.captionBox}>
			<h2 className={styles.caption}><TipsAndUpdatesIcon />More</h2>
			<dl>
				{more.map((item) => (
					<div key={item.id.toString()}>
						<dt>{item.text}</dt>
						<dd className={styles.dd}>{item.example}</dd>
					</div>
				))}
			</dl>
		</div>
	);
}