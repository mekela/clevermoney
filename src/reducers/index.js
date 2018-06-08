import { combineReducers } from "redux";
import auth from './authReducer';
import cafes from './cafesReducer';
import categories from './categoriesReducer';
import costs from './costsReducer';

export default combineReducers({
	auth, cafes, categories, costs
});