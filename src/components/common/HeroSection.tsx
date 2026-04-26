import { View, Text } from 'react-native';

type HeroSectionProps = {
  title: string;
  subtitle: string;
  classname?: string;
  titleStyle?: string;
  subtitleStyle?: string;
};

const HeroSection = ({
  title,
  subtitle,
  classname = '',
  titleStyle = '',
  subtitleStyle = '',
}: HeroSectionProps) => {
  return (
    <View className={` mb-14 ${classname}`}>
      <Text
        className={`font-nunitoBold text-xl text-primary dark:text-darkPrimary  ${titleStyle}`}
      >
        {title}
      </Text>

      <Text
        className={`font-nunitoRegular text-md text-secondary dark:text-darkSecondary  mt-1 ${subtitleStyle}`}
        numberOfLines={2}
      >
        {subtitle}
      </Text>
    </View>
  );
};

export default HeroSection;
