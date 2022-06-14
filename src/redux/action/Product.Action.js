import {postAllProductDetails} from '../../comman/apis/product.api';
import {BASE_URL} from '../../Shared/BaseUrl';
import * as ActionType from '../ActionTypes';

export const insertProduct = productData => dispatch => {
  dispatch({type: ActionType.INSERT_PRODUCT, payload: productData});
};

export const insertedProduct = productItem => dispatch => {
  dispatch({type: ActionType.INSERTED_PRODUCT, payload: productItem});
};

export const loadingProduct = () => dispatch => {
  dispatch({type: ActionType.LOADING_PRODUCT});
};

export const errorProduct = error => dispatch => {
  dispatch({type: ActionType.ERROR_PRODUCT, payload: error});
};

// export const fetchProduct = () => dispatch => {
//   try {
//     dispatch(loadingProduct());
//     fetch(BASE_URL + 'products', {
//       method: 'GET',
//     })
//       .then(response => {
//         if (response.ok) {
//           return response.json();
//         } else {
//           throw new Error('Somthing Wrong');
//         }
//       })
//       .then(data => {
//         dispatch({type: ActionType.GET_PRODUCT, payload: data});
//       })
//       .catch(error => {
//         dispatch(errorProduct(error.message));
//       });
//   } catch (e) {
//     dispatch(errorProduct(e));
//   }
// };

export const fetchProduct = () => dispatch => {
  dispatch({type: ActionType.GET_PRODUCT});
};

export const setProduct = products => dispatch => {
  dispatch({type: ActionType.RETRIEVED_PRODUCT, payload: products});
};

// export const deleteProduct = id => dispatch => {
//   try {
//     dispatch(loadingProduct());
//     fetch(BASE_URL + 'products/' + id, {
//       method: 'DELETE',
//     })
//       .then(response => {
//         if (response.ok) {
//           return response.json();
//         } else {
//           throw new Error('Somthing Wrong');
//         }
//       })
//       .then(data => {
//         dispatch({type: ActionType.DELETE_PRODUCT, payload: id});
//       })
//       .catch(error => {
//         dispatch(errorProduct(error.message));
//       });
//   } catch (e) {
//     dispatch(errorProduct(e));
//   }
// };

// Production.Action File

export const deleteProduct = id => dispatch => {
  dispatch({type: ActionType.DELETE_PRODUCT, payload: id});
};

export const deletedProduct = (data) => (dispatch) => {
  dispatch({type: ActionType.DELETED_PRODUCT, payload: data})
}

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
