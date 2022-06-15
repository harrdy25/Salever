import AsyncStorage from '@react-native-community/async-storage';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from './reducer';
import {persistStore, persistReducer} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './sagas/rootSaga';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['counter'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const saga = createSagaMiddleware();
const middleware = [saga, thunk];

export const configStore = () => {
  const store = createStore(persistedReducer, applyMiddleware(...middleware));
  let persistor = persistStore(store);

  saga.run(rootSaga)
  
  return {store, persistor};
};