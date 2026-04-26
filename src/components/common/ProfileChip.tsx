import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import React from 'react';
import HeroSection from './HeroSection';
import ArrowForwardIcon from '../../assets/icons/arrow_forward.svg';
type ProfileChipProps = TouchableOpacityProps & {
  title: string;
  subtitle: string;
};

const ProfileChip = ({ title, subtitle, ...props }: ProfileChipProps) => {
  return (
    <TouchableOpacity className="flex-row justify-between  py-3" {...props}>
      <HeroSection title={title} subtitle={subtitle} />
      <ArrowForwardIcon />
    </TouchableOpacity>
  );
};

export default ProfileChip;
