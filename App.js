import * as React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen/'
import Survey from './Survey/'
import Summary from './Summary/'
import { createAppContainer } from 'react-navigation';

const Stack = createNativeStackNavigator({

  HomeScreen:{screen:HomeScreen}

});

const AppNavigator = createNativeStackNavigator({
  Home:{screen:HomeScreen}, 
  Survey:{Screen:Survey},
  Result:{Screen:Summary},
  },
  {initialRouteName:"Home"}
);

const AppContainer = createAppContainer(AppNavigator);

class App extends Component{
  render(){
    return <AppContainer/>
  }
}


export default App;