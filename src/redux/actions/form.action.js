import * as types from '../constants/form.constants';
import api from '../api';
import { toast } from 'react-toastify';

const addItem = (item) => async (dispatch) => {
	dispatch({ type: types.ADD_ITEM, payload: null });
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

export const formActions = { addItem, changePage, changeSubpage };
