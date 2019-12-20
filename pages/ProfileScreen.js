import React, { Component } from 'react'
import { Text,Button, StyleSheet, View,Platform } from 'react-native'


const TITLE_OFFSET = Platform.OS === 'ios' ? 70 : 56;


export default class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'ProfileScreen',
    headerStyle: {
      backgroundColor: '#f4511e',//标题背景
    },
    headerTintColor: '#fff',//文字颜色
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerTitleStyle:{flex: 1,textAlign:'center'},//设置标题居中

    headerTitleContainerStyle:{
      left: TITLE_OFFSET,
      right: TITLE_OFFSET,
    },




  }
  render() {
 //replace - 用新路由替换当前路由
    return (
      <View style = { styles.container}>
         <Text> ProfileScreen </Text>
         <Button title="go to Main" onPress={() => this.props.navigation.replace('Main')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },

})