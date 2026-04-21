import { View, Image } from 'react-native';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import HeroSection from '../../components/common/HeroSection';

import PrimaryButton from '../../components/common/PrimaryButton';
import Divider from '../../components/common/Divider';
import IngredientInput from '../../components/recipe/IngredientInput';

const HomeScreen = () => {
  const [input, setInput] = useState('');
  const [ingredients, setIngredients] = useState<string[]>([]);

  const user = useSelector((state: RootState) => state.auth.user);

  //  Add ingredient
  const addIngredient = () => {
    const value = input.trim().toLowerCase();
    if (!value) return;

    // prevent duplicates
    if (ingredients.includes(value)) {
      setInput('');
      return;
    }

    setIngredients(prev => [...prev, value]);
    setInput('');
  };

  // Remove ingredient
  const removeIngredient = (item: string) => {
    setIngredients(prev => prev.filter(i => i !== item));
  };

  return (
    <View className="flex-1 bg-white px-7">
      {/* Logo */}
      <Image
        source={require('../../assets/images/appLogo.png')}
        className="w-40 h-40 mt-6 absolute"
      />

      {/* Greeting */}
      <HeroSection
        classname="mt-48 mb-8"
        title={`Hello, ${
          user?.user_metadata?.full_name?.split(' ')[0] || 'Foodie'
        } 👋`}
        subtitle="What's in your kitchen?"
        subtitleStyle="text-lg font-nunitoSemiBold"
      />

      {/* Input + Plus */}

      <IngredientInput
        input={input}
        setInput={setInput}
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
      />

      {/* Generate Button */}
      <PrimaryButton
        title="Generate Recipe !"
        onPress={() => {
          console.log('Ingredients:', ingredients);
        }}
      />

      {/* Divider */}
      <Divider />
    </View>
  );
};

export default HomeScreen;
