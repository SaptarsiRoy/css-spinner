import styles from './FaceLoader.module.scss';

export default function FaceLoader() {
    return (
        <div className={styles["loader"]}>
            <div className={styles["dots"]}></div>
            <div className={styles["dots"]}></div>
            <div className={styles["dots"]}></div>
        </div>
    )
}
