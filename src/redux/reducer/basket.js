const initialState = {
  basket: {
    Strawberry: 0,
    Blueberry: 0,
    Orange: 0, 
    Banana: 0,
    Apple: 0, 
    Carrot: 0, 
    Celery: 0, 
    Mushroom: 0, 
    Bread: 0, 
    Pasta: 0, 
    Rice: 0, 
    Fish: 0, 
    Pork: 0
  },
  basketCounter: 0
}

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_GROCERY':
      return {
        ...state,
        basket: {
          ...state.basket,
          [action.groceryName]: state.basket[action.groceryName] + 1
        },
        basketCounter: state.basketCounter+1
      };

    case 'REMOVE_GROCERY':
      return {
        ...state,
        basket: {
          ...state.basket,
          [action.groceryName]: state.basket[action.groceryName] - 1
        },
        basketCounter: state.basketCounter-1
      };

    case 'REMOVE_ALL_GROCERY':
      return {
        ...state,
        basket: initialState.basket,
        basketCounter: 0
      };

    default:
      return state;
  }
}

export default basketReducer;