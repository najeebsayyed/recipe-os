import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';

import ScreenHeader from '../../components/common/ScreenHeader';

import MoonIcon from '../../assets/icons/moon.svg';
import RecipeIcon from '../../assets/icons/recipe.svg';
import LanguageIcon from '../../assets/icons/language.svg';

const SettingsScreen = () => {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  return (
    <View className="flex-1 bg-lightBackground dark:bg-darkBackground px-7">
      <ScreenHeader title="Settings" />

      {/* Header */}
      <View className="mb-8">
        <Text className="text-3xl font-nunitoBold text-primary dark:text-darkPrimary">
          Preferences
        </Text>

        <Text className="text-gray-500 mt-2">
          Customize your RecipeOS experience
        </Text>
      </View>

      {/* Recipe Preferences */}
      <TouchableOpacity
        activeOpacity={0.8}
        className="bg-lightCard dark:bg-darkCard rounded-3xl p-5 mb-8"
      >
        <View className="flex-row items-center">
          <View className="h-12 w-12 rounded-2xl bg-primary/10 dark:bg-lightCard items-center justify-center">
            <RecipeIcon width={24} height={24} />
          </View>

          <View className="ml-4 flex-1">
            <Text className="text-lg font-nunitoBold text-primary dark:text-darkPrimary">
              Recipe Preferences
            </Text>

            <Text className="text-secondary dark:text-darkSecondary">
              Dietary & cooking preferences
            </Text>
          </View>

          <Text className="text-gray-400">Coming Soon</Text>
        </View>
      </TouchableOpacity>
      {/* Language */}
      <TouchableOpacity
        activeOpacity={0.8}
        className="bg-lightCard dark:bg-darkCard rounded-3xl p-5 mb-4"
      >
        <View className="flex-row items-center">
          <View className="h-12 w-12 rounded-2xl bg-primary/10 dark:bg-lightCard items-center justify-center">
            <LanguageIcon width={24} height={24} />
          </View>

          <View className="ml-4 flex-1">
            <Text className="text-lg font-nunitoBold text-primary dark:text-darkPrimary">
              Language
            </Text>

            <Text className="text-secondary dark:text-darkSecondary">
              English
            </Text>
          </View>

          <Text className="text-gray-400">Coming Soon</Text>
        </View>
      </TouchableOpacity>

      {/* App Info */}
      <View className="mt-8 items-center">
        <Text className="text-secondary dark:text-darkSecondary">
          RecipeOS v1.0.0
        </Text>

        <Text className="text-gray-400 text-sm mt-2">
          Built with ❤️ for food lovers
        </Text>
      </View>
    </View>
  );
};

export default SettingsScreen;
