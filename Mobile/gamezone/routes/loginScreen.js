import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Button, Dimensions, AsyncStorage } from 'react-native';
import { globalStyles } from '../styles/global.js';
import FlatButton from '../shared/button.js';
import helpers, { userSearch } from '../services/restHelper';
import { stringify } from 'qs';

const { width: WIDTH } = Dimensions.get('window')


export default class LoginScreen extends Component {

  constructor() {
    super();
    this.state = {
      mobile: '',
      pran: '',
      email: ''
    };
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const validUser = await AsyncStorage.getItem('validUser');
    const userToken = await AsyncStorage.getItem('userToken');
    if (validUser == null) {
      console.log('New user, login screen open');
      return;
    }

    requestBody = {}
    requestBody["mobile"] = await AsyncStorage.getItem('phonenumber');
    requestBody["email"] = await AsyncStorage.getItem('email');
    requestBody["id"] = await AsyncStorage.getItem('id');
    requestBody["pran"] = await AsyncStorage.getItem('pran');

    var user = userSearch(requestBody);
    await AsyncStorage.setItem('validUser', user.user.UserActivated.toString());
    await AsyncStorage.setItem('userToken', user.token);
    console.log("******** " + user.token);
    const temp1 = await AsyncStorage.getItem('validUser');
    console.log('stored1 ', temp1);
    const temp2 = await AsyncStorage.getItem('userToken');
    console.log('stored2 ', temp2);



    if (user.user.UserActivated) {

      this.props.navigation.replace('AfterLogin');

    } else {
      this.props.navigation.replace('Inactive');
    }


  };

  _storeData = async () => {
    //await AsyncStorage.setItem('validUser', 'jhgjhgjgjhgj');

  }

  handleLoginButton = async () => {
    console.log('=========New user details==============');
    console.log(this.state.mobile);
    console.log(this.state.pran);
    console.log(this.state.email);

    requestBody = {}
    requestBody["mobile"] = this.state.mobile;
    requestBody["email"] = this.state.email;
    requestBody["pran"] = this.state.pran;

    var user = await userSearch(requestBody);

    if (user != null) {
      console.log('User returned existing or created', user);
      console.log('user active: ', user.user.UserActivated)
      AsyncStorage.setItem('validUser', user.user.UserActivated.toString());
      AsyncStorage.setItem('userToken', user.token);
      AsyncStorage.setItem('mobile', user.mobile);
      AsyncStorage.setItem('email', user.email);
      AsyncStorage.setItem('pran', user.pran);
      AsyncStorage.setItem('id', user.id);

      if (user.user.UserActivated) {
        this.props.navigation.replace('AfterLogin');

      } else {
        this.props.navigation.replace('Inactive');
      }
    }
    this._storeData();
    //this.props.navigation.replace('Inactive');
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

        <TextInput
          style={styles.input}
          placeholder='Mobile'
          keyboardType='numeric'
          onChangeText={text => this.setState({ mobile: text })}
          //onBlur={props.handleBlur('mobile')} 
          value={this.state.mobile}
        />

        <TextInput
          style={styles.input}
          placeholder='PRAN Number'
          onChangeText={text => this.setState({ pran: text })}
          //onBlur={props.handleBlur('pran')} 
          value={this.state.pran}
        />

        <TextInput
          style={styles.input}
          placeholder='Email'
          onChangeText={text => this.setState({ email: text })}
          //onBlur={props.handleBlur('email')} 
          value={this.state.email}
        />

        <FlatButton onPress={this.handleLoginButton} text='Submit' />

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