import { Alert, View } from 'react-native';
import React, { useState } from 'react';
import HeroSection from '../../components/common/HeroSection';
import PrimaryInput from '../../components/common/PrimaryInput';
import PrimaryButton from '../../components/common/PrimaryButton';
import SocialButton from '../../components/common/SocialButton';
import Divider from '../../components/common/Divider';
import AuthSwitchText from '../../components/common/AuthSwitchText';
import EmailIcon from '../../assets/icons/email.svg';
import LockIcon from '../../assets/icons/lock.svg';
import { logIn } from '../../services/supabase/auth.service';
const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter email and password');
      return;
    }

    const { data, error } = await logIn(email, password);

    if (error) {
      Alert.alert('Login Failed', error.message);
    } else {
      navigation.replace('Home'); // redirect to home
    }
  };
  return (
    <View className="flex-1 bg-white px-7">
      <HeroSection
        title={'Welcome back!'}
        subtitle={'Log in to your account'}
      />
      <PrimaryInput
        label="Email Address"
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        type="email"
        icon={<EmailIcon />}
      />
      <PrimaryInput
        label="Password"
        placeholder="Password"
        type="password"
        value={password}
        onChangeText={setPassword}
        rightText="Forgot Password"
        icon={<LockIcon />}
      />
      <PrimaryButton title="Log In" onPress={handleLogin} />
      <Divider label="OR" />
      <SocialButton
        title="Log in with Google"
        icon={require('../../assets/images/google.png')}
      />
      <Divider />
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
