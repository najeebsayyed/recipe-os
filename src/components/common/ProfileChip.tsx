import {
  TouchableOpacity,
  TouchableOpacityProps,
  useColorScheme,
} from 'react-native';
import React from 'react';
import HeroSection from './HeroSection';
import ArrowForwardIcon from '../../assets/icons/arrow_forward.svg';
type ProfileChipProps = TouchableOpacityProps & {
  title: string;
  subtitle: string;
};

const ProfileChip = ({ title, subtitle, ...props }: ProfileChipProps) => {
  const isDark = useColorScheme() === 'dark';
  return (
    <TouchableOpacity className="flex-row justify-between  py-3" {...props}>
      <HeroSection title={title} subtitle={subtitle} />
      <ArrowForwardIcon
        fill="currentColor"
        color={isDark ? '#EAEAEA' : '#1f4d42'}
      />
    </TouchableOpacity>
  );
};

export default ProfileChip;
