import React from 'react';
import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  View,
} from 'react-native';

type PrimaryButtonProps = TouchableOpacityProps & {
  title: string;
  LeftIcon?: React.ReactNode;
  RightIcon?: React.ReactNode;
  className?: string;
};

const PrimaryButton = ({
  title,
  LeftIcon,
  RightIcon,
  disabled,
  className = '',
  ...props
}: PrimaryButtonProps) => {
  const hasIcons = LeftIcon || RightIcon;

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      disabled={disabled}
      className={`bg-primary h-16 rounded-2xl ${
        hasIcons
          ? 'flex-row items-center justify-between px-5'
          : 'items-center justify-center'
      } ${disabled ? 'opacity-50' : ''} ${className}`}
      {...props}
    >
      {hasIcons ? (
        <>
          <View className="flex-row items-center">
            {LeftIcon && (
              <View className="h-11 w-11 rounded-xl bg-lightCard items-center justify-center">
                {LeftIcon}
              </View>
            )}

            <Text className="text-white text-xl font-nunitoBold ml-4">
              {title}
            </Text>
          </View>

          {RightIcon ? <View>{RightIcon}</View> : <View className="w-6" />}
        </>
      ) : (
        <Text className="text-white text-xl font-nunitoBold">{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default PrimaryButton;
