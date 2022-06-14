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

export const fetchProduct = () => dispatch => {
  dispatch({type: ActionType.GET_PRODUCT});
};

export const setProduct = products => dispatch => {
  dispatch({type: ActionType.RETRIEVED_PRODUCT, payload: products});
};

export const deleteProduct = id => dispatch => {
  dispatch({type: ActionType.DELETE_PRODUCT, payload: id});
};

export const deletedProduct = data => dispatch => {
  dispatch({type: ActionType.DELETED_PRODUCT, payload: data});
};

export const updateProduct = data => dispatch => {
  dispatch({type: ActionType.UPDATE_PRODUCT, payload: data});
};

export const updatedProduct = data => dispatch => {
  dispatch({type: ActionType.UPDATED_PRODUCT, payload: data});
};
