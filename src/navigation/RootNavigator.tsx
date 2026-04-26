import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

import AuthNavigator from './AuthNavigator';
import AppStackNavigator from './AppStackNavigator';
import DismissKeyboardView from '../components/common/DismissKeyboardView';

export default function RootNavigator() {
  const { user, isGuest } = useSelector((state: RootState) => state.auth);

  return (
    <DismissKeyboardView>
      <NavigationContainer>
        {user || isGuest ? <AppStackNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </DismissKeyboardView>
  );
}
