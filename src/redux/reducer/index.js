import { combineReducers } from "redux";
import { CartReducer } from "./Cart.Reducer";
import { CounterReducer } from "./Counter.Reducer";
import { ProductReducer } from "./Product.Reducer";
import { SignUpReducer } from "./User.Reducer";

export const rootReducer = combineReducers({
    counter: CounterReducer,
    user: SignUpReducer,
    product: ProductReducer,
    carts: CartReducer,
})