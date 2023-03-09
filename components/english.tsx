// import data from "../data.json";
import styles from "styles/english.module.css";

export function English(props) {
	const { english } = props;
    return (
        <div>
			<h2>英語説明</h2>
			<figure>
				<blockquote className={styles.blockquote}>{english.quote}</blockquote>
				<figcaption className={styles.figcaption}>出典：{english.source}</figcaption>
			</figure>
		</div>
	)
}