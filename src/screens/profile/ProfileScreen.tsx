import { View } from 'react-native';
import React from 'react';
import ScreenHeader from '../../components/common/ScreenHeader';

const ProfileScreen = () => {
  return (
    <View className="flex-1 bg-white px-7">
      <ScreenHeader title="Profile" />
    </View>
  );
};

export default ProfileScreen;
