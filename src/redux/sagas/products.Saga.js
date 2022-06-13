import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as ActionType from '../ActionTypes';
import { getAllProductDetails } from '../../comman/apis/product.api';
import { setProduct } from '../action/Product.Action';


function* getProductData(action) {
   try {
      const user = yield call(getAllProductDetails);
      yield put(setProduct(user.data));
   } catch (e) {
    //   yield put({type: "USER_FETCH_FAILED", message: e.message});
    console.log(e.message);
   }
}

export function* productSaga() {
  yield takeEvery(ActionType.GET_PRODUCT, getProductData);
}