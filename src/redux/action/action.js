import * as actionTypes from './actionType';

export const addGrocery = (groceryName) => {
	return {
		type: actionTypes.ADD_GROCERY,
		groceryName: groceryName
	}
};

export const removeGrocery = (groceryName) => {
	return {
		type: actionTypes.REMOVE_GROCERY,
		groceryName: groceryName
	}
};

export const getGroceryList = () => {
	return {
		type: actionTypes.GET_GROCERY_LIST
	}
};

export const removeAllBasketData = () => {
	return {
		type: actionTypes.REMOVE_ALL_GROCERY
	}
};