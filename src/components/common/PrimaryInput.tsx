import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import VisibilityIcon from '../../assets/icons/visibility.svg';
import VisibilityOffIcon from '../../assets/icons/visibility_off.svg';

interface Props {
  label?: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  type?: 'text' | 'email' | 'password';
  rightText?: string;
  onRightPress?: () => void;
  icon?: React.ReactNode;
}

const PrimaryInput: React.FC<Props> = ({
  label,
  placeholder,
  value,
  onChangeText,
  type = 'text',
  rightText,
  onRightPress,
  icon,
}) => {
  const [secure, setSecure] = useState(type === 'password');

  return (
    <View className="mb-7 ">
      {/* Label Row */}
      {label && (
        <View className="flex-row justify-between mb-2">
          <Text className="text-primary text-sm font-semibold">{label}</Text>

          {rightText && (
            <TouchableOpacity onPress={onRightPress}>
              <Text className="text-textSecondary text-xm ">{rightText}</Text>
            </TouchableOpacity>
          )}
        </View>
      )}

      {/* Input Field */}
      <View className="flex-row items-center border border-border rounded-2xl px-4 py-1 bg-white ">
        {icon && <View className="mr-2">{icon}</View>}

        <TextInput
          className="flex-1 text-primary font-nunitoMedium text-sm h-12"
          placeholder={placeholder}
          placeholderTextColor="#9FB4AE"
          value={value}
          onChangeText={onChangeText}
          keyboardType={type === 'email' ? 'email-address' : 'default'}
          secureTextEntry={secure}
        />

        {/* Password Toggle */}
        {type === 'password' && (
          <TouchableOpacity onPress={() => setSecure(!secure)}>
            {secure ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default PrimaryInput;
