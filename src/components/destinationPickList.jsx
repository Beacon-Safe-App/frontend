import { useState, useEffect } from "react";
import Destinations from "./Destinations.jsx";

const DestinationPickList = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    function handleDestinationClick(address) {
        return function () {
            props.updateDestination(address);
            setIsOpen(false);
        };
    }

    const destinationsMap = Destinations.map((Destination) => (
        <div key={Destination._id}>
            <button value={Destination.address} onClick={handleDestinationClick(Destination.address)}>
                {Destination.address}
            </button>
        </div>
    ));

    useEffect(() => {
        props.updateDestination(Destinations[0].address);
    }, []);

    return (
        <div className={`destination-pick-list ${isOpen ? 'open' : ''}`}>
            <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? '↑' : '↓'}
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