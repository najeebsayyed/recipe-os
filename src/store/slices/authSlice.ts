import { createSlice } from '@reduxjs/toolkit';
import { User } from '@supabase/supabase-js';

interface AuthState {
  user: User | null;
  isGuest: boolean;
}

const initialState: AuthState = {
  user: null,
  isGuest: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isGuest = false; // user logged in → not guest anymore
    },
    clearUser: state => {
      state.user = null;
      state.isGuest = false;
    },
    setGuest: state => {
      state.user = null;
      state.isGuest = true;
    },
  },
});

export const { setUser, clearUser, setGuest } = authSlice.actions;
export default authSlice.reducer;
