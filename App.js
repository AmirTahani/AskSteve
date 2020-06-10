import * as React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import createStore from './src/redux/store';
import Routes from './src/navigation/routes';


const { store, persistor } = createStore();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Routes/>
      </PersistGate>
    </Provider>
  )
}

