import styles from './style.module.css'
import SvgStar from '../../assets/SVGs/StarSvg'
import reviews from './reviews'

function ReviewsSection(){
    return (
        <div className={styles.reviewsContainer}>
            <h2>Customer Reviews</h2>

            <div className={styles.reviewsGrid}>
                {reviews.map(review => (
                    <div className={styles.reviewCard}>
                        <h3>{review.name}</h3>
                        <div className={styles.starsRow}>
                            <div><SvgStar fill='yellow' height={20} width={20}/></div>
                            <div><SvgStar fill='yellow' height={20} width={20}/></div>
                            <div><SvgStar fill='yellow' height={20} width={20}/></div>
                            <div><SvgStar fill='yellow' height={20} width={20}/></div>
                            <div><SvgStar fill='yellow' height={20} width={20}/></div>
                        </div>
                        <p>{review.service}</p>
                        <p className={styles.reviewMessage}>{review.review}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ReviewsSection