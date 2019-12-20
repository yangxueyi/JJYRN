import React, { Component } from 'react'
import { Text, StyleSheet, View, StatusBar,Button,Platform } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation';


const TITLE_OFFSET = Platform.OS === 'ios' ? 70 : 56;

export default class splah extends Component {
  
  static navigationOptions = {
    // hidden:false,
    title: 'HomeScreen',
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
      <View style = {styles.container}>
      {/*  设置状态栏的显示与隐藏  hidden={true} */}
      {/*StatusBar：设置顶部状态栏的显示隐藏  */}
      <StatusBar backgroundColor="#ff0000"
          translucent={true}
          hidden={true}
          animated={true}/>

        <Text> one </Text>
        <Button title="go to two" onPress={() => this.props.navigation.replace('Profile')} />
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