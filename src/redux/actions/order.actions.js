import * as types from "../constants/order.constants";
import api from "../api";
import { toast } from "react-toastify";

const orderRequest = ({
  pageNum = 1,
  limit = 10,
  query = null,
  sortBy = null,
}) => async (dispatch) => {
  dispatch({ type: types.GET_ORDERS_REQUEST, payload: null });
  try {
    let queryString = "";
    console.log(pageNum, limit, query);
    if (query) {
      queryString = `&statusOrder[$regex]=${query}&statusOrder[$options]=i`;
    }

    let sortByString = "";
    if (sortBy?.key) {
      sortByString = `&sortBy[${sortBy.key}]=${sortBy.ascending}`;
    }

    const res = await api.get(
      `/orders?page=${pageNum}&limit=${limit}${queryString}${sortByString}`
    );

    dispatch({
      type: types.GET_ORDERS_SUCCESS,
      payload: res.data.data.orders,
    });
  } catch (err) {
    console.log(err);
    dispatch({ type: types.GET_ORDERS_FAILURE, payload: err });
  }
};

const orderShipper = () => async (dispatch) => {
  dispatch({ type: types.GET_ORDERS_SHIPPER_REQUEST, payload: null });
  try {
    let url = process.env.REACT_APP_URL + `/api/orders/shipper/61123b98cd9bdb5d500de20f`
    let res = await api.get(url)
    const data = res.data.data.orders
    console.log(data)

    dispatch({
      type: types.GET_ORDERS_SHIPPER_SUCCESS,
      payload: data,
    });
  } catch (err) {
    console.log(err);
    dispatch({ type: types.GET_ORDERS_SHIPPER_FAILURE, payload: err });
  }
};

export const ordersActions = { orderRequest, orderShipper };
