import React, { useEffect } from 'react';
import '../global.css';
import { Provider } from 'react-redux';
import { store } from './store';
import RootNavigator from './navigation/RootNavigator';
import { Linking } from 'react-native';
import { supabase } from './services/supabase/client';

const App = () => {
  useEffect(() => {
    const sub = Linking.addEventListener('url', async ({ url }) => {
      console.log('Redirect URL:', url);

      if (url.includes('access_token')) {
        const { data, error } = await supabase.auth.getSession();

        if (error) {
          console.log('Session error:', error);
        } else {
          console.log('User session:', data.session);
        }
      }
    });

    return () => sub.remove();
  }, []);

  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
