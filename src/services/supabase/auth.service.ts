import { supabase } from './client';
import { store } from '../store';
import { setUser, clearUser } from '../store/slices/authSlice';
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

  if (data?.user) {
    store.dispatch(setUser(data.user));
  }

  return { data, error };
};

// LOGIN
export const logIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (data?.user) {
    store.dispatch(setUser(data.user));
  }
  return { data, error };
};

// LOGOUT
export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (!error) {
    store.dispatch(clearUser());
  }
  return { error };
};
