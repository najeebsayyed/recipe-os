import { View } from 'react-native';
import React from 'react';
import HeroSection from '../../components/common/HeroSection';
import PrimaryButton from '../../components/common/PrimaryButton';
import Divider from '../../components/common/Divider';
import SocialButton from '../../components/common/SocialButton';
import { useDispatch } from 'react-redux';
import { setGuest } from '../../store/slices/authSlice';

const AuthChoiceScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  return (
    <View className="flex-1 bg-white px-7 justify-between py-10">
      {/* Top Section */}
      <View>
        <HeroSection
          title={'Welcome to RecipeOS 🍳'}
          subtitle={'Cook smarter, eat better'}
        />

        {/* Buttons */}
        <View className="mt-10 gap-4">
          <PrimaryButton
            title="Log In"
            onPress={() => navigation.navigate('Login')}
          />

          <PrimaryButton
            title="Sign Up"
            onPress={() => navigation.navigate('Signup')}
          />
          <Divider label="Or" />
          <SocialButton
            title="Continue as Guest"
            onPress={() => dispatch(setGuest())}
          />
        </View>
      </View>
    </View>
  );
};

export default AuthChoiceScreen;
