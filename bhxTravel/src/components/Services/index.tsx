import { Link } from 'react-router-dom'
// import WorldIcon from '../../assets/worldIcon.svg'
import iconMapping from './IconMapping'
import styles from './style.module.css'
import services from './services'

type ServiceCardProps = {
    iconName: string,
    heading: string,
    text: string,
    hyperlink: string,
}
function ServiceCard({iconName, heading, text, hyperlink}: ServiceCardProps) {
    return(
        <Link to={hyperlink} className={styles.serviceCard}>
            <div className={styles.iconContainer}>
                {iconMapping.find(icon => icon.name == iconName)?.icon}
            </div>
            <h3>{heading}</h3>
            <p>{text}</p>
        </Link>
    )
}

function ServicesSection(){
    return (
        <div className={styles.servicesContainer}>
            <div className={styles.servicesContent}>
                <h2>Our Services</h2>
                <div className={styles.servicesCardsContainer}>
                    {
                        services.map(service => (
                        <ServiceCard 
                            heading={service.heading}
                            hyperlink={service.hyperlink}
                            iconName={service.iconName}
                            text={service.text}
                        />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ServicesSection