import React, { useEffect, useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Marker,
  Pin,
  useMapsLibrary,
  useMap,
} from "@vis.gl/react-google-maps";

const googleMapStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#212121",
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#212121",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#212121",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#484848",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#8b8686",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#1a1a1a",
      },
    ],
  },
];

const apiKey = import.meta.env.VITE_apiKey;

const GoogleMap = (props) => {
  function Directions(props) {
    if (
      props.origin.split("").indexOf(" ") == -1 ||
      props.destination.split("").indexOf(" ") == -1
    ) {
      return <></>;
    }

    const map = useMap();
    const routesLibrary = useMapsLibrary("routes");
    const [directionsService, setDirectionsService] = useState();
    const [directionsRenderer, setDirectionsRenderer] = useState();
    const [routes, setRoutes] = useState([]);
    const [routeIndex, setRouteIndex] = useState(0);
    const selected = routes[routeIndex];
    const leg = selected?.legs[0];

    useEffect(() => {
      if (!routesLibrary || !map) return;
      setDirectionsService(new routesLibrary.DirectionsService());
      setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }));
    }, [routesLibrary, map]);

    useEffect(() => {
      if (!directionsService || !directionsRenderer) return;

      directionsService
        .route({
          origin: props.origin,
          destination: props.destination,
          travelMode: google.maps.TravelMode.WALKING,
          provideRouteAlternatives: true,
        })
        .then((response) => {
          directionsRenderer.setDirections(response);
          setRoutes(response.routes);
        });

      return () => directionsRenderer.setMap(null);
    }, [
      directionsService,
      directionsRenderer,
      props.origin,
      props.destination,
    ]);

    useEffect(() => {
      if (!directionsRenderer) return;
      directionsRenderer.setRouteIndex(routeIndex);
    }, [routeIndex, directionsRenderer]);

    if (!leg) return null;

    return (
      <div className="directions">
        <h2>{selected.summary}</h2>
        <p>
          {leg.start_address.split(",")[0]} to {leg.end_address.split(",")[0]}
        </p>
        <p>Distance: {leg.distance?.text}</p>
        <p>Duration: {leg.duration?.text}</p>

        <h2>Other Routes</h2>
        <ul>
          {routes.map((route, index) => (
            <li key={route.summary}>
              <button onClick={() => setRouteIndex(index)}>
                {route.summary}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  const [userLocation, setUserLocation] = useState({ lat: 0, long: 0 });
  const [isLocationLoaded, setLocationLoaded] = useState(false);

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    const crd = pos.coords;
    setUserLocation({ lat: crd.latitude, long: crd.longitude });
    setLocationLoaded(true);
  }

  function errors(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  function getUserLocation() {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === "prompt") {
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === "denied") {
          }
        });
    } else {
    }
  }

  useEffect(() => {
    getUserLocation();
  }, [props.hardcodeStartAddress, props.startAddress]);

  const getAddress = async (userLocation) => {
    if (props.hardcodeStartAddress === true) {
      setSourceAddress(props.startAddress);
    } else {
      const URL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${userLocation.lat},${userLocation.long}&key=${apiKey}`;
      const request = await fetch(URL);
      const response = await request.json();
      setSourceAddress(response.results[0]["formatted_address"]);
    }
  };
  const [sourceAddress, setSourceAddress] = useState("");
  useEffect(() => {
    if (props.hardcodeStartAddress === true) {
      setSourceAddress(props.startAddress);
    } else {
      getAddress(userLocation);
    }
  }, [userLocation, props.hardcodeStartAddress, props.startAddress]);

  const returnUserLocationMarker = () => {
    // console.log('rendering user location marker')
    return (
      <Marker
        position={{ lat: userLocation.lat, lng: userLocation.long }}
        title={"Your location"}
      ></Marker>
    );
  };

  const returnMapWithDirections = () => {
    return (
      <div className="googlemap-container">
        <APIProvider apiKey={apiKey}>
          <Map
            className="googlemap"
            defaultZoom={13}
            defaultCenter={{ lat: userLocation.lat, lng: userLocation.long }}
            options={{
              styles: googleMapStyle,
              mapTypeId: "satellite",
            }}
          >
            {returnUserLocationMarker()}
            <Directions
              origin={sourceAddress}
              destination={props.destination}
              baseBackendURL={props.baseBackendURL}
            />
          </Map>
        </APIProvider>
      </div>
    );
  };

  const returnMap = () => {
    return (
      <div className="googlemap-container">
        <APIProvider apiKey={apiKey}>
          <Map
            className="googlemap"
            defaultZoom={16}
            defaultCenter={{ lat: userLocation.lat, lng: userLocation.long }}
            options={{
              styles: googleMapStyle,
              mapTypeId: "satellite",
            }}
          >
            {returnUserLocationMarker()}
          </Map>
        </APIProvider>
      </div>
    );
  };

  if (isLocationLoaded === true) {
    if (props.destination !== "") {
      return returnMapWithDirections();
    } else {
      return returnMap();
    }
  } else {
    return <h1>"Loading..."</h1>;
  }
};

export default GoogleMap;
