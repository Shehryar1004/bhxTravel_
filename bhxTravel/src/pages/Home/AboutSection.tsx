import { Link } from 'react-router-dom'
import Image from '../../assets/bus2.webp'
import styles from './style.module.css'

function AboutSection(){
    return (
        <div className={styles.aboutContainer}>
            <div>
                <img src={Image} alt='bus' className={styles.image}/>
            </div>

            <div>
                <p>
                    BHX Travel are the Local Birmingham Minibus hire and National minibus hire specialist. 
                    Our Minibus hire and coach hire service is ideal for both private and contract hire use throughout Birmingham and rest of UK. 
                    Birmingham Minibus hire offers you the best solution for your transport & minibus hire needs in the UK. 
                    We can offer you minibus hire solutions for Airport Transfers, parties, Day trips, Tours, contracts, hen do and stag dos.
                </p>

                <p>
                    Our commitment to customer service and satisfaction means whatever your requirements 
                    we’ll endeavour to make your journey as safe, comfortable and most of all as enjoyable 
                    as can be possible.
                </p>

                <p>
                    <strong>“BHX TRAVEL- The Safest & <span className={styles.redText}>Most Cost-Effective Way</span> To Travel"</strong>
                </p>
            </div>
        </div>
    )
}

export default AboutSection