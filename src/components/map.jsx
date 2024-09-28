import React, { useEffect, useState } from 'react';
import { APIProvider, Map, AdvancedMarker, Marker, Pin, useMapsLibrary, useMap } from '@vis.gl/react-google-maps';

const googleMapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#484848"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8b8686"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#1a1a1a"
      }
    ]
  }
];

const apiKey = import.meta.env.VITE_apiKey;

const GoogleMap = (props) => {

  function Directions(props) {
    console.log(`at this point origin is ${JSON.stringify(props.origin)}`)
    console.log(`at this point destination is ${JSON.stringify(props.destination)}`)
    if ((props.origin.split('').indexOf(' ') == -1) || (props.destination.split('').indexOf(' ') == -1)) {
      console.log('origin or destination not defined')
      return (<></>)
    }

    const map = useMap();
    const routesLibrary = useMapsLibrary('routes');
    const [directionsService, setDirectionsService] = useState();
    const [directionsRenderer, setDirectionsRenderer] = useState();
    const [routes, setRoutes] = useState([]);
    const [routeIndex, setRouteIndex] = useState(0);
    const selected = routes[routeIndex];
    const leg = selected?.legs[0];

    // Initialize directions service and renderer
    useEffect(() => {
      if (!routesLibrary || !map) return;
      setDirectionsService(new routesLibrary.DirectionsService());
      setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }));
    }, [routesLibrary, map]);

    // Use directions service
    useEffect(() => {
      if (!directionsService || !directionsRenderer) return;

      directionsService
        .route({
          origin: props.origin,
          destination: props.destination,
          travelMode: google.maps.TravelMode.WALKING,
          provideRouteAlternatives: true
        })
        .then(response => {
          directionsRenderer.setDirections(response);
          setRoutes(response.routes);
        });

      return () => directionsRenderer.setMap(null);
    }, [directionsService, directionsRenderer, props.origin, props.destination]);

    // Update direction route
    useEffect(() => {
      if (!directionsRenderer) return;
      directionsRenderer.setRouteIndex(routeIndex);
    }, [routeIndex, directionsRenderer]);

    if (!leg) return null;

    return (
      <div className="directions">
        <h2>{selected.summary}</h2>
        <p>
          {leg.start_address.split(',')[0]} to {leg.end_address.split(',')[0]}
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

  const [userLocation, setUserLocation] = useState({ "lat": 0, "long": 0 })

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    const crd = pos.coords;
    console.log(`Your current position is: Latitude : ${crd.latitude} Longitude: ${crd.longitude} More or less ${crd.accuracy} meters.`)
    setUserLocation({ "lat": crd.latitude, "long": crd.longitude })
  }

  function errors(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  function getUserLocation() {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          console.log(result);
          if (result.state === "granted") {
            //If granted then you can directly call your function here
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === "prompt") {
            //If prompt then the user will be asked to give permission
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === "denied") {
            console.log('unable to get location data')
          }
        });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  useEffect(() => {
    getUserLocation()
  }, [])

  const getAddress = async (userLocation) => {
    if (props.hardcodeStartAddress === true) {
      console.log('using hardcoded start address')
      setSourceAddress(props.startAddress)
    } else {
      const URL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${userLocation.lat},${userLocation.long}&key=${apiKey}`
      const request = await fetch(URL)
      const response = await request.json()
      console.log(response.results)
    }
  }

  console.log(`the userLocation is ${JSON.stringify(userLocation)}`)
  const [sourceAddress, setSourceAddress] = useState("")
  useEffect(() => {
    if (props.hardcodeStartAddress === true) {
      console.log('using hardcoded start address');
      setSourceAddress(props.startAddress);
    } else {
      getAddress(userLocation);
    }
  }, [userLocation, props.hardcodeStartAddress, props.startAddress]);

  return (
    <div className="googlemap-container"> Map
      <p>The origin is {sourceAddress}.</p>
      <p>The destination is {props.destination}</p>
      <APIProvider apiKey={apiKey} onLoad={() => console.log('Maps API has loaded')}>
        <Map
          className='googlemap'
          defaultZoom={13}
          defaultCenter={{ lat: userLocation.lat, lng: userLocation.long }}
          options={{
            styles: googleMapStyle,
            mapTypeId: 'satellite'
          }}
        >
          <Marker
            position={{ lat: userLocation.lat, lng: userLocation.long }}
            title={'Marker'}
          >
          </Marker>
          <Directions origin={sourceAddress} destination={props.destination} baseBackendURL={props.baseBackendURL} />
        </Map>
      </APIProvider>
    </div>
  );
};

export default GoogleMap