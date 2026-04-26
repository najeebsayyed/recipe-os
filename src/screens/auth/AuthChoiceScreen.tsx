import { Image, View } from 'react-native';
import React from 'react';
import PrimaryButton from '../../components/common/PrimaryButton';
import Divider from '../../components/common/Divider';
import SocialButton from '../../components/common/SocialButton';
import { useDispatch } from 'react-redux';
import { setGuest } from '../../store/slices/authSlice';

const AuthChoiceScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  return (
    <View className="flex-1 bg-lightBackground dark:bg-darkBackground px-7 justify-center py-10">
      {/* Top Section */}

      <Image
        source={require('../../assets/images/appLogo.png')}
        className="h-20 w-24 self-center "
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
        <Divider label="Or" className="mt-[-3]" />
        <SocialButton
          title="Continue as Guest"
          onPress={() => dispatch(setGuest())}
        />
      </View>
    </View>
  );
};

export default AuthChoiceScreen;
