import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

type TextChipProps = {
  label: string;
  onPress?: () => void;
  className?: string;
  textClassName?: string; // ✅ added
};

const TextChip = ({
  label,
  onPress,
  className = '',
  textClassName = '',
}: TextChipProps) => {
  const Wrapper = onPress ? TouchableOpacity : View;

  return (
    <Wrapper
      onPress={onPress}
      className={`bg-border px-4 py-2 mt-6 mb-4 rounded-full self-start ${className}`}
    >
      <Text
        className={`text-primary font-nunitoBold text-lg ${textClassName}`} // ✅ merged
      >
        {label}
      </Text>
    </Wrapper>
  );
};

export default TextChip;
