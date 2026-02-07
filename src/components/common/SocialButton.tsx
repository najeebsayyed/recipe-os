import React from 'react';
import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  Image,
} from 'react-native';

interface Props extends TouchableOpacityProps {
  title: string;
  icon?: any;
}

const PrimaryButton: React.FC<Props> = ({ title, icon, ...props }) => {
  return (
    <TouchableOpacity
      className="bg-white py-4 rounded-2xl items-center mt-6 mb-6 border border-border flex-row justify-center"
      activeOpacity={0.85}
      {...props}
    >
      {icon && (
        <Image source={icon} className="w-6 h-6 mr-4" resizeMode="contain" />
      )}

      <Text className="text-primary font-nunitoBold text-md">{title}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
