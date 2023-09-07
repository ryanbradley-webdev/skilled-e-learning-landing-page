import styles from './button.module.css'

export default function Button({
    children,
    variant
}) {
    return (
        <button
            className={styles.button}
            data-variant={variant}
        >

            {children}

        </button>
    )
}