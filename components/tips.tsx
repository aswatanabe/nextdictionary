import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import styles from "styles/tips.module.css";

export function Tips(props) {
	const { tips } = props;
	return (
		<div>
			<h2>Tips</h2>
			<ul>
				{tips.map((tip) => (
					<li key={tip}>
						<AutoAwesomeIcon className={styles.listIcon} />
						{tip}
					</li>
        		))}
			</ul>
		</div>
	);
}