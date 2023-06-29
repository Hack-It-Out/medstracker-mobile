/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/store';
import { Router } from './src/stack';

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Router />
    </NavigationContainer>
    </Provider>
  );
}
