import { View } from 'react-native';
import React from 'react';
import HeroSection from '../../components/common/HeroSection';
import PrimaryInput from '../../components/common/PrimaryInput';
import PrimaryButton from '../../components/common/PrimaryButton';
import SocialButton from '../../components/common/SocialButton';
import Divider from '../../components/common/Divider';
import AuthSwitchText from '../../components/common/AuthSwitchText';
import EmailIcon from '../../assets/icons/email.svg';
import LockIcon from '../../assets/icons/lock.svg';

const LoginScreen = ({ navigation }) => {
  return (
    <View className="flex-1 bg-white px-7">
      <HeroSection
        title={'Welcome back!'}
        subtitle={'Log in to your account'}
      />
      <PrimaryInput
        label="Email Address"
        placeholder="Email Address"
        type="email"
        icon={<EmailIcon />}
      />
      <PrimaryInput
        label="Password"
        placeholder="Password"
        type="password"
        rightText="Forgot Password"
        icon={<LockIcon />}
      />
      <PrimaryButton
        title="Log In"
        onPress={() => {
          // navigation.navigate('home');
        }}
      />
      <Divider label="OR" />
      <SocialButton
        title="Log in with Google"
        icon={require('../../assets/images/google.png')}
      />
      <Divider className="mt-12" />
      <AuthSwitchText
        question="Don't have an account? "
        actionText="Sign Up"
        onPress={() => {
          navigation.navigate('Signup');
        }}
      />
    </View>
  );
};

export default LoginScreen;
