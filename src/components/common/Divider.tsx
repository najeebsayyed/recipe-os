import { View, Text } from 'react-native';

type DividerProps = {
  label?: string;
  className?: string;
};

const Divider = ({ label, className = '' }: DividerProps) => {
  return (
    <View className={`flex-row items-center mt-3 ${className}`}>
      <View className="flex-1 h-[2px] bg-border opacity-60" />

      {label ? (
        <Text className="mx-3 text-textSecondary dark:text-darkSecondary text-sm">
          {label}
        </Text>
      ) : null}

      <View className="flex-1 h-[2px] bg-border  opacity-60" />
    </View>
  );
};

export default Divider;
