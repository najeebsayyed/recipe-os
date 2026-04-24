import { View, Text, TouchableOpacity } from 'react-native';

type AuthSwitchTextProps = {
  question: string;
  actionText: string;
  onPress: () => void;
};

const AuthSwitchText = ({
  question,
  actionText,
  onPress,
}: AuthSwitchTextProps) => {
  return (
    <View className="flex-row justify-center mt-8">
      <Text className="text-textSecondary text-sm font-nunitoRegular">
        {question}{' '}
      </Text>

      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <Text className="text-primary text-sm font-nunitoSemiBold">
          {actionText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthSwitchText;
