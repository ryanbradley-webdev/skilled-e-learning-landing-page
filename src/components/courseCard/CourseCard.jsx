import styles from './courseCard.module.css'

export default function CourseCard({
    title,
    description
}) {
    return (
        <div
            className={styles.card}
        >

            <img src={'icon-' + title.toLowerCase() + '.svg'} alt="" />

            <div>

                <h4>
                    {title}
                </h4>

                <p>
                    {description}
                </p>
                
            </div>

            <button>
                Get Started
            </button>

        </div>
    )
}