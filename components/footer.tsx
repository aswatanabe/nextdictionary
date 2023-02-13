import { Logo } from "./logo";
import { SocialMedia } from "./socialMedia";
import { FooterLink } from "./footerLink";
import styles from 'styles/footer.module.css';

export function Footer() {
    return (
        <footer className={styles.flexContainer}>
            <div >
                <Logo />
                <SocialMedia />
            </div>
            <FooterLink />
        </footer>
    )
}