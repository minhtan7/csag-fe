
import { combineReducers } from "redux";

import orderReducer from "./order.reducer";
import blogReducer from './blogs.reducer'
import shpimentReducer from "./shipment.reducer.";
export default combineReducers({
  shipment: shpimentReducer,
  blogReducer: blogReducer,
  order: orderReducer,
});

