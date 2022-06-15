import {BASE_URL} from '../../Shared/BaseUrl';
import * as ActionType from '../ActionTypes';

export const fetchCart = () => dispatch => {
  try {
    fetch(BASE_URL + 'Carts', {
      method: 'GET',
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Somthing Wrong...!!!');
        }
      })
      .then(data => {
        dispatch({type: ActionType.GET_CART_PRODUCT, payload: data});
      })
      .catch(error => {
        console.error('Error:', error);
      });
  } catch (e) {
    console.error('Error:', e);
  }
};
