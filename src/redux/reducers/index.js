import { combineReducers } from 'redux';
import blogReducer from './blogs.reducer';
import orderReducer from './order.reducer';
import formReducer from './form.reducer';
import userReducer from './user.reducer';
import routeReducer from './route.reducer';
import authReducer from './auth.reducer';
import mapReducers from './map.reducer';

export default combineReducers({
	blogReducer: blogReducer,
	order: orderReducer,
	form: formReducer,
	user: userReducer,
	route: routeReducer,
	auth: authReducer,
	map: mapReducers,
});
