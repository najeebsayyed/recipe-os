import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import ArrowBackIcon from '../../assets/icons/arrow_back.svg';
import type { NavigationProp } from '@react-navigation/native';

type AppHeaderProps = {
  title: string;
  classname?: string;
  titleStyle?: string;
  showBack?: boolean;
  rightIcon?: string;
  onRightPress?: () => void;
};

const AppHeader = ({
  title,
  classname = '',
  titleStyle = '',
  showBack = true,
  rightIcon,
  onRightPress,
}: AppHeaderProps) => {
  const navigation =
    useNavigation<NavigationProp<Record<string, object | undefined>>>();

  const handleBackPress = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <View
      className={`pt-14 pb-4 flex-row items-center justify-between px-4 ${classname}`}
    >
      {/* Left - Back Button */}
      {showBack ? (
        <TouchableOpacity onPress={handleBackPress}>
          <ArrowBackIcon pointerEvents="box-none" height={24} width={24} />
        </TouchableOpacity>
      ) : (
        <View className="w-6" />
      )}

      {/* Title */}
      <Text className={`font-nunitoBold text-xl text-primary ${titleStyle}`}>
        {title}
      </Text>

      {/* Right Icon */}
      {rightIcon ? (
        <TouchableOpacity onPress={onRightPress}>
          <Icon name={rightIcon} size={22} color="#000" />
        </TouchableOpacity>
      ) : (
        <View className="w-6" />
      )}
    </View>
  );
};

export default AppHeader;
