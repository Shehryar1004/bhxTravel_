import styles from './style.module.css'
import vanImage from '../../assets/vans2.webp'
import services from './services'


type ServiceCardProps = {
    image: string,
    heading: string,
    tagline: string,
    text: string,
    id: string,
}
function ServiceCard({image, heading, tagline, text, id}: ServiceCardProps) {
    return(
        <div className={styles.service} id={id}>
            <div>
                <img src={image} alt={tagline}/>
            </div>

            <div>
                <h3>{heading}</h3>
                <h2>{tagline}</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}

function ServicesPage() {
    return(
        <div className={styles.page}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <div>
                        <img src={vanImage} alt='a black minivan'/>
                    </div>
                    <div>
                        <h2>Services</h2>
                        <p>Our commitment to customer service and satisfaction means whatever your requirements we’ll endeavour to make your journey as safe, comfortable and most of all as enjoyable as can be possible.</p>
                    </div>
                </div>

                <div className={styles.servicesList}>
                    {services.map(service => (
                        <ServiceCard 
                            heading={service.heading}
                            image={service.image}
                            tagline={service.tagline}
                            text={service.text}
                            id={service.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ServicesPage