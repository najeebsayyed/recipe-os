import React from 'react';
import { Image, SafeAreaView, StatusBar, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

import Divider from '../../components/common/Divider';
import PrimaryButton from '../../components/common/PrimaryButton';
import SocialButton from '../../components/common/SocialButton';
import { setGuest } from '../../store/slices/authSlice';

// SVG Icons
import LoginIcon from '../../assets/icons/login.svg';
import SignupIcon from '../../assets/icons/edit.svg';
import GuestIcon from '../../assets/icons/account.svg';
import ArrowRightIcon from '../../assets/icons/arrow-right.svg';

const AuthChoiceScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView className="flex-1 bg-lightBackground dark:bg-darkBackground">
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <View className="flex-1 justify-between px-7 py-12">
        {/* Header */}
        <View className="items-center mt-8">
          <Text className="text-4xl font-bold text-primary dark:text-darkPrimary">
            Welcome
          </Text>

          <Text className="text-base text-secondary dark:text-darkSecondary text-center mt-3 leading-6">
            Create personalized recipes{'\n'}
            with AI in seconds.
          </Text>
        </View>

        {/* Food Images */}
        <View className="items-center relative h-72">
          {/* Left Salad */}
          <Image
            source={require('../../assets/images/salad.png')}
            className="absolute -left-60 -top-8 w-96 h-96"
            resizeMode="contain"
          />

          {/* Right Pasta */}
          <Image
            source={require('../../assets/images/pasta.png')}
            className="absolute -right-52 top-2 w-80 h-80"
            resizeMode="contain"
          />

          {/* Logo */}
          <View className="bg-lightCard rounded-[35px] p-8 shadow-xl dark:bg-darkCard">
            <Image
              source={require('../../assets/images/appLogo.png')}
              className="w-36 h-36"
              resizeMode="contain"
            />
          </View>
        </View>

        {/* Buttons */}
        <View className="mb-6">
          <PrimaryButton
            title="Log In"
            LeftIcon={<LoginIcon width={22} height={22} />}
            RightIcon={
              <ArrowRightIcon width={34} height={34} color={'white'} />
            }
            className="mb-4"
            onPress={() => navigation.navigate('Login')}
          />

          <PrimaryButton
            title="Sign Up"
            LeftIcon={<SignupIcon width={22} height={22} />}
            RightIcon={
              <ArrowRightIcon width={34} height={34} color={'white'} />
            }
            className="mb-6"
            onPress={() => navigation.navigate('Signup')}
          />

          <Divider label="Or continue with" />

          <SocialButton
            title="Continue as Guest"
            LeftIcon={<GuestIcon width={22} height={22} />}
            RightIcon={
              <ArrowRightIcon width={34} height={34} color={'#1f4d42'} />
            }
            className="mt-6 bg-lightBackground text-darkPrimary"
            onPress={() => dispatch(setGuest())}
          />

          <View className="items-center mt-8">
            <Text className="text-gray-500 text-sm">
              🔒 Your data is safe with us
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AuthChoiceScreen;
