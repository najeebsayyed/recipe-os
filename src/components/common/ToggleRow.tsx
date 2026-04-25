import { View, Text, Switch } from 'react-native';
import React from 'react';

interface Props {
  value: boolean;
  onChange: (val: boolean) => void;
}

const ToggleRow = ({ value, onChange }: Props) => {
  return (
    <View className="flex-row justify-between items-center bg-[#F1ECE5] px-3 py-4 rounded-full mt-6">
      <Text className="text-lg font-nunitoSemiBold text-primary">
        Allow other ingredients?
      </Text>

      <Switch value={value} onValueChange={onChange} />
    </View>
  );
};

export default ToggleRow;
