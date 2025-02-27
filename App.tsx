/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Navigation from './src/navigation';

function App(): React.JSX.Element {

  return (
    <View style={{ flex: 1 }}>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({

});

export default App;
