import styles from "../styles/Header.module.css";

export default function Header({ text }) {
    return (
        <header className={styles.header}>
            <h1>{text}</h1>
        </header>
    )
}