import styles from "../styles/description.module.css";
import Image from "next/image";

type Description = {
    text: string;
    imageSrc: string;
    imageAlt: string;
};

type Props = {
	description: Description;
}

export function Description(props: Props) {
    const { description } = props;

    return (
        <div>
            <h2>解説</h2>
            <p>{description.text}</p>
            <figure className={styles.image}>
                <Image
                    src={`/images/${description.imageSrc}`}
                    alt={description.imageAlt}
                    layout="fill"
                    objectFit="cover"
                />
            </figure>
        </div>
    );
}