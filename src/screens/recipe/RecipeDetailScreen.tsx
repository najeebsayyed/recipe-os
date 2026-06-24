import React, { useEffect, useState } from 'react';
import {
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  View,
} from 'react-native';

import Heart from '../../assets/icons/heart-outline.svg';
import HeartFilled from '../../assets/icons/heart-fill.svg';

import { useSelector } from 'react-redux';

import ScreenHeader from '../../components/common/ScreenHeader';
import Divider from '../../components/common/Divider';
import RecipeSection from '../../components/recipe/RecipeSection';

import { RootState } from '../../store';
import { supabase } from '../../services/supabase/client';

const RecipeDetailScreen = ({ route }: any) => {
  const { recipe } = route.params;

  const user = useSelector((state: RootState) => state.auth.user);

  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      checkSavedRecipe();
    }
  }, []);

  const checkSavedRecipe = async () => {
    const { data } = await supabase
      .from('saved_recipes')
      .select('id')
      .eq('user_id', user.id)
      .eq('recipe_name', recipe.name)
      .single();

    if (data) {
      setSaved(true);
    }
  };

  const toggleSaveRecipe = async () => {
    if (!user) {
      Alert.alert(
        'Login Required',
        'Create an account to save your favorite recipes ❤️',
      );
      return;
    }

    try {
      setLoading(true);

      if (saved) {
        await supabase
          .from('saved_recipes')
          .delete()
          .eq('user_id', user.id)
          .eq('recipe_name', recipe.name);

        setSaved(false);

        Alert.alert('Removed 💔', 'Recipe removed from saved recipes.');
      } else {
        await supabase.from('saved_recipes').insert({
          user_id: user.id,
          recipe_name: recipe.name,
          ingredients: recipe.ingredients,
          steps: recipe.steps,
          missing: recipe.missing,
        });

        setSaved(true);

        Alert.alert('Saved ❤️', 'Recipe saved successfully.');
      }
    } catch (error) {
      console.log(error);

      Alert.alert('Something went wrong', 'Unable to save recipe right now.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-1 bg-lightBackground dark:bg-darkBackground px-7 "
    >
      <ScreenHeader title="Recipe Details" />

      {/* Header Card */}
      <View className="flex-row justify-between items-center">
        <Text className="flex-1 text-2xl font-nunitoBold text-primary dark:text-darkPrimary">
          {recipe.name}
        </Text>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={toggleSaveRecipe}
          className="bg-white dark:bg-darkCard h-14 w-14 rounded-full items-center justify-center"
        >
          {loading ? (
            <ActivityIndicator color="#FF6B35" />
          ) : saved ? (
            <HeartFilled height={30} width={30} color="red" />
          ) : (
            <Heart height={30} width={30} color="red" />
          )}
        </TouchableOpacity>
      </View>
      <Divider />
      <View className="mb-10">
        <RecipeSection title="Ingredients" data={recipe.ingredients} />

        <RecipeSection title="Steps" data={recipe.steps} numbered />

        <RecipeSection
          title="Missing Ingredients"
          data={recipe.missing}
          titleClassName="text-red-500"
        />
        <Divider label="Enjoy your recipe!" />
      </View>
    </ScrollView>
  );
};

export default RecipeDetailScreen;
