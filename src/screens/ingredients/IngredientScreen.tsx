import React, { useState } from 'react';
import { View } from 'react-native';
import IngredientItem from '../../components/recipe/IngredientItem';
import IngredientInputBox from '../../components/recipe/IngredientInputBox';
import ToggleRow from '../../components/common/ToggleRow';
import PrimaryButton from '../../components/common/PrimaryButton';
import ScreenHeader from '../../components/common/ScreenHeader';
import { generateRecipe } from '../../services/gemini/geminiApi';
import { useNavigation } from '@react-navigation/native';
import DismissKeyboardView from '../../components/common/DismissKeyboardView';

const IngredientInput = () => {
  const navigation = useNavigation<any>();
  const [allowOther, setAllowOther] = useState(true);
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleAddIngredient = (value: string) => {
    if (ingredients.some(i => i.toLowerCase() === value.toLowerCase())) {
      return;
    }
    setIngredients(prev => [...prev, value]);
  };

  const handleDelete = (index: number) => {
    setIngredients(prev => prev.filter((_, i) => i !== index));
  };

  const handleGenerate = async () => {
    if (ingredients.length === 0) return;

    try {
      setLoading(true);

      const result = await generateRecipe(ingredients);

      navigation.navigate('Recipe', { recipe: result });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DismissKeyboardView>
      <View className="flex-1 bg-lightBackground dark:bg-darkBackground px-7">
        <ScreenHeader title="Add Ingredients" />

        <View className="flex-1 ">
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

        <View className=" pb-6 pt-2">
          <PrimaryButton
            title={loading ? 'Generating...' : 'Create my recipe'}
            onPress={handleGenerate}
          />
        </View>
      </View>
    </DismissKeyboardView>
  );
};

export default IngredientInput;
