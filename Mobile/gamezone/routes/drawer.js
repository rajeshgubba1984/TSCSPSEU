import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// stacks
import HomeStack from './homeStack';
import PostsStack from './postsStack';
import AccountStack from './accountStack';
import PaymentStack from './paymentStack';
import AboutStack from './aboutStack';
import LoginScreen from './loginScreen';
import InactiveScreen from './inactiveScreen';


// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  Posts: {
    screen: PostsStack,
  },
  Account: {
    screen: AccountStack,
  },
  Payment: {
    screen: PaymentStack,
  },
  About: {
    screen: AboutStack,
  },
});


const RootNavigator = createStackNavigator({
  
  Login: { screen: LoginScreen ,
           navigationBarStyle : {navBarHidden: true },
           navigationOptions: {
           headerShown: false,
           }
  },

  Inactive: { screen: InactiveScreen ,
    navigationBarStyle : {navBarHidden: true },
    navigationOptions: {
    headerShown: false,
    }
  },

  AfterLogin: { screen: RootDrawerNavigator,
    navigationBarStyle : {navBarHidden: true },
    navigationOptions: {
      headerShown: false,
    } },
});




export default createAppContainer(RootNavigator);