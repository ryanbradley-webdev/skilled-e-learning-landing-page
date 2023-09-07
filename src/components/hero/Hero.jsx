import Button from '../button/Button'
import styles from './hero.module.css'

export default function Hero() {
    return (
        <section
            className={styles.hero}
        >

            <h1>
                Maximize skill, minimize budget
            </h1>

            <p>
                Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want.
            </p>

            <Button
                variant='light'
            >
                Get Started
            </Button>

        </section>
    )
}