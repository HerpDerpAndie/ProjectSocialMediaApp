/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';
import MainNavigator from './src/navigator/MainNavigator';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import { profileReducer } from './src/reducer/ProfileReducers';

const rootReducer = combineReducers({
  profileReducer: profileReducer
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <MainNavigator />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
