import React, { useState } from 'react';
import GoogleMap from '../components/map.jsx';
import DestinationPickList from '../components/destinationPickList.jsx';
import NavBar from '../components/NavBar.jsx';
import './MapPage.css';

const MapPage = () => {
  const [destination, setDestination] = useState('');

  const updateDestination = (address) => {
    setDestination(address);
    console.log(`the value of destination is now set to ${address}`);
  };

  return (
    <div className="map-page">
      <NavBar />
      <DestinationPickList updateDestination={updateDestination} />
      <GoogleMap
        destination={destination}
        hardcodeStartAddress={true}
        startAddress={'1530 E 19th St Brooklyn NY 11230'}
      />
    </div>
  );
};

export default MapPage;