import styles from './header.module.scss'
export default function Header() {

    return (
        <div className={styles.header}>
            <div className={styles.header__row}>
                <div className={styles.header__logo}>
                    <span className={styles.header__logo_image} />
                    <span className={styles.header__logo_text}>My boardgames</span>
                </div>
                <div className={styles.header__info}>
                    Добавляйте свои любимые настольные игры
                </div>
            </div>
        </div>
    )
}