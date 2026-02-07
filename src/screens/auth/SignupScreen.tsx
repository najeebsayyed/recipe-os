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
import ProfileIcon from '../../assets/icons/profile.svg';

const LoginScreen = ({ navigation }) => {
  return (
    <View className="flex-1 bg-white px-7">
      <HeroSection title={'Get Started!'} subtitle={'Create your account'} />
      <PrimaryInput
        label="Full Name"
        placeholder="Full Name..."
        icon={<ProfileIcon />}
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
        icon={<LockIcon />}
      />
      <PrimaryButton
        title="Sign Up"
        onPress={() => {
          // navigation.navigate('home');
        }}
      />
      <Divider label="OR" />
      <SocialButton
        title="Sign up with Google"
        icon={require('../../assets/images/google.png')}
      />
      <Divider className="mt-3" />
      <AuthSwitchText
        question="Already have an account? "
        actionText="Log In"
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
    </View>
  );
};

export default LoginScreen;
