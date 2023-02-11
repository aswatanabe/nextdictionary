import { Logo } from "./logo";
import { SocialMedia } from "./socialMedia";
import { FooterLink } from "./footerLink";

export function Footer() {
    return (
        <footer>
            <Logo />
            <SocialMedia />
            <FooterLink />
        </footer>
    )
}