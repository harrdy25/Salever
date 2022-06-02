import * as ActionType from '../ActionTypes';

const initValue = {
  isloading: false,
  cartItem: [],
  error: '',
};

export const CartReducer = (state = initValue, action) => {
  switch (action.type) {    
    case ActionType.GET_CART_PRODUCT:
      return {
        ...state,
        cartItem: action.payload,
        isloading: false,
        error: '',
      };    
    default:
      return state;
  }
};
