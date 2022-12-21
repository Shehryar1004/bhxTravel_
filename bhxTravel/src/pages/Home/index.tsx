import styles from './style.module.css'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import ServicesSection from '../../components/Services'
import ClientsSection from './ClientsSection'
import ReviewsSection from './ReviewsSection'
import EnquirySection from './EnquirySection'

function HomePage(){
    return (
        <div className={styles.page}>
            <HeroSection />
            <EnquirySection />
            <AboutSection />
            <ServicesSection />
            <ReviewsSection />
            <ClientsSection />
        </div>
    )
}

export default HomePage