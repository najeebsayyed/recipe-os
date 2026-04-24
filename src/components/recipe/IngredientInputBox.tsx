import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

interface Props {
  onAdd: (value: string) => void;
}

const IngredientInputBox = ({ onAdd }: Props) => {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    onAdd(trimmed); // 🔥 send to parent
    setInput('');
  };

  return (
    <View className="flex-row items-center border border-primary rounded-2xl px-4 py-2 bg-white ">
      <TextInput
        placeholder="Enter ingredient..."
        value={input}
        onChangeText={setInput}
        onSubmitEditing={handleAdd}
        className="flex-1 text-md text-primary"
        placeholderTextColor="#888"
        returnKeyType="done"
      />

      <TouchableOpacity
        onPress={handleAdd}
        disabled={!input.trim()}
        className={`h-10 w-10 rounded-full items-center justify-center ${
          input.trim() ? 'bg-primary' : 'bg-gray-400'
        }`}
      >
        <Text className="text-white text-xl font-bold">+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default IngredientInputBox;
