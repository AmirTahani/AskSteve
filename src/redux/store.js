import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleWare from 'redux-saga';
import AsyncStorage from '@react-native-community/async-storage';
import reducers from './reducers';
import sagas from './sagas';

export default function CreateStore() {

  const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist: []
  };

  const persistedReducer = persistReducer(persistConfig, reducers);
  const sagaMiddleware = createSagaMiddleWare();
  let store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
  let persistor = persistStore(store);
  sagaMiddleware.run(sagas);
  return { store, persistor };
};
