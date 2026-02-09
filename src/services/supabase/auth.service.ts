import { supabase } from './client';

// SIGN UP (with full name)
export const signUp = async (
  email: string,
  password: string,
  fullName: string,
) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      },
    },
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
  const { error } = await supabase.auth.signOut();
  return { error };
};
