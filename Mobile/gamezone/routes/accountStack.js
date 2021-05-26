import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Account from '../screens/account';

const screens = {
  Account: {
    screen: Account,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Account' navigation={navigation} />
      }
    },
  },
}

const AccountStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});

export default AccountStack;