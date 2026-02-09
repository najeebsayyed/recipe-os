import React from 'react';
import { View, Text } from 'react-native';

interface Props {
  label?: string;
  className?: string;
}

const Divider: React.FC<Props> = ({ label, className = '' }) => {
  return (
    <View className={`flex-row items-center mt-3 ${className}`}>
      <View className="flex-1 h-[2px] bg-border opacity-60" />

      {label && (
        <Text className="mx-3 text-textSecondary text-sm">{label}</Text>
      )}

      <View className="flex-1 h-[2px] bg-border opacity-60" />
    </View>
  );
};

export default Divider;
