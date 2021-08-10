<<<<<<< HEAD
import { DistanceMatrixService, GoogleMap, LoadScript, Marker, MarkerClusterer } from '@react-google-maps/api';
import React, { useEffect, useState } from 'react';
import Geocode from 'react-geocode';
import { Button, Form } from 'react-bootstrap';
import './style.css';
import { useDispatch } from 'react-redux';
import { mapActions } from '../../redux/actions/map.actions';

const Map = ({ users, setShow }) => {
	const dispatch = useDispatch();
	const [formData, setFormData] = useState({ address: '', content: '' });
	const [geocode, setGeocode] = useState({
		lat: 10.77788992345464,
		lng: 106.69517319605292,
	});

	useEffect(() => {
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(function (position) {
				// console.log('Latitude is :', position.coords.latitude);
				setGeocode({ ...geocode, lat: position.coords.latitude });
				// console.log('Longitude is :', position.coords.longitude);
				setGeocode({ ...geocode, lng: position.coords.longitude });
			});
		}
	}, []);

	const REACT_APP_GOOGLE_API = process.env.REACT_APP_GOOGLE_API;
	// console.log(REACT_APP_GOOGLE_API);
	const containerStyle = {
		width: '100%',
		height: '100%',
	};

	const onLoad = (marker) => {
		console.log('marker: ', marker);
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
	const showUserModal = (user) => {
		dispatch(mapActions.selectMarker(user));
		setShow(true);
	};
	const handleOnChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const fetchgeocode = await Geocode.fromAddress(formData.address).then(
			(response) => {
				const { lat, lng } = response.results[0].geometry.location;
				return { lat, lng };
			},
			(error) => {
				console.error(error);
			}
		);
		setGeocode(fetchgeocode);
	};

	// const givers = users?.filter((user)=>user.role === 'giver')

	const locations = users?.map((user) => user.geocode);

	const options = {
		imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m', // so you must have m1.png, m2.png, m3.png, m4.png, m5.png and m6.png in that folder
	};

	function createKey(location) {
		return location.lat + location.lng;
	}
	// console.log(locations);
	return (
		/* <Form onSubmit={handleSubmit}>
=======
import {
  DistanceMatrixService,
  GoogleMap,
  LoadScript,
  Marker,
  MarkerClusterer,
} from "@react-google-maps/api";
import React, { useEffect, useState } from "react";
import Geocode from "react-geocode";

import "./style.css";

const Map = ({ users }) => {
  const [geocode, setGeocode] = useState({
    lat: 10.77788992345464,
    lng: 106.69517319605292,
  });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log("Latitude is :", position.coords.latitude);
        setGeocode({ ...geocode, lat: position.coords.latitude });
        console.log("Longitude is :", position.coords.longitude);
        setGeocode({ ...geocode, lng: position.coords.longitude });
      });
    }
  }, []);

  const REACT_APP_GOOGLE_API = process.env.REACT_APP_GOOGLE_API;
  console.log(REACT_APP_GOOGLE_API);
  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const onLoad = (marker) => {
    console.log("marker: ", marker);
  };

  // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
  Geocode.setApiKey(REACT_APP_GOOGLE_API);

  // set response language. Defaults to english.
  Geocode.setLanguage("vi");

  // set response region. Its optional.
  // A Geocoding request with region=es (Spain) will return the Spanish city.
  Geocode.setRegion("vi");

  // set location_type filter . Its optional.
  // google geocoder returns more that one address for given lat/lng.
  // In some case we need one address as response for which google itself provides a location_type filter.
  // So we can easily parse the result for fetching address components
  // ROOFTOP, RANGE_INTERPOLATED, GEOMETRIC_CENTER, APPROXIMATE are the accepted values.
  // And according to the below google docs in description, ROOFTOP param returns the most accurate result.
  Geocode.setLocationType("ROOFTOP");

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

  // const givers = users?.filter((user)=>user.role === 'giver')

  const locations = users?.map((user) => user.geocode);

  const options = {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m", // so you must have m1.png, m2.png, m3.png, m4.png, m5.png and m6.png in that folder
  };

  function createKey(location) {
    return location.lat + location.lng;
  }
  console.log(locations);
  return (
    /* <Form onSubmit={handleSubmit}>
>>>>>>> e3ce03a4f014512e9d6aaf23bd7db94c3c1b66b9
            <Form.Group className="mb-3" controlId="formAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" name="address" placeholder="Enter address" onChange={handleOnChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formLocation">
                <Form.Label>Location info</Form.Label>
                <Form.Control type="text" name="content" placeholder="Enter location info" onChange={handleOnChange} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form> */
		<LoadScript googleMapsApiKey={REACT_APP_GOOGLE_API}>
			<GoogleMap mapContainerStyle={containerStyle} center={geocode} zoom={16}>
				<Marker onLoad={onLoad} position={{ ...geocode }} />

				{/* {users?.map((user) => {
          return (
            <Marker
            icon="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
            onLoad={onLoad}
            position={{ lat: user.geocode.lng, lng: user.geocode.lat }}

            />
          );
        })} */}

				<MarkerClusterer gridSize={150} options={options} averageCenter={true}>
					{(clusterer) =>
						// givers?.map((giver)=> {
						//   <Marker key={createKey(giver.geocode)} icon="https://toppng.com/uploads/preview/oogle-maps-orange-marker-11563035292hvdwagasje.png" position={{lat: giver.geocode.lng, lng: giver.geocode.lat}} clusterer={clusterer} />
						// })

						users?.map((user) => {
							if (user.role === 'giver')
								return (
									<Marker
										onClick={() => showUserModal(user)}
										key={createKey(user.geocode)}
										position={{ lat: user.geocode.lng, lng: user.geocode.lat }}
										icon="https://res.cloudinary.com/wotv/image/upload/v1628629572/logo-receiver_uzfhf3_hswe0x.png"
										clusterer={clusterer}
									/>
								);
							if (user.role === 'recipient')
								return (
									<Marker
										onClick={() => showUserModal(user)}
										key={createKey(user.geocode)}
										position={{ lat: user.geocode.lng, lng: user.geocode.lat }}
										icon="https://res.cloudinary.com/wotv/image/upload/v1628629651/logo-giver-7_ffly1f_atdi1i.png"
										clusterer={clusterer}
									/>
								);
							else return null;
						})
					}
				</MarkerClusterer>
				<DistanceMatrixService
					options={{
						destinations: [{ lat: 10.80721641690156, lng: 106.68184289556997 }],
						origins: [{ lat: 10.77788992345464, lng: 106.69517319605292 }],
						travelMode: 'DRIVING',
					}}
					callback={(res) => {
						console.log('RESPONSE', res);
						// this.setState({
						//   totalTime: res.rows[0].elements[0].duration.text,
						//   totalDistance: res.rows[0].elements[0].distance.text,
						// });
					}}
				/>
			</GoogleMap>
		</LoadScript>
	);
};

export default Map;
