import styles from './style.module.css'
import Logo from '../../assets/logo_white.png'
import {Link} from 'react-router-dom'
import {GoDeviceMobile} from 'react-icons/go'
import {BiTimeFive} from 'react-icons/bi'
import {ImLocation} from 'react-icons/im'
import {BsFacebook, BsTwitter, BsInstagram, BsWhatsapp} from 'react-icons/bs'

function Footer() {
    return (
        <div className={styles.container}>
            <div>
                <img src={Logo} alt='BhxTravels' className={styles.logo}/>
                <p className={styles.commitmentText}>Our commitment to customer service and satisfaction means whatever your requirements 
                    we’ll endeavour to make your journey as safe, comfortable and most of all as enjoyable as 
                    can be possible.
                </p>

                <div className={styles.brandInfo}>
                    <div>
                        <div>
                            <ImLocation size={20} color='rgba(237,28,36,1)'/>
                        </div>
                        <div>
                            <p><strong>Highfield Road, Hall Green, Birmingham, B28 0HP</strong></p>
                            <p>Our Location</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <GoDeviceMobile size={20} color='rgba(237,28,36,1)'/>
                        </div>
                        <div>
                            <p><strong>+447528888685</strong></p>
                            <p>Contact Number</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <BiTimeFive size={20} color='rgba(237,28,36,1)'/>
                        </div>
                        <div>
                            <p><strong>Mon-Fri 9.00am-19.00pm</strong></p>
                            <p>Office Hours</p>
                        </div>
                    </div>
                </div>

                <div className={styles.socialMediaContainer}>
                    <a href='https://www.facebook.com'>
                        <BsFacebook color='#fff'/>
                    </a>
                    <a href='https://www.twitter.com'>
                        <BsTwitter color='#fff'/>
                    </a>
                    <a href='https://www.instagram.com'>
                        <BsInstagram color='#fff'/>
                    </a>
                    <a href='https://www.whatsapp.com'>
                        <BsWhatsapp color='#fff'/>
                    </a>
                </div>
            </div>

            <div className={styles.ctaContainer}>
                <h4>BHX TRAVELS</h4>
                <div className={styles.ctaContent}>
                    <h2>NO PARTY IS TOO SMALL,<br />NO DISTANCE IS TOO FAR</h2>
                    <Link to='/contact' className={styles.ctaButton}>
                        Click Here to Request a Quotation
                    </Link>
                </div>
            </div>

            <p className={styles.copyright}>Copyright © 2021 bhxtravel.com All rights reserved.</p>
            
        </div>
    )
}

export default Footer