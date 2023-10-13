import * as React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

class Survey extends Component{
    constructor(){
        super();
      
        this.state = {
          screen : 'home',
          feeling:'',
          pain:'',
          sleep:'',
          anxiety:'',
          stress:'',
          fpcpResponse:'',
          hasFPCP:0,
          surveysTaken:0
        };
      }
      handleSubmission=()=>{
        this.setState(prevState => {{
          //Every time a survey is taken, increment it by 1
          surveysTaken:prevState.surveysTaken+1;
          //If a patient has a family primary care doctor, increment by 1
          hasFPCP:prevState.hasFPCP+(this.state.fpcpResponse.toLocaleUpperCase==="YES"? 1:0);
          screen:'summary'
        }
      });
      //Resets form for the next time the survey is taken
      this.setState({feeling:'',pain:'',sleep:'',anxiety:'',stress:'',fpcpResponse:''});
    }
    render(){
        <View>
            <Text style={styles.text}>How well are you feeling today on the scale of 0 to 10</Text>
            <TextInput style={styles.inputText} value={this.state.feeling} onChangeText={(text)=> this.setState({feeling:text})} keyboardType="numeric"/>
            <Text style={styles.text}>How much pain are you in today on the scale of 0 to 10</Text>
            <TextInput style={styles.inputText} value={this.state.pain} onChangeText={(text)=> this.setState({pain:text})} keyboardType="numeric"/>
            <Text style={styles.text}>How much sleep in hours are you getting lately</Text>
            <TextInput style={styles.inputText} value={this.state.sleep} onChangeText={(text)=> this.setState({sleep:text})} keyboardType="numeric"/>
            <Text style={styles.text}>How anxious are you today on the scale of 0 to 10</Text>
            <TextInput style={styles.inputText} value={this.state.anxiety} onChangeText={(text)=> this.setState({anxiety:text})} keyboardType="numeric"/>
            <Text style={styles.text}>How much stress are you under</Text>
            <TextInput style={styles.inputText} value={this.state.stress} onChangeText={(text)=> this.setState({stress:text})} keyboardType="numeric"/>
            <Button title="Home" onPress={()=>this.props.navigation.navigate('Home')}/>
            <Button title="Submit" onPress={()=>this.props.navigation.navigate('Result', {param1:hasFPCP, param2:surveysTaken})}/>
        </View>
    }

}
export default Survey;