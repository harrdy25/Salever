import { combineReducers } from "redux";
import { CounterReducer } from "./Counter.Reducer";
import { SignUpReducer } from "./User.Reducer";

export const rootReducer = combineReducers({
    counter: CounterReducer,
    user: SignUpReducer,
})