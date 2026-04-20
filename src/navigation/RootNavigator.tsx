import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

import AuthNavigator from './AuthNavigator';
import TabNavigator from './TabNavigator';
import DismissKeyboardView from '../components/common/DismissKeyboardView';

export default function RootNavigator() {
  const { user, isGuest } = useSelector((state: RootState) => state.auth);

  return (
    <DismissKeyboardView>
      <NavigationContainer>
        {user || isGuest ? <TabNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </DismissKeyboardView>
  );
}
