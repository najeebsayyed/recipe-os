import { View, Text } from 'react-native';
import React from 'react';
interface HeroSectionProps {
  title: string;
  subtitle: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
  return (
    <View className="items-center mt-24 mb-20 px-6">
      <Text className="font-nunitoBold text-xl  text-primary text-center">
        {title}
      </Text>

      <Text className=" font-nunitoRegular text-md text-primary mt-1 text- text-center">
        {subtitle}
      </Text>
    </View>
  );
};

export default HeroSection;
