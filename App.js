import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";

import Home from './screens/Home'
import CameraScreen from './screens/CameraScreen'
const MainNavigator=createStackNavigator({
  Home:{screen:Home},
  CameraScreen:{screen:CameraScreen}
},{
  defaultNavigationOptions:{
    headerTintColor:"#FFF",
    headerStyle:{
      backgroundColor:"#BA2F16"
    }
  }
})


const App =createAppContainer(MainNavigator);

export default App
