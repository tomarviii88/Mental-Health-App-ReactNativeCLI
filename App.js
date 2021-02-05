import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import AuthFlow from './AuthFlow';

export default function App() {
  return (
    <Provider store={store}>
      <AuthFlow />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
