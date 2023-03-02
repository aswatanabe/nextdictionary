import { Search } from "@/components/search";
import { Options } from "@/components/options";
import styles from "styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>Next Dictionary</h1>
			<Search />
		</div>
	)
}