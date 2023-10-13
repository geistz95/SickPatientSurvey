import * as React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

class Summary extends Component{
    render(){
        <View>
            <Text style={styles.text}>Total Participants: {this.props.navigation.getParam('param2','surveysTaken')}</Text>
            <Text style={styles.text}>People with Family Primary Care Physicians : {this.props.navigation.getParam('param1','hasFPCP')}</Text>
            <Button title="Go to Results" onPress={()=>this.props.navigation.navigate('Go to Home')}/>
        </View>
    }
}