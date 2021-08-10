import * as types from '../constants/map.constants';

const initialState = {
	selectedMarker: {},
	form: {},
	loading: false,
};

const mapReducers = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case types.GET_SINGLE_FORM_REQUEST:
			return { ...state, loading: true };
		case types.GET_SINGLE_FORM_SUCCESS:
			return { ...state, form: payload, loading: false };
		case types.GET_SINGLE_FORM_FAILURE:
			return { ...state, form: {}, loading: false };
		case types.SELECT_MARKER:
			return { ...state, selectedMarker: payload };
		case types.REMOVE_SELECTED_MARKER:
			return initialState;
		default:
			return state;
	}
};
export default mapReducers;
