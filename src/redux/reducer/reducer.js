import { combineReducers } from 'redux';
import groceryReducer from './grocery';
import basketReducer from './basket';

const allReducers = combineReducers({
	groceries: groceryReducer,
	basket: basketReducer	
});

export default  allReducers;