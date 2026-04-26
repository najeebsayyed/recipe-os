import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/HomeScreen';
import RecipeDetailScreen from '../screens/recipe/RecipeDetailScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import IngredientScreen from '../screens/ingredients/IngredientScreen';
import AccountScreen from '../screens/profile/AccountScreen';
import SettingsScreen from '../screens/profile/SettingsScreen';
import AboutScreen from '../screens/profile/AboutScreen';

const Stack = createNativeStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Recipe" component={RecipeDetailScreen} />
      <Stack.Screen name="Ingredients" component={IngredientScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
}
