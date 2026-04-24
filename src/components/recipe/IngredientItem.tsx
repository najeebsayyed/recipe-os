import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import TrashIcon from '../../assets/icons/delete.svg';

interface Props {
  name: string;
  onDelete: () => void;
}

const IngredientItem = ({ name, onDelete }: Props) => {
  return (
    <View className="flex-row justify-between items-center bg-[#ebf5f1] px-5 py-4 rounded-full">
      <Text className="text-lg font-nunitoRegular text-primary">{name}</Text>

      <TouchableOpacity onPress={onDelete}>
        <TrashIcon height={28} width={28} />
      </TouchableOpacity>
    </View>
  );
};

export default IngredientItem;
