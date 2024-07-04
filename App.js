import React from 'react';
import { View } from 'react-native';
import HelloWorld from './components/hello';

export default function App() {
  return (
    <View>
      <HelloWorld nama="diana" />
      <HelloWorld nama="shinta" />
    </View>
  );
}
