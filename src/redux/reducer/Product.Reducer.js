import * as ActionType from '../ActionTypes';

const initValue = {
  isloading: false,
  product: [],
  error: '',
};

export const ProductReducer = (state = initValue, action) => {
  switch (action.type) {
    case ActionType.LOADING_PRODUCT:
      return {
        ...state,
        isloading: true,
        error: '',
      };
    case ActionType.RETRIEVED_PRODUCT:
      return {
        ...state,
        product: action.payload,
        isloading: false,
        error: '',
      };
    case ActionType.INSERT_PRODUCT:
      return {
        ...state,
        product: state.product.concat(action.payload),
        isloading: false,
        error: '',
      };
    case ActionType.DELETE_PRODUCT:
      return {
        ...state,
        product: state.product.filter(item => item.id !== action.payload),
        isloading: false,
        error: '',
      };
      // production.Reducer file
    case ActionType.UPDATE_PRODUCT:
      return {
        ...state,
        product: state.product.map((item) => item.id === action.payload.id ? action.payload : item),
        isloading: false,
        error: action.payload,
      };
    case ActionType.ERROR_PRODUCT:
      return {
        ...state,
        product: [],
        isloading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
