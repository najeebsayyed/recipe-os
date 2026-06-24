import { View, Image, TouchableOpacity, Text, ScrollView } from 'react-native';
import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import HeroSection from '../../components/common/HeroSection';
import PrimaryButton from '../../components/common/PrimaryButton';
import Divider from '../../components/common/Divider';
import ProfileIcom from '../../assets/icons/profile.svg';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { supabase } from '../../services/supabase/client'; // adjust path
import ChefSvg from '../../assets/images/chef.svg';

const HomeScreen = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const firstLetter = user?.user_metadata?.full_name?.[0];
  const navigation = useNavigation<any>();

  const [savedRecipes, setSavedRecipes] = useState<any[]>([]);
  const [loadingRecipes, setLoadingRecipes] = useState(true);

  const isGuest = !user;

  useFocusEffect(
    useCallback(() => {
      if (user) {
        fetchSavedRecipes();
      }
    }, [user]),
  );

  const fetchSavedRecipes = async () => {
    try {
      setLoadingRecipes(true);

      const { data, error } = await supabase
        .from('saved_recipes')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;

      setSavedRecipes(data || []);
    } catch (error) {
      console.log('Error fetching recipes:', error);
    } finally {
      setLoadingRecipes(false);
    }
  };

  return (
    <View className="flex-1 bg-lightBackground dark:bg-darkBackground px-7">
      {/* App Logo and Profile icon */}
      <View className="flex-row justify-between mt-12 items-center  ">
        <Image
          source={require('../../assets/images/appLogo.png')}
          className="h-20 w-24  "
        />
        <TouchableOpacity
          className="bg-border rounded-full h-14 w-14 items-center justify-center"
          onPress={() => {
            navigation.navigate('Profile');
          }}
        >
          {firstLetter ? (
            <Text className="text-primary font-bold text-3xl">
              {firstLetter}
            </Text>
          ) : (
            <ProfileIcom height={40} width={40} />
          )}
        </TouchableOpacity>
      </View>

      {/* Welcome message  */}
      <HeroSection
        classname="mt-14 mb-10"
        title={`Welcome, ${
          user?.user_metadata?.full_name?.split(' ')[0] || 'Foodie'
        } 👋`}
        subtitle="What's in your kitchen?"
        subtitleStyle="text-lg font-nunitoSemiBold"
      />

      {/* Ingredients button */}
      <PrimaryButton
        title={'Add Ingredients!'}
        onPress={() => {
          navigation.navigate('Ingredients');
        }}
      />
      <Divider />

      {/* Saved Recipes */}
      <View className="mt-6 flex-1 ">
        <Text className="text-2xl font-nunitoBold text-primary dark:text-darkPrimary mb-5">
          Saved Recipes
        </Text>

        {savedRecipes.length > 0 ? (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 20 }}
          >
            {savedRecipes.map(recipe => (
              <TouchableOpacity
                key={recipe.id}
                activeOpacity={0.9}
                className="mr-4 mb-4 w-64 bg-border rounded-[28px] p-5 border border-border"
                onPress={() =>
                  navigation.navigate('Recipe', {
                    recipe: {
                      name: recipe.recipe_name,
                      ingredients: recipe.ingredients,
                      steps: recipe.steps,
                      missing: recipe.missing,
                    },
                  })
                }
              >
                {/* Top Badge */}
                <View className="flex-row justify-between items-center mb-4">
                  <View className="bg-primary/10 px-3 py-1 rounded-full">
                    <Text className="text-primary font-nunitoBold text-xs">
                      SAVED
                    </Text>
                  </View>

                  <Text className="text-2xl">❤️</Text>
                </View>

                {/* Recipe Icon */}
                <View className="items-center my-3">
                  <Text className="text-6xl">🍝</Text>
                </View>

                {/* Recipe Name */}
                <Text
                  numberOfLines={2}
                  className="text-xl font-nunitoBold text-lightText dark:text-darkText mt-2"
                >
                  {recipe.recipe_name}
                </Text>

                {/* Ingredients Preview */}
                <Text
                  numberOfLines={3}
                  className="text-gray-500 mt-3 text-sm leading-5"
                >
                  {recipe.ingredients?.slice(0, 4).join(', ')}
                </Text>

                {/* Footer */}
                <View className="flex-row justify-between items-center mt-5">
                  <Text className="text-primary font-nunitoBold">
                    View Recipe
                  </Text>

                  <Text className="text-xl">→</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        ) : (
          <View className="bg-white dark:bg-darkCard rounded-[32px] p-5 items-center border border-border">
            {/* SVG */}
            <View className="bg-primary/10 rounded-full p-6 mb-5">
              <ChefSvg width={90} height={90} />
            </View>

            <Text className="text-2xl font-nunitoBold text-center text-lightText dark:text-darkText">
              {isGuest ? 'Recipes Await You 🍝' : 'No Saved Recipes Yet'}
            </Text>

            <Text className="text-center text-gray-500 mt-3 leading-6">
              {isGuest
                ? 'Discover delicious recipes, save your favorites, and build your personal cookbook.'
                : 'Start exploring recipes and save the ones you love.'}
            </Text>

            <TouchableOpacity
              onPress={() => navigation.navigate('Ingredients')}
              className="mt-6 bg-primary px-8 py-4 rounded-full"
            >
              <Text className="text-white font-nunitoBold">
                Start Cooking 🍳
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default HomeScreen;
