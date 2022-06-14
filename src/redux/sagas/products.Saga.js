import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as ActionType from '../ActionTypes';
import { deleteProductDetails, getAllProductDetails, postAllProductDetails } from '../../comman/apis/product.api';
import { deletedProduct, insertedProduct, setProduct } from '../action/Product.Action';


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
      yield put(insertedProduct(action.payload))
   } catch (e) {
      console.log(e.message);
   }
}

function* deleteProductData(action) {
   try {
      const data = yield call(deleteProductDetails, action.payload);
      yield put(deletedProduct(action.payload))
   } catch (e) {
      console.log(e.message);
   }
}

export function* productSaga() {
  yield takeEvery(ActionType.GET_PRODUCT, getProductData);
  yield takeEvery(ActionType.INSERT_PRODUCT, insertProductData);
  yield takeEvery(ActionType.DELETE_PRODUCT, deleteProductData);
}