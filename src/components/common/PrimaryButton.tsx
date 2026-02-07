import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

interface Props extends TouchableOpacityProps {
  title: string;
}

const PrimaryButton: React.FC<Props> = ({ title, ...props }) => {
  return (
    <TouchableOpacity
      className="bg-primary py-4 rounded-2xl items-center mb-7 mt-3 "
      activeOpacity={0.8}
      {...props}
    >
      <Text className="text-white font-nunitoBold text-md">{title}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
