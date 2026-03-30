import { supabase } from './client';
import { store } from '../../store';
import { setUser, clearUser } from '../../store/slices/authSlice';
import { Linking } from 'react-native';

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

//GOOGLE AUTH

export const signInWithGoogle = async () => {
  console.log('Starting Google login...');

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: 'myapp://auth-callback',
    },
  });

  console.log('Response:', data, error);

  if (error) {
    console.log('Google Sign-In Error:', error);
    return;
  }

  // 🔥 THIS LINE IS THE FIX
  if (data?.url) {
    await Linking.openURL(data.url);
  }
};
