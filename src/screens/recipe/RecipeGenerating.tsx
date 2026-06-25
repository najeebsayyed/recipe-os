import React from 'react';
import { Modal, View, Text, ActivityIndicator } from 'react-native';

type Props = {
  visible: boolean;
};

const RecipeGenerating = ({ visible }: Props) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View className="flex-1 items-center justify-center bg-black/60">
        <View className="w-[85%] rounded-3xl bg-zinc-900 p-8 items-center">
          <ActivityIndicator size="large" color="#F97316" />

          <Text className="mt-6 text-xl font-bold text-white">
            Creating your recipe...
          </Text>

          <Text className="mt-3 text-center text-zinc-400">
            AI is selecting ingredients, calculating nutrition, and preparing
            the perfect recipe.
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default RecipeGenerating;
