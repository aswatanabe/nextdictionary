import Link from "next/link";
import styles from 'styles/nav.module.css';

export function Nav() {
    return (
        <nav>
            <ul className={styles.list}>
                <li>
                    <Link href="/">文法・語法</Link>
                </li>
                <li>
                    <Link href="/">イディオム</Link>
                </li>
                <li>
                    <Link href="/">ボキャブラリー</Link>
                </li>
                <li>
                    <Link href="/">語源</Link>
                </li>
                <li>
                    <Link href="/">会話表現</Link>
                </li>

            </ul>
        </nav>
    )
}