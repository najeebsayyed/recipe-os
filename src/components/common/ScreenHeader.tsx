import { View, Text, TouchableOpacity, useColorScheme } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ArrowBackIcon from '../../assets/icons/arrow_back.svg';
import type { NavigationProp } from '@react-navigation/native';

type ScreenHeaderProps = {
  title: string;
  classname?: string;
  titleStyle?: string;
  showBack?: boolean;
  rightIcon?: string;
  onRightPress?: () => void;
};

const ScreenHeader = ({
  title,
  classname = '',
  titleStyle = '',
  showBack = true,
}: ScreenHeaderProps) => {
  const navigation =
    useNavigation<NavigationProp<Record<string, object | undefined>>>();
  const isDark = useColorScheme() === 'dark';
  const handleBackPress = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <View className={`pt-14 pb-20 flex-row items-center gap-6 ${classname}`}>
      {/* Left - Back Button */}
      {showBack ? (
        <TouchableOpacity onPress={handleBackPress}>
          <ArrowBackIcon
            pointerEvents="box-none"
            color={isDark ? '#EAEAEA' : '#1f4d42'}
            fill="currentColor"
          />
        </TouchableOpacity>
      ) : (
        <View className="w-6" />
      )}

      {/* Title */}
      <Text
        className={`font-nunitoBold text-xl text-primary dark:text-darkPrimary ${titleStyle}`}
      >
        {title}
      </Text>
    </View>
  );
};

export default ScreenHeader;
