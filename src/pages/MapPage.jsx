import React, { useState } from 'react';
import GoogleMap from '../components/Map.jsx';
import DestinationPickList from '../components/DestinationPickList.jsx';
import './css/MapPage.css';

const MapPage = () => {
    const [destination, setDestination] = useState('');

    const updateDestination = (address) => {
        setDestination(address);
        console.log(`the value of destination is now set to ${address}`);
    };

    return (
        <div className="map-page">
            <GoogleMap
                destination={destination}
                hardcodeStartAddress={true}
                startAddress={'1530 E 19th St Brooklyn NY 11230'}
                className="googlemap"
            />
            <DestinationPickList updateDestination={updateDestination} />
        </div>
    );
};

export default MapPage;