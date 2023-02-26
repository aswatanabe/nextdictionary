import data from '../data.json';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import styles from "styles/tips.module.css";

export function Tips() {
	const tips = [
		"発音に注意",
		"be used to -ing［名詞］ / get used to -ing［名詞］の違いに注意",
		"used to＋動詞の原形 / be used to -ing［名詞］ / be used to＋動詞の原形 の違いに注意"
	];

	// const tips = data.data.tips;
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