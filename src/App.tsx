import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import '../global.css';
import AuthNavigator from './navigation/AuthNavigator';
const App = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default App;
