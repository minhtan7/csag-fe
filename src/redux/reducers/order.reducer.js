import * as types from "../constants/order.constants";

const initialState = {
  orders: [],
  totalPageNum: 1,
  selectedOrder: [],
  loading: false,
};

const orderReducers = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_ORDERS_REQUEST:
      return { ...state, loading: true };
    case types.GET_ORDERS_SHIPPER_REQUEST:
      return { ...state, loading: true };

    case types.GET_ORDERS_SUCCESS:
      return {
        ...state,
        orders: payload,
        totalPageNum: payload.totalPages,
        loading: false,
      };
    case types.GET_ORDERS_SHIPPER_SUCCESS:
      return {
        ...state,
        selectedOrder: payload,
        loading: false,
      };

    case types.GET_ORDERS_FAILURE:
    case types.CREATE_ORDER_FAILURE:
      return { ...state, loading: false };
    case types.GET_ORDERS_SHIPPER_FAILURE:
      return {...state, loading: false };
    default:
      return state;
  }
};
export default orderReducers;
