import {useState} from 'react'
import styles from './style.module.css'

function EnquiryForm() {
    const [enquiryNature, setEnquiryNature] = useState<string>('One Way')
    const [pickup, setPickup] = useState<string>('')
    const [destination, setDestination] = useState<string>('')
    const [departureDate, setDepartureDate] = useState<string>('')
    const [departureTime, setDepartureTime] = useState<string>('')
    const [returnDate, setReturnDate] = useState<string>('')
    const [returnTime, setReturnTime] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [numberOfPassengers, setNumberOfPassengers] = useState<number>(0)
    const [luggage, setLuggage] = useState<number>(0)
    const [reason, setReason] = useState<string>('')
    const [heard, setHeard] = useState<string>('')
    const [termsAccepted, setTermsAccepted] = useState<boolean>(false)


    return (
        <div className={styles.container}>
            <label>Nature of Enquiry *<br /></label>

            <input 
                type='radio' 
                id='enquiry-oneWay' 
                name='enquiryNature' 
                value='One Way'
                onChange={e => setEnquiryNature(e.target.value)} 
                defaultChecked={true}
            />
            <label htmlFor='enquiry-oneWay'>One Way</label>

            <input 
                type='radio' 
                id='enquiry-return' 
                name='enquiryNature' 
                value='Return' 
                onChange={e => setEnquiryNature(e.target.value)} 
            />
            <label htmlFor='enquiry-return'>Return</label>

            <div className={styles.inputsGrid}>
                <div className={styles.inputContainer}>
                    <label>Pickup Point (Please provide full address and postcode) *</label>
                    <input 
                        type='text'
                        id='enquiry-pickupPoint'
                        onChange={e => setPickup(e.target.value)}
                    />
                </div>

                <div className={styles.inputContainer}>
                    <label>Drop off point or destination *</label>
                    <input 
                        type='text'
                        id='enquiry-dropoffPoint'
                        onChange={e => setDestination(e.target.value)}
                    />
                </div>

                <div className={styles.inputContainer}>
                    <label>Departure Date *</label>
                    <input 
                        type='date'
                        id='enquiry-departureDate'
                        onChange={e => setDepartureDate(e.target.value)}
                    />
                </div>

                <div className={styles.inputContainer}>
                    <label>Departure Time *</label>
                    <input 
                        type='time'
                        id='enquiry-departureTime'
                        onChange={e => setDepartureTime(e.target.value)}
                    />
                </div>

                <div className={styles.inputContainer}>
                    <label>Return Date *</label>
                    <input 
                        type='date'
                        id='enquiry-returnDate'
                        onChange={e => setReturnDate(e.target.value)}
                        disabled={enquiryNature === 'One Way'}
                    />
                </div>

                <div className={styles.inputContainer}>
                    <label>Return Time *</label>
                    <input 
                        type='time'
                        id='enquiry-returnTime'
                        onChange={e => setReturnTime(e.target.value)}
                        disabled={enquiryNature === 'One Way'}
                    />
                </div>

                <div className={styles.inputContainer} style={{gridColumn: '1/-1'}}>
                    <label>Name *</label>
                    <input 
                        type='text'
                        id='enquiry-name'
                        onChange={e => setName(e.target.value)}
                    />
                </div>

                <div className={styles.inputContainer}>
                    <label>Email</label>
                    <input 
                        type='email'
                        id='enquiry-email'
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className={styles.inputContainer}>
                    <label>Phone Number *</label>
                    <input 
                        type='tel'
                        id='enquiry-phone'
                        onChange={e => setPhone(e.target.value)}
                    />
                </div>

                <div className={styles.inputContainer}>
                    <label>Number of Passengers *</label>
                    <input 
                        type='number'
                        id='enquiry-passengers'
                        onChange={e => setNumberOfPassengers(parseInt( e.target.value) ) }
                    />
                </div>

                <div className={styles.inputContainer}>
                    <label>Luggage *</label>
                    <input 
                        type='number'
                        id='enquiry-luggage'
                        onChange={e => setLuggage(parseInt(e.target.value))}
                    />
                </div>

                <div className={styles.inputContainer}>
                    <label>Reason for trip *</label>
                    <select
                        id='enquiry-reason'
                        onChange={e => setReason(e.target.value)}
                    >
                        <option value=''></option>
                        <option value='Airport'>Airport</option>
                        <option value='Business'>Business/Corporate</option>
                        <option value='Day Trip'>Day Trip</option>
                        <option value='Wedding'>Wedding</option>
                        <option value='Funeral'>Funeral</option>
                        <option value='Stag Do'>Stag Do</option>
                        <option value='Hen Do'>Hen Do</option>
                        <option value='Night Out'>Night Out</option>
                        <option value='Festival'>Festival</option>
                        <option value='Football'>Footbaal</option>
                        <option value='Other Sport Event'>Other Sport Event</option>
                        <option value='Theme Park'>Theme Park</option>
                        <option value='Educational'>Educational</option>
                        <option value='Charity'>Charity</option>
                        <option value='Other'>Other</option>
                    </select>
                </div>  

                <div className={styles.inputContainer}>
                    <label>How did you hear about us?</label>
                    <select
                        id='enquiry-hearing'
                        onChange={e => setHeard(e.target.value)}
                    >
                        <option value=''></option>
                        <option value='Bing'>Bing</option>
                        <option value='Facebook'>Facebook</option>
                        <option value='Friend/Relative'>Friend/Relative</option>
                        <option value='Google'>Google</option>
                        <option value='Other Search Engine'>Other Search Engine</option>
                        <option value='Returning Customer'>Returning Customer</option>
                        <option value='Twitter'>Twitter</option>
                        <option value='Other'>Other</option>
                    </select>
                </div>  
            </div>
            <input 
                type='checkbox'
                id='enquiry-terms'
                onChange={e => setTermsAccepted(prevValue => !prevValue)}
            />
            <label
                htmlFor='enquiry-terms'
                style={{marginLeft: '5px'}}
            >
                I have read and agree to the BHXTravel <span className='redText'>booking terms and conditions.</span>
            </label>

            <div className={styles.formWarning}>
                <p>Please check the form for errors before submitting your enquiry</p>
            </div>

            <button 
                type='submit' 
                className={termsAccepted ? styles.submitButton : [styles.submitButton, styles.disabled].join(' ')}
            >
                Submit Enquiry
            </button>
        </div>
    )
}

export default EnquiryForm