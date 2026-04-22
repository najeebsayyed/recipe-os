import { View, Image } from 'react-native';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import HeroSection from '../../components/common/HeroSection';
import PrimaryButton from '../../components/common/PrimaryButton';
import Divider from '../../components/common/Divider';
import IngredientInput from '../../components/recipe/IngredientInput';

import { useNavigation } from '@react-navigation/native';
import { generateRecipe } from '../../services/gemini/geminiApi';

const HomeScreen = () => {
  const [input, setInput] = useState('');
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const user = useSelector((state: RootState) => state.auth.user);
  const navigation = useNavigation<any>();

  // ➕ Add ingredient
  const addIngredient = () => {
    const value = input.trim().toLowerCase();
    if (!value) return;

    if (ingredients.includes(value)) {
      setInput('');
      return;
    }

    setIngredients(prev => [...prev, value]);
    setInput('');
  };

  // ❌ Remove ingredient
  const removeIngredient = (item: string) => {
    setIngredients(prev => prev.filter(i => i !== item));
  };

  // 🚀 Generate + Navigate
  const handleGenerate = async () => {
    if (ingredients.length === 0) return;
    console.log('BUTTON CLICKED'); // 👈 add this
    try {
      setLoading(true);

      const res = await generateRecipe(ingredients);

      // 👉 Navigate instead of setState
      navigation.navigate('Recipe', { recipe: res });
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-white px-7">
      <View pointerEvents="none">
        <Image
          source={require('../../assets/images/appLogo.png')}
          className="w-40 h-40 mt-6 absolute"
        />
      </View>

      <HeroSection
        classname="mt-36 mb-16"
        title={`Hello, ${
          user?.user_metadata?.full_name?.split(' ')[0] || 'Foodie'
        } 👋`}
        subtitle="What's in your kitchen?"
        subtitleStyle="text-lg font-nunitoSemiBold"
      />

      <IngredientInput
        input={input}
        setInput={setInput}
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
      />

      <PrimaryButton
        title={loading ? 'Generating...' : 'Generate Recipe'}
        onPress={handleGenerate}
      />

      <Divider />
    </View>
  );
};

export default HomeScreen;
