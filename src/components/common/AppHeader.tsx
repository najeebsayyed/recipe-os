import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import ArrowBackIcon from '../../assets/icons/arrow_back.svg';
interface AppHeaderProps {
  title: string;
  classname?: string;
  titleStyle?: string;
  showBack?: boolean;
  rightIcon?: string; // icon name
  onRightPress?: () => void;
}

const AppHeader: React.FC<AppHeaderProps> = ({
  title,
  classname = '',
  titleStyle = '',
  showBack = true,
  rightIcon,
  onRightPress,
}) => {
  const navigation = useNavigation();

  return (
    <View
      className={`pt-14 pb-4  flex-row items-center justify-between px-4 ${classname}`}
    >
      {/* Left - Back Button */}
      {showBack ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
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
