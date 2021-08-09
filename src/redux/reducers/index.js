import { combineReducers } from 'redux'
import blogReducer from './blogs.reducer'

export default combineReducers({
    blogReducer: blogReducer,
})