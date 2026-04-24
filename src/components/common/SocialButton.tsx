import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  Image,
  ImageSourcePropType,
} from 'react-native';

type SocialButtonProps = TouchableOpacityProps & {
  title: string;
  icon?: ImageSourcePropType;
};

const SocialButton = ({
  title,
  icon,
  disabled,
  ...props
}: SocialButtonProps) => {
  return (
    <TouchableOpacity
      className={`bg-white py-3 rounded-2xl items-center mt-6 mb-6 border border-primary flex-row justify-center ${
        disabled ? 'opacity-50' : ''
      }`}
      activeOpacity={0.85}
      disabled={disabled}
      {...props}
    >
      {icon ? (
        <Image source={icon} className="w-6 h-6 mr-4" resizeMode="contain" />
      ) : null}

      <Text className="text-primary font-nunitoBold text-lg">{title}</Text>
    </TouchableOpacity>
  );
};

export default SocialButton;
