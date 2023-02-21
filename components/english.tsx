import styles from "styles/english.module.css";

export function English() {
	const english = {
		quote: "to have experienced something so that it no longer seems surprising, difficult, strange etc",
		source: "ロングマン現代英英辞典",
	}

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