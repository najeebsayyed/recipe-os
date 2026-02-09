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
import ProfileIcon from '../../assets/icons/profile.svg';
import { signUp } from '../../services/supabase/auth.service';
const LoginScreen = ({ navigation }: any) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    // Basic validation
    if (!fullName || !email || !password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    const { data, error } = await signUp(email, password, fullName);

    if (error) {
      Alert.alert('Signup Failed', error.message);
    } else {
      Alert.alert('Success', 'Account created successfully!');

      navigation.replace('Login'); // redirect after signup
    }
  };

  return (
    <View className="flex-1 bg-white px-7">
      <HeroSection title={'Get Started!'} subtitle={'Create your account'} />
      <PrimaryInput
        label="Full Name"
        placeholder="Full Name..."
        value={fullName}
        onChangeText={setFullName}
        icon={<ProfileIcon />}
      />
      <PrimaryInput
        label="Email Address"
        placeholder="Email Address"
        type="email"
        value={email}
        onChangeText={setEmail}
        icon={<EmailIcon />}
      />
      <PrimaryInput
        label="Password"
        placeholder="Password"
        type="password"
        value={password}
        onChangeText={setPassword}
        icon={<LockIcon />}
      />
      <PrimaryButton title="Sign Up" onPress={handleSignup} />
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
