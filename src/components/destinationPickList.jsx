import { useEffect } from "react"
import destinations from "./destinations"

const destinationPickList = (props) => {

    function handleDestinationClick(address) {
        return function () {
            props.updateDestination(address)
        }
    }

    const destinationsMap = destinations.map((destination) => (
        <div key={destination._id}>
            <button value={destination.address} onClick={handleDestinationClick(destination.address)}>{destination.address}</button>
        </div>
    ))

    useEffect(() => {
        props.updateDestination(destinations[0].address)
    }, [])

    return (
        <div className="destination-pick-list">
            <p>Destination Pick List</p>
            {destinationsMap}
        </div>
    );
};

export default destinationPickList