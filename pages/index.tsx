import { Search } from "@/components/search";
import { Options } from "@/components/options";
import styles from "styles/home.module.css";

export default function Home() {
	return (
		<div>
			<h1 className={styles.title}>Next Dictionary</h1>
			<Search />
			<Options />
		</div>
	)
}