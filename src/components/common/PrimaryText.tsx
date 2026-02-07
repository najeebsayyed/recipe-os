import React from 'react';
import { Text, TextProps } from 'react-native';

interface Props extends TextProps {
  children: React.ReactNode;
  className?: string;
}

const PrimaryText: React.FC<Props> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <Text className={`text-textPrimary font-regular ${className}`} {...props}>
      {children}
    </Text>
  );
};

export default PrimaryText;
