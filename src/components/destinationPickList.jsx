import destinations from "./destinations"

const destinationPickList = (props) => {

    function handleDestinationClick(destination) {
        props.setDestination(destination)
      }
    
    const destinationsMap = destinations.map((destination) => (
        <div key={destination._id}>
            <button value={destination.address} onClick={handleDestinationClick(destination.address)}>{destination.address}</button>
        </div>
    ))

    props.setDestination(destinations[0])

    return (
    <>
        <p>Destination Pick List</p>
        {destinationsMap}
    </>
    )
}

export default destinationPickList