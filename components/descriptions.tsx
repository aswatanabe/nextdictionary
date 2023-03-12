import styles from "../styles/description.module.css";
import Image from "next/image";

type Descriptions = {
    text: string;
    imageSrc?: string;
    imageAlt?: string;
};

type Props = {
    descriptions: Descriptions;
};

export function Descriptions(props: Props) {
    const { descriptions } = props;

    return (
        <div>
            <h2>解説</h2>
            <p>{descriptions.text}</p>
            {descriptions.imageSrc && (
                <figure className={styles.image}>
                    <Image
                        src={`/${descriptions.imageSrc}`}
                        alt={`${descriptions.imageAlt}`}
                        layout="fill"
                        objectFit="cover"
                    />
                </figure>
            )}
        </div>
    );
}
