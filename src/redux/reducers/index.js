
import { combineReducers } from 'redux';
import blogReducer from './blogs.reducer';
import orderReducer from './order.reducer';
import formReducer from './form.reducer';
                               import userReducer from "./user.reducer";

export default combineReducers({
	blogReducer: blogReducer,
	order: orderReducer,
	form: formReducer,
    user: userReducer,

});
