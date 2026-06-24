import React from 'react';
import { View, Text } from 'react-native';

type InfoCardProps = {
  label: string;
  value: string;
};

const InfoCard = ({ label, value }: InfoCardProps) => {
  return (
    <View className="bg-card dark:bg-darkCard rounded-3xl p-5 mb-4">
      <Text className="text-gray-500 text-sm">{label}</Text>

      <Text className="text-lg font-nunitoBold text-lightText dark:text-darkText mt-1">
        {value}
      </Text>
    </View>
  );
};

export default InfoCard;
