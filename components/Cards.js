import styles from "../styles/Cards.module.css";

export default function Cards({ title, description }) {
    return (
        <div className={styles.card}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}