import {useState} from "react";
import Link from "next/link";
import styles from 'styles/nav.module.css';

export function Nav() {
    const [navIsOpen, setNavIsOpen] = useState(false)

    const toggleNav = () => {
        setNavIsOpen((prev) => !prev)
    }

    const closeNav = () => {
        setNavIsOpen (false)
    }

    return (
        <nav className={navIsOpen ? styles.open : styles.close}>
            {navIsOpen && (
                <style jsx global>{`
                    @media (max-width: 767px) {
                        body {
                            overflow: hidden;
                            position: fixed;
                            inline-size: 100%;
                        }
                    }
                `}</style>
            )}
            <button className={styles.btn} onClick={toggleNav}>
                <span className={styles.bar}></span>
                <span className={styles.srOnly}>MENU</span>
            </button>
            <ul className={styles.list}>
                <li>
                    <Link href="/" onClick={closeNav}>文法・語法</Link>
                </li>
                <li>
                    <Link href="/" onClick={closeNav}>イディオム</Link>
                </li>
                <li>
                    <Link href="/" onClick={closeNav}>ボキャブラリー</Link>
                </li>
                <li>
                    <Link href="/" onClick={closeNav}>語源</Link>
                </li>
                <li>
                    <Link href="/" onClick={closeNav}>会話表現</Link>
                </li>

            </ul>
        </nav>
    )
}