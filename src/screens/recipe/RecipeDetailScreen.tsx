import React from 'react';
import { Text, ScrollView } from 'react-native';
import ScreenHeader from '../../components/common/ScreenHeader';
import Divider from '../../components/common/Divider';
import RecipeSection from '../../components/recipe/RecipeSection';

const RecipeDetailScreen = ({ route }: any) => {
  const { recipe } = route.params;

  return (
    <ScrollView className="flex-1 bg-white px-7">
      <ScreenHeader title="Recipe Details" />
      <Text className="text-xl font-nunitoSemiBold text-primary ">
        {recipe.name}
      </Text>
      <Divider />
      <RecipeSection title="Ingredients:" data={recipe.ingredients} />
      <RecipeSection title="Steps:" data={recipe.steps} numbered />
      <RecipeSection
        title="Missing:"
        data={recipe.missing}
        titleClassName="text-error"
      />
    </ScrollView>
  );
};

export default RecipeDetailScreen;
