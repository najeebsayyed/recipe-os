import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';

import ScreenHeader from '../../components/common/ScreenHeader';

const AboutScreen = () => {
  return (
    <ScrollView
      className="flex-1 bg-lightBackground dark:bg-darkBackground"
      contentContainerStyle={{
        paddingHorizontal: 28,
        paddingBottom: 40,
      }}
      showsVerticalScrollIndicator={false}
    >
      <ScreenHeader title="About RecipeOS" />

      {/* App Header */}
      <View className="items-center mb-8">
        <Image
          source={require('../../assets/images/appLogo.png')}
          className="h-36 w-40 self-center "
        />

        <Text className="text-3xl font-nunitoBold text-primary dark:text-darkPrimary mt-4">
          RecipeOS
        </Text>

        <Text className="text-secondary dark:text-darkSecondary mt-1">
          AI Powered Recipe Generator
        </Text>

        <View className="bg-primary/10 dark:bg-lightCard px-4 py-2 rounded-full mt-4">
          <Text className="text-primary  font-nunitoBold">Version 1.0.0</Text>
        </View>
      </View>

      {/* About Card */}
      <View className="bg-lightCard dark:bg-darkCard rounded-3xl p-5 mb-5">
        <Text className="text-xl font-nunitoBold text-primary dark:text-darkPrimary mb-3">
          About RecipeOS
        </Text>

        <Text className="text-secondary dark:text-darkSecondary leading-6">
          RecipeOS helps you discover delicious recipes using ingredients
          already available in your kitchen. Simply add ingredients, generate
          AI-powered recipes, and save your favourites for later.
        </Text>
      </View>

      {/* Features Card */}
      <View className="bg-lightCard dark:bg-darkCard rounded-3xl p-5 mb-5">
        <Text className="text-xl font-nunitoBold text-primary dark:text-darkPrimary mb-4">
          Features
        </Text>

        <Text className="text-secondary dark:text-darkSecondary mb-3">
          🍳 Generate recipes instantly
        </Text>

        <Text className="text-secondary dark:text-darkSecondary mb-3">
          🧠 AI-powered cooking suggestions
        </Text>

        <Text className="text-secondary dark:text-darkSecondary mb-3">
          ❤️ Save favourite recipes
        </Text>

        <Text className="text-secondary dark:text-darkSecondary mb-3">
          📱 Beautiful and responsive design
        </Text>

        <Text className="text-secondary dark:text-darkSecondary">
          🌙 Dark mode support
        </Text>
      </View>

      {/* Footer */}
      <View className="items-center mt-4">
        <Text className="text-secondary dark:text-darkSecondary text-center">
          Made with ❤️ for food lovers
        </Text>

        <Text className="text-gray-400 text-sm mt-2">© 2026 RecipeOS</Text>
      </View>
    </ScrollView>
  );
};

export default AboutScreen;
