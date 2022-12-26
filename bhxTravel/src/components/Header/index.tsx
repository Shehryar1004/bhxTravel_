import {Link, NavLink} from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import {GoDeviceMobile} from 'react-icons/go'
import {BiTimeFive} from 'react-icons/bi'
import {ImLocation} from 'react-icons/im'
import {BsFacebook, BsTwitter, BsInstagram, BsWhatsapp} from 'react-icons/bs'
import styles from './style.module.css'

function Brand() {
    return (
        <div className={styles.brandContainer}>
            <div className={styles.logoContainer}>
                <Link to='/'>
                    <img src={Logo} alt='BHXTravel' className={styles.logo}/>
                </Link>
            </div>

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
        </div>
    )
}

function Navigation() {
    return(
        <div className={styles.navContainer}>
            <div className={styles.navbarContainer}>
                <div className={styles.navbar}>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/services'>Services</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
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
        </div>
    )
}

function Header() {
    return (
        <div className={styles.container}>
            <Brand />
            <Navigation />
        </div>
    )
}

export default Header