import { View, Text } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const HomeScreen = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <View>
      <Text>HomeScreen</Text>

      <Text>{user?.user_metadata?.full_name || 'Guest'}</Text>
    </View>
  );
};

export default HomeScreen;
