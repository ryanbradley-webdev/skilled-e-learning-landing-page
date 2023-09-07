import CourseCard from '../courseCard/CourseCard'
import styles from './courses.module.css'

export default function Courses() {
    return (
        <section>

            <div
                className={styles.heading}
            >

                <h3>
                    Check out our most popular courses!
                </h3>

            </div>

            <div
                className={styles.card_grid}
            >

                <CourseCard
                    title='Animation'
                    description='Learn the latest animation techniques to create stunning motion design and captivate your audience.'
                />

            </div>

        </section>
    )
}