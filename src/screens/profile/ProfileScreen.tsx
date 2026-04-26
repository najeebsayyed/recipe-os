import { View } from 'react-native';
import React from 'react';
import ScreenHeader from '../../components/common/ScreenHeader';
import HeroSection from '../../components/common/HeroSection';
import PrimaryButton from '../../components/common/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import ProfileChip from '../../components/common/ProfileChip';

const ProfileScreen = () => {
  const navigation = useNavigation<any>();
  const user = useSelector((state: RootState) => state.auth.user);
  return (
    <View className="flex-1 bg-lightBackground dark:bg-darkBackground px-7">
      {/* Screen Header with back icon */}
      <ScreenHeader title="Profile" />
      {/* Profile Information */}
      {user ? (
        <View>
          <ProfileChip
            title="Account"
            subtitle="Personal Information"
            onPress={() => {
              navigation.navigate('Account');
            }}
          />
          <ProfileChip
            title="Settings"
            subtitle="Theme, preferences"
            onPress={() => {
              navigation.navigate('Settings');
            }}
          />
          <ProfileChip
            title="About"
            subtitle="Information about RecipeOS"
            onPress={() => {
              navigation.navigate('About');
            }}
          />
        </View>
      ) : (
        <View>
          <HeroSection
            title="Guest User"
            subtitle="Log in to save your recipes and access all features"
          />
          <PrimaryButton
            title="Log In"
            onPress={() => {
              navigation.navigate('Login');
            }}
          />
        </View>
      )}
    </View>
  );
};

export default ProfileScreen;
