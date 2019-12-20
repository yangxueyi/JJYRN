import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'


import splah from './pages/splah'
import ProfileScreen from './pages/ProfileScreen'
import Main from './pages/Main'

import InvestDetail from './pages/InvestDetail'
import Agreement from './pages/Agreement'

import Login from './pages/LoginScreen'

import RegisterScreen from './pages/RegisterScreen'

// import CustomTabBar from './pages/CustomTabBar'



const navigator = createStackNavigator({
  splah: { screen: splah },
  Profile: { screen: ProfileScreen },
  Main: { screen: Main },
  Login: { screen: Login},
  InvestDetail: {screen: InvestDetail},
  Agreement: {screen: Agreement},
  RegisterScreen: {screen: RegisterScreen},
  // CustomTabBar: {screen:CustomTabBar},

},
{
  initialRouteName: 'Main', // 设置默认的页面
  //将app.js中的顶部导航栏隐藏
  navigationOptions: {
    header: null,
    // animationEnabled: true,
    // gesturesEnabled: true,
},
 
},


 


)



const AppContainer = createAppContainer(navigator);

export default AppContainer;

/* const AppContainer = createAppContainer(navigator)

export default class App extends React.Component {
    render() {
      return <AppContainer/>;
    }
  } */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})