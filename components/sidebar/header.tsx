import styles from './header.module.scss';
import Link from 'next/link';
export default function Header() {

    return (
        <div className={styles.header}>
            <div className={styles.header__row}>
                <Link href="/" className={styles.header__logo}>
                    <span className={styles.header__logo_image} />
                    <span className={styles.header__logo_text}>My boardgames</span>
                </Link>
                <div className={styles.header__info}>
                    Добавляйте свои любимые настольные игры
                </div>
            </div>
        </div>
    )
}