import { View, Image, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import HeroSection from '../../components/common/HeroSection';
import PrimaryButton from '../../components/common/PrimaryButton';
import Divider from '../../components/common/Divider';
import ProfileIcom from '../../assets/icons/profile.svg';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const firstLetter = user?.user_metadata?.full_name?.[0];
  const navigation = useNavigation<any>();

  return (
    <View className="flex-1 bg-white px-7">
      {/* App Logo and Profile icon */}
      <View className="flex-row justify-between mt-12 items-center  ">
        <Image
          source={require('../../assets/images/appLogo.png')}
          className="h-20 w-24  "
        />
        <TouchableOpacity
          className="bg-border rounded-full h-14 w-14 items-center justify-center"
          onPress={() => {
            navigation.navigate('Profile');
          }}
        >
          {firstLetter ? (
            <Text
              style={{ color: '#1f4d42', fontWeight: 'bold', fontSize: 26 }}
            >
              {firstLetter}
            </Text>
          ) : (
            <ProfileIcom height={40} width={40} />
          )}
        </TouchableOpacity>
      </View>

      {/* Welcome message  */}
      <HeroSection
        classname="mt-10 mb-8"
        title={`Welcome, ${
          user?.user_metadata?.full_name?.split(' ')[0] || 'Foodie'
        } 👋`}
        subtitle="What's in your kitchen?"
        subtitleStyle="text-lg font-nunitoSemiBold"
      />

      {/* Ingredients button */}
      <PrimaryButton
        title={'Add Ingredients !'}
        onPress={() => {
          navigation.navigate('Ingredients');
        }}
      />
      <Divider />

      {/* Saved recipes */}
    </View>
  );
};

export default HomeScreen;
