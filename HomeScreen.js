import * as React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen/'
import Survey from './Survey/'
import Summary from './Summary/'

class HomeScreen extends Component(){
    render(){
      return(
       <View>
         <Text>Home Screen</Text>
         <Button title="Go to Survey" onPress={()=>this.props.navigation.navigate('Survey')}/>
         <Button title="Go to Results" onPress={()=>this.props.navigation.navigate('Result')}/>
        </View>
      );
    }
  }
  
  export default HomeScreen;