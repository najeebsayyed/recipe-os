import React from 'react';
import { View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import ScreenHeader from '../../components/common/ScreenHeader';
import HeroSection from '../../components/common/HeroSection';
import PrimaryButton from '../../components/common/PrimaryButton';
import ProfileChip from '../../components/common/ProfileChip';

import { RootState } from '../../store';
import { signOut } from '../../services/supabase/auth.service';

import AccountIcon from '../../assets/icons/account.svg';
import SettingsIcon from '../../assets/icons/settings.svg';
import InfoIcon from '../../assets/icons/info.svg';
import LogoutIcon from '../../assets/icons/logout.svg';

const ProfileScreen = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.auth.user);

  const firstLetter = user?.user_metadata?.full_name?.[0]?.toUpperCase() || 'G';

  const handleLogout = async () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Logout',
        style: 'destructive',
        onPress: async () => {
          await signOut();
        },
      },
    ]);
  };

  return (
    <ScrollView
      className="flex-1 bg-lightBackground dark:bg-darkBackground"
      contentContainerStyle={{
        paddingHorizontal: 28,
        paddingBottom: 40,
      }}
      showsVerticalScrollIndicator={false}
    >
      <ScreenHeader title="Profile" />

      {user ? (
        <>
          {/* Profile Card */}
          <View className="bg-card rounded-[32px] p-6 mb-6 items-center">
            <View className="h-24 w-24 rounded-full bg-primary items-center justify-center">
              <Text className="text-white text-4xl font-nunitoBold">
                {firstLetter}
              </Text>
            </View>
          </View>

          {/* Menu */}
          <View className="bg-card rounded-[32px] px-5 py-2">
            <ProfileChip
              icon={<AccountIcon width={22} height={22} />}
              title="Account"
              subtitle="Personal information"
              onPress={() => navigation.navigate('Account')}
            />

            <ProfileChip
              icon={<SettingsIcon width={22} height={22} />}
              title="Settings"
              subtitle="Language & preferences"
              onPress={() => navigation.navigate('Settings')}
            />

            <ProfileChip
              icon={<InfoIcon width={22} height={22} />}
              title="About"
              subtitle="About RecipeOS"
              onPress={() => navigation.navigate('About')}
            />
          </View>

          {/* Logout */}
          <TouchableOpacity
            onPress={handleLogout}
            activeOpacity={0.8}
            className="mt-6 bg-red-100 dark:bg-red-950 rounded-3xl p-5 flex-row items-center"
          >
            <LogoutIcon width={22} height={22} color="#ef4444" />

            <Text className="text-red-500 font-nunitoBold text-lg ml-3">
              Logout
            </Text>
          </TouchableOpacity>
        </>
      ) : (
        <View className="bg-lightCard dark:bg-darkCard rounded-[32px] p-8 mt-10">
          <Text className="text-6xl mb-4 self-center">👨‍🍳</Text>

          <HeroSection
            title="Guest User"
            subtitle="Login to save, sync and unlock all RecipeOS features."
          />

          <PrimaryButton
            title="Log In"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default ProfileScreen;
