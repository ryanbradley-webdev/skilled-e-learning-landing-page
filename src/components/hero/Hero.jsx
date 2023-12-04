import { useMediaQuery } from '../../hooks/useMediaQuery'
import Button from '../button/Button'
import styles from './hero.module.css'

export default function Hero() {
  const matches = useMediaQuery('(max-width: 661px)')

  return (
    <section
      className={styles.hero}
    >

      <div
        className={styles.heading}
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

      </div>

      <div
        className={styles.img_container}
      >

        <img src={`/image-hero-${matches ? 'mobile' : 'tablet'}.png`} alt="" />

      </div>

    </section>
  )
}
