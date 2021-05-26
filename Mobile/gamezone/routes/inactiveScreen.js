import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Dimensions, AsyncStorage } from 'react-native';
import { globalStyles } from '../styles/global.js';
import FlatButton from '../shared/button.js';

const {width : WIDTH} = Dimensions.get('window')


export default class InactiveScreen extends Component {

  constructor() {
    super();
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    
  };

    
  render() {

    
      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          
          <Text> Activation link has been sent to your email. </Text>
          <Text> Click the link. </Text>
        </View>
      );
    

    
  }
}


const styles = StyleSheet.create({
  input: {
    width: WIDTH - 55,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
});