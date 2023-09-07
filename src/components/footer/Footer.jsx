import styles from './footer.module.css'
import Button from '../button/Button'

export default function Footer() {
    return (
        <footer
            className={styles.footer}
        >

            <img src="/logo-light.svg" alt="" />

            <Button
                variant='dark'
            >
                Get Started
            </Button>

        </footer>
    )
}