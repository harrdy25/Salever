import {BASE_URL} from '../../Shared/BaseUrl';
import * as ActionType from '../ActionTypes';

export const insertProduct = productData => dispatch => {
  try {
    dispatch(loadingProduct());
    let fData = {
      id: Math.floor(Math.random() * 1000),
      ...productData,
    };
    fetch(BASE_URL + 'products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(fData),
    })
      .then(response => response.json())
      .then(data => {
        dispatch({type: ActionType.INSERT_PRODUCT, payload: fData});
      })
      .catch(error => {
        dispatch(errorProduct(error));
      });
  } catch (e) {
    dispatch(errorProduct(e));
  }
};

export const loadingProduct = () => dispatch => {
  dispatch({type: ActionType.LOADING_PRODUCT});
};

export const errorProduct = error => dispatch => {
  dispatch({type: ActionType.ERROR_PRODUCT, payload: error});
};

export const fetchProduct = () => dispatch => {
  try {
    dispatch(loadingProduct());
    fetch(BASE_URL + 'products', {
      method: 'GET',
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Somthing Wrong');
        }
      })
      .then(data => {
        dispatch({type: ActionType.GET_PRODUCT, payload: data});
      })
      .catch(error => {
        dispatch(errorProduct(error.message));
      });
  } catch (e) {
    dispatch(errorProduct(e));
  }
};

export const deleteProduct = id => dispatch => {
  try {
    dispatch(loadingProduct());
    fetch(BASE_URL + 'products/' + id, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Somthing Wrong');
        }
      })
      .then(data => {
        dispatch({type: ActionType.DELETE_PRODUCT, payload: id});
      })
      .catch(error => {
        dispatch(errorProduct(error.message));
      });
  } catch (e) {
    dispatch(errorProduct(e));
  }
};

// Production.Action File
export const updateProduct = data => dispatch => {
  try {
    dispatch(loadingProduct());
    fetch(BASE_URL + 'products/' + data.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        dispatch({type: ActionType.UPDATE_PRODUCT, payload: data});
      })
      .catch(error => {
        dispatch(errorProduct(error.message));
      });
  } catch (e) {
    dispatch(errorProduct(e));
  }
};

