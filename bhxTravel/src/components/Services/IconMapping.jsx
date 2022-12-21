import WorldIcon from '../../assets/SVGs/WorldTripSvg.jsx'
import SportingEvents from '../../assets/SVGs/SportingEventSvg.jsx'
import NightsOut from '../../assets/SVGs/NightsOutSvg'
import AirportTransfer from '../../assets/SVGs/AirportTransferSvg'
import Contracts from '../../assets/SVGs/ContractsSvg'
import CorporateEvent from '../../assets/SVGs/CorporateEventSvg'
import HenStagParties from '../../assets/SVGs/HenStagPartiesSvg'
import MinibusTaxi from '../../assets/SVGs/MinibusTaxiSvg'


const iconMapping = [
    {
        name: 'dayTrips',
        icon: <WorldIcon fill="currentColor" width={56} height={56} />,
    },
    {
        name: 'airportTransfers',
        icon: <AirportTransfer fill="currentColor" width={56} height={56} />,
    },
    {
        name: 'contracts',
        icon: <Contracts fill="currentColor" width={56} height={56} />,
    },
    {
        name: 'nightsOut',
        icon: <NightsOut fill="currentColor" width={56} height={56} />,
    },
    {
        name: 'sportingEvent',
        icon: <SportingEvents fill="currentColor" width={56} height={56} />,
    },
    {
        name: 'corporateEvents',
        icon: <CorporateEvent fill="currentColor" width={56} height={56} />,
    },
    {
        name: 'henStagParties',
        icon: <HenStagParties fill="currentColor" width={56} height={56} />,
    },
    {
        name: 'minibusTaxi',
        icon: <MinibusTaxi fill="currentColor" width={56} height={56} />,
    }
]

export default iconMapping