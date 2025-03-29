import styles from "../styles/Footer.module.css";

export default function Footer({ text }) {
    return (
        <footer className={styles.footer}>
            <p>{text}</p>
        </footer>
    )
}