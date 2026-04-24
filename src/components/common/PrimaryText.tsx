import { Text, TextProps } from 'react-native';
import type { ReactNode } from 'react';

type PrimaryTextProps = TextProps & {
  children: ReactNode;
  className?: string;
};

const PrimaryText = ({
  children,
  className = '',
  ...props
}: PrimaryTextProps) => {
  return (
    <Text className={`text-textPrimary font-regular ${className}`} {...props}>
      {children}
    </Text>
  );
};

export default PrimaryText;
