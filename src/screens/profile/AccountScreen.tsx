import React from 'react';
import { View, Text } from 'react-native';

import { useSelector } from 'react-redux';

import ScreenHeader from '../../components/common/ScreenHeader';
import { RootState } from '../../store';
import MailIcon from '../../assets/icons/mail.svg';
import CalendarIcon from '../../assets/icons/calendar.svg';

const AccountScreen = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  const firstLetter = user?.user_metadata?.full_name?.[0]?.toUpperCase() || 'U';

  const createdAt = user?.created_at
    ? new Date(user.created_at).toLocaleDateString()
    : 'N/A';

  return (
    <View className="flex-1 bg-lightBackground dark:bg-darkBackground px-7 jucstify-center ">
      <ScreenHeader title="Account" />

      {/* Avatar */}
      <View className="items-center mb-8">
        <View className="h-28 w-28 rounded-full bg-primary items-center justify-center">
          <Text className="text-white text-5xl font-nunitoBold">
            {firstLetter}
          </Text>
        </View>

        <Text className="text-2xl font-nunitoBold mt-4 text-primary dark:text-darkPrimary">
          {user?.user_metadata?.full_name || 'Not Provided'}
        </Text>
      </View>

      {/* Email Card */}
      <View className="bg-lightCard dark:bg-darkCard rounded-3xl p-5 mb-10 flex-row items-center">
        <View className="h-12 w-12 rounded-2xl bg-primary/10 dark:bg-lightCard items-center justify-center">
          <MailIcon width={24} height={24} />
        </View>

        <View className="ml-4 flex-1">
          <Text className="text-secondary dark:text-darkSecondary text-sm">
            Email Address
          </Text>

          <Text className="text-lg font-nunitoBold text-primary dark:text-darkPrimary mt-1">
            {user?.email || 'Not Available'}
          </Text>
        </View>
      </View>

      {/* Member Since Card */}
      <View className="bg-lightCard dark:bg-darkCard rounded-3xl p-5 flex-row items-center">
        <View className="h-12 w-12 rounded-2xl bg-primary/10 dark:bg-lightCard items-center justify-center">
          <CalendarIcon width={24} height={24} />
        </View>

        <View className="ml-4 flex-1">
          <Text className="text-secondary dark:text-darkSecondary text-sm">
            Member Since
          </Text>

          <Text className="text-lg font-nunitoBold text-primary dark:text-darkPrimary mt-1">
            {createdAt}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AccountScreen;
