import styles from './header.module.scss'
export default function Header({ children }) {
    return (
        <div className={styles.header}>
            <div className={styles.header__logo}>
                <span>My boardgames</span>
            </div>
        </div>
    )
}