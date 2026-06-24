import React, { ReactNode } from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  Text,
  useColorScheme,
} from 'react-native';

import ArrowForwardIcon from '../../assets/icons/arrow_forward.svg';

type ProfileChipProps = TouchableOpacityProps & {
  title: string;
  subtitle: string;
  icon: ReactNode;
};

const ProfileChip = ({ title, subtitle, icon, ...props }: ProfileChipProps) => {
  const isDark = useColorScheme() === 'dark';

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className="flex-row items-center justify-between py-5 border-b border-border"
      {...props}
    >
      <View className="flex-row items-center flex-1">
        <View className="h-12 w-12 rounded-2xl bg-primary/10 dark:bg-lightCard items-center justify-center">
          {icon}
        </View>

        <View className="ml-4 flex-1">
          <Text className="text-lg font-nunitoBold text-primary dark:text-darkPrimary">
            {title}
          </Text>

          <Text className="text-secondary dark:text-darkSecondary mt-1">
            {subtitle}
          </Text>
        </View>
      </View>

      <ArrowForwardIcon
        fill="currentColor"
        color={isDark ? '#EAEAEA' : '#1f4d42'}
      />
    </TouchableOpacity>
  );
};

export default ProfileChip;
