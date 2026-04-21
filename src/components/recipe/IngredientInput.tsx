import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

interface Props {
  input: string;
  setInput: (text: string) => void;
  ingredients: string[];
  addIngredient: () => void;
  removeIngredient: (item: string) => void;
}

const IngredientInput: React.FC<Props> = ({
  input,
  setInput,
  ingredients,
  addIngredient,
  removeIngredient,
}) => {
  return (
    <View className="border border-primary rounded-2xl px-3 py-2 bg-white mb-6">
      <View className="flex-row flex-wrap items-center">
        {/* Icon */}

        {/* Chips */}
        {ingredients.map((item, index) => (
          <View
            key={index}
            className="flex-row items-center bg-gray-200 px-2 py-1 rounded-full mx-1 my-1"
          >
            <Text className="text-black text-sm mr-1">{item}</Text>
            <TouchableOpacity onPress={() => removeIngredient(item)}>
              <Text className="text-black font-bold">✕</Text>
            </TouchableOpacity>
          </View>
        ))}

        {/* Input */}
        <TextInput
          className="flex-1 min-w-[80px] text-primary"
          placeholder="Add ingredient..."
          placeholderTextColor="#8FA39D"
          value={input}
          onChangeText={setInput}
          onSubmitEditing={addIngredient}
          cursorColor="black"
        />

        {/* Plus Button */}
        <TouchableOpacity onPress={addIngredient} className="border-primary  ">
          <Text className="text-xl ml-2 text-primary font-semibold  ">＋</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IngredientInput;
