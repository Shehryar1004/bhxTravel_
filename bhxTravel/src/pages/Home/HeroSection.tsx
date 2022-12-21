import { Link } from 'react-router-dom'
import Image from '../../assets/bus1.webp'
import styles from './style.module.css'

function HeroSection(){
    return (
        <div className={styles.heroContainer}>
            <div>
                <img src={Image} alt='a minibus type vehicle' className={styles.image}/>
            </div>
            <div>
                <h2 className={styles.heading}>
                    CALL NOW TO BOOK YOUR MINIBUS & COACH HIRE WITH DRIVER
                </h2>
                <ul className={styles.list}>
                    <li>
                        <span>One stop Minibus Hire & Coach hire Services to suit your needs Easy Booking system</span>
                    </li>

                    <li>
                        Competitive prices to suit your needs & Budget
                    </li>

                    <li>
                        Competitive Minibus hire Birmingham & Coach hire Birmingham
                    </li>

                    <li>
                        All Journeys carried out by Reliable drivers
                    </li>
                </ul>

                <Link to='/contact' className={styles.cta} >
                    Click Here to Request an Quotation
                </Link>
            </div>
        </div>
    )
}

export default HeroSection