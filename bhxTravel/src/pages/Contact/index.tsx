import EnquiryForm from '../../components/EnquiryForm'
import image from '../../assets/van3.webp'
import styles from './style.module.css'

function ContactPage(){
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <div>
                        <img src={image} alt='van'/>
                    </div>
                    <div>
                        <h2>Contact</h2>
                        <p>Our commitment to customer service and satisfaction means whatever your requirements we’ll endeavour to make your journey as safe, comfortable and most of all as enjoyable as can be possible.</p>
                        <p>Call us today on 0752888868 or email us on info@bhxtravel.com</p>
                    </div>
                </div>
            </div>
            <div className={styles.formContainer}>
                <div className={styles.container}>
                    <p>Please input the pickup and destination addresses and select from drop down options. An asterisk (*) indicates a required field.</p>
                    <EnquiryForm />
                </div>
            </div>
        </div>
    )
}

export default ContactPage