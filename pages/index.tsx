import { Meta } from "@/components/meta";
import { Search } from "@/components/search";
import styles from "styles/Home.module.css";

export default function Home() {
	return (
		<div>
			<Meta />
			<div className={styles.wrapper}>
				<h1 className={styles.title}>Next Dictionary</h1>
				<Search />
			</div>
		</div>
	)
}