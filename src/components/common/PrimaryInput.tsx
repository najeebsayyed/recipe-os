import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TextInputProps,
} from 'react-native';
import VisibilityIcon from '../../assets/icons/visibility.svg';
import VisibilityOffIcon from '../../assets/icons/visibility_off.svg';
import type { ReactNode } from 'react';

type PrimaryInputProps = TextInputProps & {
  label?: string;
  rightText?: string;
  onRightPress?: () => void;
  type?: 'text' | 'email' | 'password';
  icon?: ReactNode;
};

const PrimaryInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  type = 'text',
  rightText,
  onRightPress,
  icon,
  secureTextEntry,
  ...props
}: PrimaryInputProps) => {
  const [secure, setSecure] = useState(type === 'password' || secureTextEntry);

  const handleToggleSecure = () => setSecure(prev => !prev);

  return (
    <View className="mb-7">
      {/* Label Row */}
      {label ? (
        <View className="flex-row justify-between mb-2">
          <Text className="text-primary dark:text-darkSecondary text-sm font-semibold">
            {label}
          </Text>

          {rightText ? (
            <TouchableOpacity onPress={onRightPress} activeOpacity={0.7}>
              <Text className="text-textSecondary text-xm">{rightText}</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      ) : null}

      {/* Input Field */}
      <View className="flex-row items-center border border-primary rounded-2xl px-4 py-1 bg-white">
        {icon ? <View className="mr-2">{icon}</View> : null}

        <TextInput
          className="flex-1 text-primary font-nunitoMedium text-sm h-12"
          placeholder={placeholder}
          placeholderTextColor="#8FA39D"
          value={value}
          onChangeText={onChangeText}
          keyboardType={type === 'email' ? 'email-address' : 'default'}
          secureTextEntry={secure}
          autoCapitalize={type === 'email' ? 'none' : 'sentences'}
          {...props}
        />

        {/* Password Toggle */}
        {type === 'password' ? (
          <TouchableOpacity onPress={handleToggleSecure} activeOpacity={0.7}>
            {secure ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default PrimaryInput;
