import { View } from 'react-native';
import React from 'react';
import ScreenHeader from '../../components/common/ScreenHeader';
import HeroSection from '../../components/common/HeroSection';
import PrimaryButton from '../../components/common/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const ProfileScreen = () => {
  const navigation = useNavigation<any>();
  const user = useSelector((state: RootState) => state.auth.user);
  return (
    <View className="flex-1 bg-white px-7">
      <ScreenHeader title="Profile" />

      {user ? (
        <HeroSection
          title={user.user_metadata.full_name}
          subtitle="Enjoy your recipe"
        />
      ) : (
        <View>
          <HeroSection
            title="Guest User"
            subtitle="Log in to save your recipes and access all features"
          />
          <PrimaryButton
            title="Log In"
            onPress={() => {
              navigation.navigate();
            }}
          />
        </View>
      )}
    </View>
  );
};

export default ProfileScreen;
