import styles from './style.module.css'
import Client1 from '../../assets/clients/Client1.webp'
import Client2 from '../../assets/clients/Client2.webp'
import Client3 from '../../assets/clients/Client3.webp'
import Client4 from '../../assets/clients/Client4.webp'
import Client5 from '../../assets/clients/Client5.webp'
import Client6 from '../../assets/clients/Client6.webp'
import Client7 from '../../assets/clients/Client7.webp'

function ClientsSection(){
    return (
        <div className={styles.clientContainer}>
            <h2>Clients We Worked With Include:</h2>
            <div className={styles.clientsGrid}>
                <div><img src={Client1} alt='The Carphone and Warehouse' /></div>
                <div><img src={Client2} alt='GE' /></div>
                <div><img src={Client3} alt='M' /></div>
                <div><img src={Client4} alt='Morrisons' /></div>
                <div><img src={Client5} alt='PMP Recruitment' /></div>
                <div><img src={Client6} alt='Staffline Recruitment Ltd' /></div>
                <div><img src={Client7} alt='TNT' /></div>
            </div>
        </div>
    )
}

export default ClientsSection