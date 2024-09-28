import { useState, useEffect } from "react";

const DestinationPickList = (props) => {
    const [destinations, setDestinations] = useState([])

    const getDestinations = async() => {
        const URL = `${props.baseBackendURL}/locations`
        const response = await fetch(URL, {
            method: 'GET',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            }
        })
        console.log(response)
        const data = await response.json()
        setDestinations(data['data'])
    }
    
    useEffect(() => {
        getDestinations()
        try {props.updateDestination(destinations[0].address)}
        catch {}
    }, [])
    
    const [isOpen, setIsOpen] = useState(false);

    function handleDestinationClick(address) {
        return function () {
            props.updateDestination(address);
            setIsOpen(false);
        };
    }

    const destinationsMap = destinations.map((Destination) => (
        <div key={Destination._id}>
            <button value={Destination.address} onClick={handleDestinationClick(Destination.address)}>
                {Destination.address}
            </button>
        </div>
    ));

    return (
        <div className={`destination-pick-list ${isOpen ? 'open' : ''}`}>
            <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Pick a Destination ↑' : 'Pick a Destination ↓'}
            </button>
            {isOpen && (
                <div className="destination-list">
                    <p>EMERGENCY SUPPORT DESTINATIONS</p>
                    {destinationsMap}
                </div>
            )}
        </div>
    );
};

export default DestinationPickList