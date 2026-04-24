import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import type { ReactNode } from 'react';

type DismissKeyboardViewProps = {
  children: ReactNode;
};

const DismissKeyboardView = ({ children }: DismissKeyboardViewProps) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View className="flex-1" pointerEvents="box-none">
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default DismissKeyboardView;
