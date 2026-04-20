import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

import AuthNavigator from './AuthNavigator';
import TabNavigator from './TabNavigator';

export default function RootNavigator() {
  const { user, isGuest } = useSelector((state: RootState) => state.auth);

  return (
    <NavigationContainer>
      {user || isGuest ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
