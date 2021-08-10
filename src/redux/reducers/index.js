import { combineReducers } from "redux";

import orderReducer from "./order.reducer";
import blogReducer from "./blogs.reducer";

export default combineReducers({
  blogReducer: blogReducer,
  order: orderReducer,
});
