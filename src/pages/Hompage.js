import React, { useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Geocode from 'react-geocode';
import { Form } from 'react-bootstrap';
import { geolocated } from 'react-geolocated';
import { DistanceMatrixService } from '@react-google-maps/api';

const REACT_APP_GOOGLE_API = process.env.REACT_APP_GOOGLE_API;
const containerStyle = {
	width: '50vh',
	height: '50vw',
};

const center = {
	lat: -3.745,
	lng: -38.523,
};

const onLoad = (marker) => {
	// console.log('marker: ', marker);
};

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey(REACT_APP_GOOGLE_API);

// set response language. Defaults to english.
Geocode.setLanguage('vi');

// set response region. Its optional.
// A Geocoding request with region=es (Spain) will return the Spanish city.
Geocode.setRegion('vi');

// set location_type filter . Its optional.
// google geocoder returns more that one address for given lat/lng.
// In some case we need one address as response for which google itself provides a location_type filter.
// So we can easily parse the result for fetching address components
// ROOFTOP, RANGE_INTERPOLATED, GEOMETRIC_CENTER, APPROXIMATE are the accepted values.
// And according to the below google docs in description, ROOFTOP param returns the most accurate result.
Geocode.setLocationType('ROOFTOP');

// Enable or disable logs. Its optional.
Geocode.enableDebug();

// Get latitude & longitude from address.
// Geocode.fromAddress("Eiffel Tower").then(
//   (response) => {
//     const { lat, lng } = response.results[0].geometry.location;
//     console.log(lat, lng);
//   },
//   (error) => {
//     console.error(error);
//   }
// );

const Hompage = () => {
	useEffect(() => {
		navigator.geolocation.getCurrentPosition(function (position) {
			console.log('Latitude is :', position.coords.latitude);
			console.log('Longitude is :', position.coords.longitude);
		});
	}, []);
	console.log('haha');
	return (
		<>
			<Form>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Address</Form.Label>
					<Form.Control type="email" placeholder="Enter address" />
					<br></br>
					<Form.Label>Location info</Form.Label>
					<Form.Control type="email" placeholder="Enter location info" />
				</Form.Group>
			</Form>
			<LoadScript googleMapsApiKey={REACT_APP_GOOGLE_API}>
				<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
					<Marker onLoad={onLoad} position={center} />
				</GoogleMap>
			</LoadScript>
		</>
	);
};

export default Hompage;
