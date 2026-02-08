import { supabase } from './client';

// SIGN UP
export const signUp = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  return { data, error };
};

// LOGIN
export const logIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return { data, error };
};

// LOGOUT
export const signOut = async () => {
  return await supabase.auth.signOut();
};
