import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import styles from "styles/more.module.css";

const more = [
	{
		id: 1,
		text:"be used to / get used toを使わずに、現在完了形を使って「～に慣れている」を表現することもできる。",
		example:"Don't worry. I've done this before.（心配しないで。これをするのは慣れているから）",
	},
];

export function More() {
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