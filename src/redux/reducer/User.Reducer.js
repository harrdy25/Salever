import * as ActionType from '../ActionTypes';

const initValue = {
  isLoaded: false,
  user: null,
  error: '',
};

export const SignUpReducer = (state = initValue, action) => {
  switch (action.type) {
    case ActionType.SIGNUP_USER:
      return {
        ...state,
        user: action.payload,
      };
    case ActionType.SIGNIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: ''
      };
    case ActionType.SIGNIN_ERROR:
      return {
        user: null,
        error: action.payload
      };
    default:
      return state;
  }
};
