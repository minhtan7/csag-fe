import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/form.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Hompage from './pages/Homepage/Hompage';
import ShipperPage from './pages/ShipperPage';
import PublicNav from './components/PublicNav/PublicNav';
import BlogPage from './pages/BlogPage/BlogPage';
import ShipperProfilePage from './pages/ShipperProfilePage';
import { useDispatch } from 'react-redux';
import { authActions } from './redux/actions/auth.actions';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		const accessToken = localStorage.getItem('accessToken');

		if (accessToken && accessToken !== 'undefined') {
			dispatch(authActions.getCurrentUser(accessToken));
		} else {
			dispatch(authActions.logout());
		}
	}, [dispatch]);
	return (
		<Router>
			<PublicNav />
			<Switch>
				<Route exact path="/" component={Hompage} />
				<Route path="/shipper" component={ShipperPage} />
				<Route path="/blogpage" component={BlogPage} />
				<Route path="/shippershipments" component={ShipperProfilePage} />
			</Switch>
		</Router>
	);
}

export default App;
