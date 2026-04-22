import { Text, ScrollView } from 'react-native';
import React from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Recipe } from '../../types/recipe';

type RouteParams = {
  recipe: Recipe;
};

const RecipeDetailScreen = () => {
  const route = useRoute<RouteProp<{ params: RouteParams }, 'params'>>();
  const { recipe } = route.params;

  return (
    <ScrollView className="flex-1 bg-white p-5">
      <Text className="text-2xl font-bold mb-3">{recipe.name}</Text>

      <Text className="font-semibold mt-2">Ingredients:</Text>
      {recipe.ingredients.map((item, i) => (
        <Text key={i}>• {item}</Text>
      ))}

      <Text className="font-semibold mt-4">Steps:</Text>
      {recipe.steps.map((step, i) => (
        <Text key={i}>
          {i + 1}. {step}
        </Text>
      ))}

      {recipe.missing.length > 0 && (
        <>
          <Text className="font-semibold text-red-500 mt-4">
            Missing Ingredients:
          </Text>
          {recipe.missing.map((m, i) => (
            <Text key={i}>• {m}</Text>
          ))}
        </>
      )}
    </ScrollView>
  );
};

export default RecipeDetailScreen;
