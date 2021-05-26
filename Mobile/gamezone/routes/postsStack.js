import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Posts from '../screens/posts';
import ReviewDetails from '../screens/reviewDetails';

const screens = {
  Posts: {
    screen: Posts,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Posts' navigation={navigation} />
      }
    },
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: 'Post Details',
    }
  },
};

// home stack navigator screens
const PostsStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 }
  }
});

export default PostsStack;


