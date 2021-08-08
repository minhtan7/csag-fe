import * as types from "../constants/shipment.constants";

const initialState = {
  shipments: [],
  totalPageNum: 1,
  loading: false,
};

const shpimentReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_SHIPMENTS_REQUEST:
    case types.CREATE_SHIPMENT_REQUEST:
      return { ...state, loading: true };

    case types.CREATE_SHIPMENT_SUCCESS:
      return { ...state, loading: false };
    case types.GET_SHIPMENTS_SUCCESS:
      return {
        ...state,
        shipments: payload.blogs,
        totalPageNum: payload.totalPages,
        loading: false,
      };

    case types.GET_SHIPMENTS_FAILURE:
    case types.CREATE_SHIPMENT_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};
export default shpimentReducer;
