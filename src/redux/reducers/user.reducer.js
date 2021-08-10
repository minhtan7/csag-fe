import * as types from "../constants/user.constants";

const initialState = {
  users: [],
  loading: false,
};

const userReducers = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_ALL_USER_REQUEST:
      return { ...state, loading: true };

    case types.GET_ALL_USER_SUCCESS:
      return {
        ...state,
        users: payload,
        loading: false,
      };

    case types.GET_ALL_USER_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};
export default userReducers;
