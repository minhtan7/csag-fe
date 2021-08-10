import { combineReducers } from "redux";
import blogReducer from "./blogs.reducer";
import shpimentReducer from "./shipment.reducer.";
export default combineReducers({
  shipment: shpimentReducer,
  blogReducer: blogReducer,
});
