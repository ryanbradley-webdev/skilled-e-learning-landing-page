import { COURSE_DATA } from '../../courseData/courseData'
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

                {COURSE_DATA.map(data => (
                    <CourseCard
                        key={crypto.randomUUID()}
                        {...data}
                    />
                ))}

            </div>

        </section>
    )
}