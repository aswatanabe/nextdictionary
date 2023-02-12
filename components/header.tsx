import { Logo } from "./logo";
import { Nav } from "./nav";
import styles from "styles/header.module.css"

export function Header() {
    return (
        <header>
            <div className={styles.flexContainer}>
                <Logo boxOn />
                <Nav />
            </div>
        </header>
    )
}