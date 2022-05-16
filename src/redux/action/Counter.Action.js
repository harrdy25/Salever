import { ActionSheetIOS } from "react-native"
import * as ActionTypes from '../ActionTypes'

export const incrementCounter = () => (dispatch) => {
    dispatch({type: ActionTypes.INCREMENT_COUNTER})
} 

export const incrementCounter = () => (dispatch) => {
    dispatch({type: ActionTypes.DECREMENT_COUNTER})
} 