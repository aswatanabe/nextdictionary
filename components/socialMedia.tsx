import Link from "next/link";
import styles from 'styles/socialMedia.module.css';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';

export function SocialMedia() {
    return (
        <div>
            <ul className={styles.list}>
                <li>
                    <Link href="/">
                        <FacebookRoundedIcon />
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <InstagramIcon />
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <TwitterIcon />
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <PinterestIcon />
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <YouTubeIcon />
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        TikTok
                    </Link>
                </li>
            </ul>
        </div>
    )
}