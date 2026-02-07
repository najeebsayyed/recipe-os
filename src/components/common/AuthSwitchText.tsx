import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface Props {
  question: string;
  actionText: string;
  onPress: () => void;
}

const AuthSwitchText: React.FC<Props> = ({ question, actionText, onPress }) => {
  return (
    <View className="flex-row justify-center mt-8">
      <Text className="text-textSecondary text-sm font-nunitoRegular">
        {question}{' '}
      </Text>

      <TouchableOpacity onPress={onPress}>
        <Text className="text-primary text-sm font-nunitoSemiBold">
          {actionText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthSwitchText;
