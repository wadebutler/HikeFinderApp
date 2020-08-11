import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultScreen from './src/screens/ResultScreen';

const navigator = createStackNavigator({
  Search: SearchScreen,
  Results: ResultScreen
})

export default createAppContainer(navigator)