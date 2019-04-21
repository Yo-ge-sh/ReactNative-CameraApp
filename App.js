import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from './screens/Home';
import CameraScreen from './screens/CameraScreen';


const MainNavigator = createStackNavigator(
  {
    Home: {screen: Home},
    Camera: { screen: CameraScreen }
  },
  {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#E74292'
      },
      headerTitleStyle: {
        color: "#fff"
      }
    }
  }
);

const App = createAppContainer(MainNavigator);
export default App;
