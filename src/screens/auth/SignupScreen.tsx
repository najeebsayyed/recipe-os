import { Alert, View } from 'react-native';
import React, { useState } from 'react';
import HeroSection from '../../components/common/HeroSection';
import PrimaryInput from '../../components/common/PrimaryInput';
import PrimaryButton from '../../components/common/PrimaryButton';
import Divider from '../../components/common/Divider';
import AuthSwitchText from '../../components/common/AuthSwitchText';
import EmailIcon from '../../assets/icons/email.svg';
import LockIcon from '../../assets/icons/lock.svg';
import ProfileIcon from '../../assets/icons/profile.svg';
import { signUp } from '../../services/supabase/auth.service';
import DismissKeyboardView from '../../components/common/DismissKeyboardView';
const SignupScreen = ({ navigation }: any) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    // Basic validation
    if (!fullName || !email || !password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    const { error } = await signUp(email, password, fullName);

    if (error) {
      Alert.alert('Signup Failed', error.message);
    } else {
      Alert.alert('Success', 'Account created successfully!');

      navigation.replace('Login'); // redirect after signup
    }
  };

  return (
    <DismissKeyboardView>
      <View className="flex-1 bg-lightBackground dark:bg-darkBackground px-7 justify-center">
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

        <Divider />
        <AuthSwitchText
          question="Already have an account? "
          actionText="Log In"
          onPress={() => {
            navigation.navigate('Login');
          }}
        />
      </View>
    </DismissKeyboardView>
  );
};

export default SignupScreen;
