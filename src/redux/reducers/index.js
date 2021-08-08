import { combineReducers } from "redux";
import shpimentReducer from "./shipment.reducer.";
export default combineReducers({
  shipment: shpimentReducer,
});
