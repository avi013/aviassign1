const initialState = [
  'Strawberry', 
  'Blueberry', 
  'Orange', 
  'Banana', 
  'Apple', 
  'Carrot', 
  'Celery', 
  'Mushroom', 
  'Bread', 
  'Pasta', 
  'Rice', 
  'Fish', 
  'Pork'
];


const groceryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_GROCERY_LIST':
      return state;

    default:
      return state
  }
}

export default groceryReducer;