import React from 'react';
import { View, Text } from 'react-native';
import TextChip from '../common/TextChip';

type RecipeSectionProps = {
  title: string;
  data: string[];
  numbered?: boolean; // for steps
  titleClassName?: string;
};

const RecipeSection = ({
  title,
  data,
  numbered = false,
  titleClassName = '',
}: RecipeSectionProps) => {
  if (!data || data.length === 0) return null;

  return (
    <View className="mt-3">
      <TextChip label={title} textClassName={titleClassName} />

      {data.map((item, i) => (
        <Text
          key={i}
          className="font-nunitoSemiBold text-lg text-black dark:text-darkPrimary mb-2"
        >
          {numbered ? `${i + 1}. ` : '• '}
          {item}
        </Text>
      ))}
    </View>
  );
};

export default RecipeSection;
