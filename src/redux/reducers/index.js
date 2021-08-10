import { combineReducers } from "redux";
import blogReducer from "./blogs.reducer";
import orderReducer from "./order.reducer";
import userReducer from "./user.reducer";
export default combineReducers({
  blogReducer: blogReducer,
  order: orderReducer,
  user: userReducer,
});
