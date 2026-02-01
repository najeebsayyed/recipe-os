import { View, Text } from 'react-native';
import React from 'react';
import '../global.css';
import { fontFamily, fontSize } from './theme/typography';
const App = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text
        style={{
          fontFamily: fontFamily.regular,
          fontSize: fontSize.xxxl,
        }}
      >
        Hello
      </Text>

      <Text
        style={{
          fontFamily: fontFamily.medium,
          fontSize: fontSize.xxxl,
        }}
      >
        Hello
      </Text>
      <Text
        style={{
          fontFamily: fontFamily.semiBold,
          fontSize: fontSize.xxxl,
        }}
      >
        Hello
      </Text>
      <Text
        style={{
          fontFamily: fontFamily.bold,
          fontSize: fontSize.xxxl,
        }}
      >
        Hello
      </Text>
    </View>
  );
};

export default App;
