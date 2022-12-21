import styles from './style.module.css'

function EnquiryForm() {
    return (
        <div className={styles.container}>
            <label>Nature of Enquiry *<br /></label>

            <input 
                type='radio' 
                id='enquiry-oneWay' 
                name='enquiryNature' 
                value='one-way'
                onChange={() => console.log('hello')} 
                defaultChecked={true}
            />
            <label htmlFor='enquiry-oneWay'>One Way</label>

            <input 
                type='radio' 
                id='enquiry-return' 
                name='enquiryNature' 
                value='return' 
                onChange={() => console.log('')}
            />
            <label htmlFor='enquiry-return'>Return</label>

            <div className={styles.inputContainer}>
                <label>Pickup Point (Please provide full address and postcode) *</label>
                <input 
                    type='text'
                    id='enquiry-pickupPoint'
                    name='pickupPoint'
                    onChange={() => console.log()}
                />
            </div>
        </div>
    )
}

export default EnquiryForm