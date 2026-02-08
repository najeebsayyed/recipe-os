import { supabase } from './client';

export const getRecipes = async () => {
  return await supabase.from('recipes').select('*');
};

export const addRecipe = async (data: any) => {
  return await supabase.from('recipes').insert(data);
};
