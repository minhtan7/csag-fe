import * as types from '../constants/form.constants';
import api from '../api';
import { toast } from 'react-toastify';

const addItem = (item) => async (dispatch) => {
	dispatch({ type: types.ADD_ITEM, payload: item });
	dispatch({ type: types.CHANGE_PAGE, payload: 'index' });
	try {
		toast.success('New item added!');
	} catch (err) {
		// dispatch({ type: types.CREATE_form_FAILURE, payload: err });
	}
};

const changePage = (toPage) => async (dispatch) => {
	dispatch({ type: types.CHANGE_PAGE, payload: toPage });
};
const changeSubpage = (toPage) => async (dispatch) => {
	dispatch({ type: types.CHANGE_SUBPAGE, payload: toPage });
};

const matchingForm =
	({ id }) =>
	async (dispatch) => {
		try {
			const res = await api.get(`/form/matching/${id}`);
			const data = res.data.data.sortingReceiver;
			dispatch({ type: types.MATCHING_FORM, payload: data });
		} catch (err) {
			toast.error(err.message);
		}
	};

const getSingleForm =
	({ id }) =>
	async (dispatch) => {
		try {
			const res = await api.get(`/form/${id}`);
			const data = res.data.data.form;
			dispatch({ type: types.GET_RECEIVER, payload: data });
		} catch (err) {
			toast.error(err.message);
		}
	};

const createForm =
	({ deliveryMethod, items, toUserId }) =>
	async (dispatch) => {
		try {
			const res = await api.post(`/orders`, {
				body: {
					deliveryMethod,
					items,
					toUserId,
				},
			});
			const data = res.data.data.form;
			dispatch({ type: types.GET_RECEIVER, payload: data });
		} catch (err) {
			toast.error(err.message);
		}
	};

export const formActions = {
	addItem,
	changePage,
	changeSubpage,
	matchingForm,
	getSingleForm,
};
