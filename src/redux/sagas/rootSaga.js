import { all} from 'redux-saga/effects'
import { productSaga } from './products.Saga'

export function* rootSaga() {
    yield all([
        productSaga()
    ])
}