import React, { useState } from "react";
import GoogleMap from "../components/map.jsx";
import DestinationPickList from "../components/destinationsPickList.jsx";
import "./css/MapPage.css";

const WorldView = (props) => {
  const [destination, setDestination] = useState("");

  const updateDestination = (address) => {
    setDestination(address);
  };

  return (
    <div className="map-page">
      <GoogleMap
        destination={destination}
        hardcodeStartAddress={true}
        startAddress={"1530 E 19th St Brooklyn NY 11230"}
        className="googlemap"
      />
      <DestinationPickList
        updateDestination={updateDestination}
        baseBackendURL={props.baseBackendURL}
      />
    </div>
  );
};

export default WorldView;
