import React, { useState } from 'react';
import { View } from 'react-native';
import IngredientItem from '../../components/recipe/IngredientItem';
import IngredientInputBox from '../../components/recipe/IngredientInputBox';
import ToggleRow from '../../components/common/ToggleRow';
import PrimaryButton from '../../components/common/PrimaryButton';
import ScreenHeader from '../../components/common/ScreenHeader';

const IngredientInput = () => {
  const [allowOther, setAllowOther] = useState(true);
  const [ingredients, setIngredients] = useState<string[]>([]);

  const handleAddIngredient = (value: string) => {
    if (ingredients.some(i => i.toLowerCase() === value.toLowerCase())) {
      return;
    }
    setIngredients(prev => [...prev, value]);
  };

  const handleDelete = (index: number) => {
    setIngredients(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <View className="flex-1 bg-white">
      {/* HEADER */}
      <ScreenHeader title="Add Ingredients" />
      {/* CONTENT */}
      <View className="flex-1 px-7">
        <IngredientInputBox onAdd={handleAddIngredient} />
        <ToggleRow value={allowOther} onChange={setAllowOther} />
        <View className="mt-4 gap-3">
          {ingredients.map((item, index) => (
            <IngredientItem
              key={`${item}-${index}`}
              name={item}
              onDelete={() => handleDelete(index)}
            />
          ))}
        </View>
      </View>

      {/* FIXED BUTTON */}
      <View className="px-7 pb-6 pt-2 bg-white">
        <PrimaryButton title="Create my recipe" />
      </View>
    </View>
  );
};

export default IngredientInput;
