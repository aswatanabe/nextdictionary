import styles from "styles/example.module.css";

export function Examples(props) {
	const { examples } = props;
	
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