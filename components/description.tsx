// import data from "../data.json";
import styles from "styles/description.module.css";
import Image from "next/image";

export function Description({ imageOn = false }) {
	const descriptions = {
		text: "＜used（形容詞）＋to（前置詞）＋名詞＞の形。usedは「（人・動物・感覚器官が）（事・モノ・人）に慣れている」という意味を表す形容詞。",
		imageSrc: "hello.jpg",
		imageAlt: "Hello"
	};

	// const descriptions = data.data.descriptions;
	return (
		<div>
			<h2>解説</h2>
			<p>{descriptions.text}</p>
			<figure className={styles.image}>
				<Image
					src={`/images/${descriptions.imageSrc}`}
					alt={descriptions.imageAlt}
					layout="fill"
					objectFit="cover"
				/>
			</figure>
		</div>
	);
}