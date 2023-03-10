import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import styles from "styles/english.module.css";

type English = {
    quote: string;
    source: string;
};

type Props = {
    english: English;
};

export function English(props: Props) {
	const { english } = props;
    return (
        <div>
			<h2>英語説明</h2>
			<figure>
				<blockquote className={styles.blockquote}>
					<FormatQuoteIcon className={styles.blockquoteBefore}/>
					{english.quote}
					<FormatQuoteIcon className={styles.blockquoteAfter}/>
				</blockquote>
				<figcaption className={styles.figcaption}>
					出典：{english.source}
				</figcaption>
			</figure>
		</div>
	)
}