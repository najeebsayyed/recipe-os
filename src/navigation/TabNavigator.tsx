import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ExploreScreen from '../screens/explore/ExploreScreen';
import SavedScreen from '../screens/saved/SavedScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import HomeStackNavigator from './HomeStackNavigator';

import HomeIcon from '../assets/icons/home.svg';
import ExploreIcon from '../assets/icons/explore.svg';
import SavedIcon from '../assets/icons/favorite.svg';
import ProfileIcon from '../assets/icons/profile.svg';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({ focused }) => {
          const size = 32;
          const activeColor = '#1f4d42'; // dark green
          const inactiveColor = '#6B7F7A'; // light green

          let IconComponent;

          if (route.name === 'Home') IconComponent = HomeIcon;
          if (route.name === 'Explore') IconComponent = ExploreIcon;
          if (route.name === 'Saved') IconComponent = SavedIcon;
          if (route.name === 'Profile') IconComponent = ProfileIcon;

          return (
            <IconComponent
              width={size}
              height={size}
              fill={focused ? activeColor : inactiveColor}
            />
          );
        },

        tabBarActiveTintColor: '#1f4d42',
        tabBarInactiveTintColor: '#6B7F7A',

        tabBarStyle: {
          height: 70,
          backgroundColor: '#fff',
        },

        tabBarLabelStyle: {
          fontSize: 15,
          marginBottom: 6,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Saved" component={SavedScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
