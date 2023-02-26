import data from "../data.json";
import styles from "styles/example.module.css";

export function Example() {
	const examples = [
		{
			en: "I'm used to speaking English.",
			ja: "わたしは英語を話すことに慣れています。",
		},
		{
			en: "The cat is not used to its new home yet.",
			ja: "そのネコはまだ新しい家に慣れていません。",
		},
	];

	// const examples = data.data.examples;
	return (
		<div>
			<h2>例</h2>
			{examples.map((example, index) => (
				<div key={index} className={styles.example}>
					<p>{example.en}</p>
					<p>{example.ja}</p>
				</div>
			))}
		</div>
	);
}  