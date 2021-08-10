import { combineReducers } from 'redux';
import formReducer from './form.reducer';
import shpimentReducer from './shipment.reducer.';
export default combineReducers({
	shipment: shpimentReducer,
	form: formReducer,
});
