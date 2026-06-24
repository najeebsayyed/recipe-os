import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  View,
} from 'react-native';

type Props = TouchableOpacityProps & {
  title: string;
  icon: React.ReactNode;
  danger?: boolean;
};

const AccountActionButton = ({ title, icon, danger, ...props }: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className={`flex-row items-center rounded-3xl p-5 mb-4 ${
        danger ? 'bg-red-50 dark:bg-red-950' : 'bg-card dark:bg-darkCard'
      }`}
      {...props}
    >
      {icon}

      <Text
        className={`ml-3 text-lg font-nunitoBold ${
          danger ? 'text-red-500' : 'text-lightText dark:text-darkText'
        }`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default AccountActionButton;
