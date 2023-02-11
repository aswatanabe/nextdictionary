import Link from "next/link";

export function SocialMedia() {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/">
                        <FacebookRoundedIcon />
                    </Link>
                </li>
                <li>
                    <Link href="/">Instagram</Link>
                </li>
                <li>
                    <Link href="/">Twitter</Link>
                </li>
                <li>
                    <Link href="/">Pinterest</Link>
                </li>
                <li>
                    <Link href="/">TikTok</Link>
                </li>
            </ul>
        </div>
    )
}