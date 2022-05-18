import * as ActionType from '../ActionTypes';

const initValue = {
  isLoaded: false,
  user: [],
  error: '',
};

export const SignUpReducer = (state = initValue, action) => {
  switch (action.type) {
    case ActionType.SIGNUP_USER:
      return {
          ...state,
        user: action.payload,
      }
    default:
     return state;
  }
};
