import { combineReducers } from "redux";
import orderReducer from "./order.reducer";
export default combineReducers({
  order: orderReducer,
});
