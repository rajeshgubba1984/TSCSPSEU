import React from 'react';
import { StyleSheet, View, Text, AsyncStorage} from 'react-native';
import { globalStyles } from '../styles/global';

export default function About() {
  
  clearAppData();

  return (
    <View style={globalStyles.container}>
      <Text>About Screen</Text>
    </View>
  );
}

const clearAppData = async function() {
  try {
      await AsyncStorage.clear();
      
  } catch (error) {
      console.error('Error clearing app data.');
  }
}