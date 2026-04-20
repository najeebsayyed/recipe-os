import { View, Image } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import HeroSection from '../../components/common/HeroSection';

const HomeScreen = ({}) => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <View className="flex-1 bg-white px-7 ">
      {/* Header with logo and notification icon */}

      <Image
        source={require('../../assets/images/appLogo.png')}
        className="w-40 h-40 mt-6 absolute"
      />

      {/* Greeting message */}
      <HeroSection
        classname="mt-48 mb-8 "
        title={`Hello, ${
          user?.user_metadata?.full_name.split(' ')[0] || 'Foodie'
        }👋`}
        subtitle="Whats in your kitchen ?"
        subtitleStyle="text-lg font-nunitoSemiBold"
      />

      {/* User Input */}
    </View>
  );
};

export default HomeScreen;
