import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.container}>
            <ul className={styles.list}>
                <li className={styles.item}><a href="/">Home</a></li>
                <li className={styles.item}> <Link href="/blog">blog ..</Link></li>
                <li className={styles.item}><a href="/users">users</a></li>
            </ul>
        </header>
    )
}