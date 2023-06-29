import React from 'react';
import {useSelector} from 'react-redux';
import {selectIsLoggedIn} from '../features';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

export function Router() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return <>{isLoggedIn ? <AppStack /> : <AuthStack />}</>;
}
