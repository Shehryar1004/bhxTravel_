import EnquiryForm from '../../components/EnquiryForm'
import styles from './style.module.css'


function EnquirySection(){
    return (
        <div className={styles.enquiryContainer}>
            <div className={styles.enquiryContent}>
                <h2>Enquiry</h2>
                <p>Please input the pickup and destination addresses and select from drop down options. An asterisk (*) indicates a required field.</p>
                <EnquiryForm />
            </div>
        </div>
    )
}

export default EnquirySection