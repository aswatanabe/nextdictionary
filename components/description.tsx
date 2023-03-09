import styles from "styles/description.module.css";
import Image from "next/image";

export function Description(props) {
	const { descriptions } = props;

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