import * as ActionType from '../ActionTypes';

const initValue = {
  isloading: false,
  product: null,
  error: '',
};

export const ProductReducer = (state = initValue, action) => {
  switch (action.type) {
    case ActionType.PRODUCT_DATA:
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
};
