import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import helpers, { getPosts } from '../services/restHelper';

export default  function Posts({ navigation }) {

  const [list, setList] = useState("")
  requestBody = {}
  var res =  getPosts(requestBody);
  //var res2 = JSON.parse(res);

  console.log('posts:', res["posts"]);

  //this.state.setList(res.posts);
  


  

  return (
    <View style={globalStyles.container}>
      
      <FlatList data={res["posts"]} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
          <Card>
            <Text style={globalStyles.titleText} >{ item.Title }</Text>
          </Card>
        </TouchableOpacity>
      )} 
      keyExtractor={(item, index) => item.PostId.toString()} />

      
    </View>
  );
}