import { combineReducers } from "redux";
import { CounterReducer } from "./Counter.Reducer";

export const rootReducer = combineReducers({
    counter: CounterReducer
})