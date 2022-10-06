/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';
import Routes from './src/routes/index';
import store from './src/store/store';

const App = () => {
  return (
      <Provider store={store}>
        <Routes />
      </Provider>
  );
};

export default App;
