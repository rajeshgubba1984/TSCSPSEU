import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Payment from '../screens/payment';

const screens = {
  Payment: {
    screen: Payment,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Payment' navigation={navigation} />
      }
    },
  },
}

const PaymentStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});

export default PaymentStack;