import styles from "styles/description.module.css";
import Image from "next/image";
import hello from "images/hello.jpg";

const descriptions = {
	text: "＜used（形容詞）＋to（前置詞）＋名詞＞の形。usedは「（人・動物・感覚器官が）（事・モノ・人）に慣れている」という意味を表す形容詞",
	imageSrc: hello,
};

export function Description({ imageOn = false }) {
	return (
	<div>
		<h2>解説</h2>
		<p>{descriptions.text}</p>
		<figure>
			<Image src={descriptions.imageSrc} alt="" layout="responsive"  className={styles.image} />
		</figure>
	</div>
	);
}