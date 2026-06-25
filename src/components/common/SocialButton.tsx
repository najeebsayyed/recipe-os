import React from 'react';
import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  View,
} from 'react-native';

type SocialButtonProps = TouchableOpacityProps & {
  title: string;
  LeftIcon?: React.ReactNode;
  RightIcon?: React.ReactNode;
  className?: string;
};

const SocialButton = ({
  title,
  LeftIcon,
  RightIcon,
  disabled,
  className = '',
  ...props
}: SocialButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      disabled={disabled}
      className={`
        h-16
        bg-white
        rounded-2xl
        border
        border-primary
        px-5
        flex-row
        items-center
        justify-between
        shadow-sm
        ${disabled ? 'opacity-50' : ''}
        ${className}
      `}
      {...props}
    >
      <View className="flex-row items-center">
        {LeftIcon && (
          <View className="h-11 w-11 rounded-xl bg-lightCard items-center justify-center">
            {LeftIcon}
          </View>
        )}

        <Text className="ml-4  text-primary font-nunitoBold text-xl">
          {title}
        </Text>
      </View>

      {RightIcon && (
        <View className="items-center justify-center">{RightIcon}</View>
      )}
    </TouchableOpacity>
  );
};

export default SocialButton;
