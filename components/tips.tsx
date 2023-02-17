import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import styles from "styles/tips.module.css";

export function Tips() {
	const tips = [
		"発音に注意",
		"be used to / get used to の違いに注意",
		"used to 原形 / be used to -ing / be used to 原形 の違いに注意"
	];

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