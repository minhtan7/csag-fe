import * as types from '../constants/shipment.constants';
import api from '../api';
import { toast } from 'react-toastify';

const shipmentsRequest =
	(pageNum = 1, limit = 2, query = null, sortBy = null) =>
	async (dispatch) => {
		dispatch({ type: types.GET_SHIPMENTS_REQUEST, payload: null });
		try {
			let queryString = '';
			if (query) {
				queryString = `&title[$regex]=${query}&title[$options]=i`;
			}
			let sortByString = '';
			if (sortBy?.key) {
				sortByString = `&sortBy[${sortBy.key}]=${sortBy.ascending}`;
			}
			const res = await api.get(`/shipments?page=${pageNum}&limit=${limit}${queryString}${sortByString}`);

			console.log('Shipments???', res);
			dispatch({ type: types.GET_SHIPMENTS_SUCCESS, payload: res.data.data });
		} catch (err) {
			console.log(err);
			dispatch({ type: types.GET_SHIPMENTS_FAILURE, payload: err });
		}
	};

const createShipment = (title, content) => async (dispatch) => {
	dispatch({ type: types.CREATE_SHIPMENT_REQUEST, payload: null });
	try {
		const res = await api.post('/shipments', {
			title,
			content,
		});

		dispatch({
			type: types.CREATE_SHIPMENT_SUCCESS,
			payload: res.data.data,
		});

		toast.success('New shipments has been created!');
	} catch (err) {
		dispatch({ type: types.CREATE_SHIPMENT_FAILURE, payload: err });
	}
};

const getShipperShipments = (shipperId, status) => async (dispatch) => {
	dispatch({ type: types.GET_SHIPPER_SHIPMENTS_REQUEST, payload: null });
	try {
		const res = await api.get('/shippershipments', {
			shipperId,
			status,
		});

		dispatch({
			type: types.GET_SHIPPER_SHIPMENTS_SUCCESS,
			payload: res.data.data,
		});
	} catch (err) {
		dispatch({ type: types.CREATE_SHIPMENT_FAILURE, payload: err });
	}
};

export const shipmentActions = { shipmentsRequest, createShipment, getShipperShipments };
