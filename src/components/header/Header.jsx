import styles from './header.module.css'
import Button from '../button/Button'

export default function Header() {
    return (
        <header
            className={styles.header}
        >

            <img src="/logo-dark.svg" alt="" />

            <Button
                variant='solid'
            >
                Get Started
            </Button>

        </header>
    )
}