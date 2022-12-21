import styles from './styles.module.css'
import vansImage from '../../assets/vans1.webp'
import ServicesSection from '../../components/Services'

function AboutPage(){
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <div className={styles.introSection}>
                    <div>
                        <img src={vansImage} alt='a black and a white van'/>
                    </div>
                    <div>
                        <h2>ABOUT</h2>
                        <p>Our commitment to customer service and satisfaction means whatever your requirements we’ll endeavour to make your journey as safe, comfortable and most of all as enjoyable as can be possible.</p>
                    </div>
                </div>

                <div className={styles.aboutSection}>
                    <h3 className={styles.blueHeading}>Minibus Hire Service for Birmingham and all UK</h3>
                    <p>Quality minibus hire on affordable prices. Whatever the occasion we have 8 to 16 seat minibus which will suit your needs. So whether it is a Corporate awayday, an Airport Pickup or Airport Transfer, a stag or hen do or a trip to a football match we have all the vehicle options for you. You will find our prices much cheaper than other minibus hire service providers in UK.</p>
                    <p>BHX Travel are the Local Birmingham minibus hire and National Minibus hire Specialist. Our Minibus hire and coach hire service is ideal for both private and contract hire use throughout Birmingham and rest of UK. Birmingham Minibus hire offers you the best solution and coverage for your minibus hire needs in the UK. We can offer you minibus hire solutions in Birmingham and through out the major cities in the UK for all your needs for Airport Transfers, parties, hen do and stag dos.</p>
                    <p>Our commitment to customer service and satisfaction means whatever your requirements we’ll endeavour to make your journey as safe, comfortable and most of all as enjoyable as can be possible.</p>
                    <p>We have decreased our prices for minibus hire Birmingham and Airport Transfers so that you can enjoy mini bus hire at an affordable price. All our prices are decreased to same effect in rest of UK aswell.</p>
                    <p>so when you next need to hire a minibus for your transport, then you should look no further than bhxtravel.com as we offer a very friendly service with reasonable rates to meet all your needs. call us or email us and we are sure to Quote you Happy. our Minibus hire Specialist will help you decide which minibus suits your needs. our fleet includes 9 seater minibus, 11 seater minibus, 14 seater minibus, 16 seater minibus.</p>
                </div>

                <div className={styles.aboutSection}>
                    <h3 className={styles.redHeading}>No Party is too Small, No Distance is too Far</h3>
                    <p>Our trained and professional team aim to provide a quality service and personal commitment to each customer. They are able to give friendly advice on all aspects of your journey.</p>
                    <p>Call us today on 0752888868 or email us on info@bhxtravel.com</p>
                </div>

                <a className={styles.cta}>Click Here to Request a Quotation</a>
            </div>

            <ServicesSection />
        </div>
    )
}

export default AboutPage