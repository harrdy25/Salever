import * as ActionTypes from '../ActionTypes';

const initValue = 0;

export const CounterReducer = (state = initValue, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT_COUNTER:
      return {
        ...state,
        count: state.count + 1,
      }
    case ActionTypes.DECREMENT_COUNTER:
      return {
        ...state,
        count: state.count - 1,
      }      
      default:
        return state;
  }
};
