import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './css/form.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Hompage from './pages/Hompage';
import ShipperPage from './pages/ShipperPage';

function App() {
	useEffect(() => {
		window.addEventListener('resize', () => {
			// We execute the same script as before
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		});
	}, []);
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Hompage} />
				<Route path="/shipper" component={ShipperPage} />
			</Switch>
		</Router>
	);
}

export default App;
