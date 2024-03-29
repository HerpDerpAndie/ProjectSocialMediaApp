/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler'
import React from 'react';
import { SafeAreaView } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import MainNavigator from './src/navigator/MainNavigator';

const App = () => {
  return(
    <SafeAreaView style = {{ 
      flex: 1
    }}>
      <MainNavigator/>
    </SafeAreaView>
  );
}

export default App;
