import * as types from '../constants/user.constants';
import api from '../api';
import { toast } from 'react-toastify';
const getAllUsers =
	({ pageNum = 1, limit = 10, query = null, sortBy = null }) =>
	async (dispatch) => {
		dispatch({ type: types.GET_ALL_USER_REQUEST, payload: null });
		try {
			let queryString = '';
			// console.log(pageNum, limit, query);
			if (query) {
				queryString = `&statusOrder[$regex]=${query}&statusOrder[$options]=i`;
			}

			let sortByString = '';
			if (sortBy?.key) {
				sortByString = `&sortBy[${sortBy.key}]=${sortBy.ascending}`;
			}

			const res = await api.get(`/users?page=${pageNum}&limit=${limit}${queryString}${sortByString}`);

			dispatch({
				type: types.GET_ALL_USER_SUCCESS,
				payload: res.data.data.users,
			});
		} catch (err) {
			console.log(err);
			dispatch({ type: types.GET_ALL_USER_FAILURE, payload: err });
		}
	};

export const userActions = { getAllUsers };
