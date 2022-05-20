import {BASE_URL} from '../../Shared/BaseUrl';
import * as ActionType from '../ActionTypes';

export const ProductData = proData => dispatch => {
  try {
    fetch(BASE_URL + 'products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(proData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  } catch (e) {
    console.log(e);
  }
};