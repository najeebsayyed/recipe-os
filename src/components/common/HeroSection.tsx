import { View, Text } from 'react-native';
import React from 'react';
interface HeroSectionProps {
  title: string;
  subtitle: string;
  classname?: string;
  titleStyle?: string;
  subtitleStyle?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  classname = '',
  titleStyle = '',
  subtitleStyle = '',
}) => {
  return (
    <View className={` mt-20 mb-16 px-6 ${classname}`}>
      <Text className={`font-nunitoBold text-xl text-primary ${titleStyle}`}>
        {title}
      </Text>

      <Text
        className={`font-nunitoRegular text-md text-primary mt-1 ${subtitleStyle}`}
      >
        {subtitle}
      </Text>
    </View>
  );
};

export default HeroSection;
