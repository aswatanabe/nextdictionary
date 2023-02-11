import Link from "next/link";

export function FooterLink() {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/">Next Dictionaryについて</Link>
                </li>
                <li>
                    <Link href="/">Next Dictionaryの使い方</Link>
                </li>
                <li>
                    <Link href="/">著作権</Link>
                </li>
                <li>
                    <Link href="/">プライバシーポリシー</Link>
                </li>
                <li>
                    <Link href="/">お問い合わせ</Link>
                </li>
            </ul>
        </div>
    )
}