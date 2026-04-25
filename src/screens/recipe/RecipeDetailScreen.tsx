import React from 'react';
import { Text, ScrollView } from 'react-native';

const RecipeDetailScreen = ({ route }: any) => {
  const { recipe } = route.params;

  return (
    <ScrollView className="flex-1 bg-white p-5">
      <Text className="text-2xl font-bold mb-4">{recipe.name}</Text>

      <Text className="font-semibold mb-2">Ingredients:</Text>
      {recipe.ingredients.map((item: string, i: number) => (
        <Text key={i}>• {item}</Text>
      ))}

      <Text className="font-semibold mt-4 mb-2">Steps:</Text>
      {recipe.steps.map((step: string, i: number) => (
        <Text key={i}>
          {i + 1}. {step}
        </Text>
      ))}

      {recipe.missing?.length > 0 && (
        <>
          <Text className="font-semibold mt-4 mb-2">Missing:</Text>
          {recipe.missing.map((item: string, i: number) => (
            <Text key={i}>• {item}</Text>
          ))}
        </>
      )}
    </ScrollView>
  );
};

export default RecipeDetailScreen;
