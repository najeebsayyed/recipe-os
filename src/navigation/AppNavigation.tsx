import {} from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import HomeScreen from '../screen/HomeScreen';
import SavedScreen from '../screen/SavedScreen';

const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Saved" component={SavedScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
