import {all, call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import * as ActionType from '../ActionTypes';
import {
  deleteProductDetails,
  getAllProductDetails,
  postAllProductDetails,
  updateAllProductItem,
} from '../../comman/apis/product.api';
import {
  deletedProduct,
  insertedProduct,
  setProduct,
  updatedProduct,
} from '../action/Product.Action';

function* getProductData(action) {
  try {
    const user = yield call(getAllProductDetails);
    yield put(setProduct(user.data));
  } catch (e) {
    //   yield put({type: "USER_FETCH_FAILED", message: e.message});
    console.log(e.message);
  }
}

function* insertProductData(action) {
  try {
    const Item = yield call(postAllProductDetails, action.payload);
    yield put(insertedProduct(action.payload));
  } catch (e) {
    console.log(e.message);
  }
}

function* deleteProductData(action) {
  try {
    const data = yield call(deleteProductDetails, action.payload);
    yield put(deletedProduct(action.payload));
  } catch (e) {
    console.log(e.message);
  }
}

function* updateProductData(action) {
  try {
    const Data = yield call(updateAllProductItem, action.payload);
    yield put(updatedProduct(action.payload));
  } catch (e) {
    console.log(e.message);
  }
}

function* watchUpdateProduct() {
  yield takeEvery(ActionType.GET_PRODUCT, getProductData);
}

function* watchProductInsert() {
  yield takeLatest(ActionType.INSERT_PRODUCT, insertProductData);
}

function* watchProductDelete() {
  yield takeLatest(ActionType.DELETE_PRODUCT, deleteProductData);
}

function* watchProductUpdate() {
  yield takeLatest(ActionType.UPDATE_PRODUCT, updateProductData);
}

export function* productSaga() {
  yield all([
    watchUpdateProduct(),
    watchProductInsert(),
    watchProductDelete(),
    watchProductUpdate(),
  ]);
}

