import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

type PrimaryButtonProps = TouchableOpacityProps & {
  title: string;
};

const PrimaryButton = ({ title, disabled, ...props }: PrimaryButtonProps) => {
  return (
    <TouchableOpacity
      className={`bg-primary py-4 rounded-2xl items-center mb-7 mt-3 ${
        disabled ? 'opacity-50' : ''
      }`}
      activeOpacity={0.8}
      disabled={disabled}
      {...props}
    >
      <Text className="text-white font-nunitoBold text-md">{title}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
