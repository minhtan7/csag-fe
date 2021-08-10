/* eslint-disable no-undef */
import * as types from '../constants/map.constants';
import api from '../api';
import { toast } from 'react-toastify';

const selectMarker = (item) => async (dispatch) => {
	dispatch({ type: types.SELECT_MARKER, payload: item });
};

const unselectMarker = (item) => async (dispatch) => {
	dispatch({ type: types.REMOVE_SELECTED_MARKER, payload: null });
};

const getSingleForm = (id) => async (dispatch) => {
	dispatch({ type: types.GET_SINGLE_FORM_REQUEST, payload: null });
	try {
		const res = await api.get('/form/user/' + id);
		dispatch({ type: types.GET_SINGLE_FORM_SUCCESS, payload: res.data.data.form });
	} catch (error) {
		dispatch({ type: types.GET_SINGLE_FORM_FAILURE, payload: error });
	}
};

export const mapActions = {
	selectMarker,
	unselectMarker,
	getSingleForm,
};
