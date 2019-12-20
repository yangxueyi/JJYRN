import React, { Component } from 'react'
import { Text,Button, Image,Platform, View } from 'react-native'

import { createBottomTabNavigator,TabBarBottom, createAppContainer,createStackNavigator } from 'react-navigation';
//导入外部组建
import Home from './Home'
import Invest from './Invest'
import Invite from './Invite'
import MyAccount from './MyAccount'
import Login from './LoginScreen'



const navigator = createBottomTabNavigator({

    homeStack:createStackNavigator(
            // RouteConfigs
            {
            screen:Home,
            
            },

            // StackNavigatorConfig
            {
              headerMode:'screen',
            
              navigationOptions:{
                showLabel:false,
                title:'主页',
              
                tabBarIcon: ({tintColor, focused}) => {
                  if(focused){
                    return <Image source={require('../image/icon_home_red.png')} style={{width:30,height:30}}/>;
                  }else{
                      return <Image source={require('../image/icon_home.png')} style={{width:30,height:30}}/>;
                  }
                },
                 tabBarOnPress: () => {
                    console.log('23112111123','011111111')
                  },
                tabBarOptions: {
                  activeTintColor: 'red', // 选中时tab的label/icon的颜色
                  inactiveTintColor: 'gray', // 未选中的颜色
                },
              
              },
              
          },
          
      ),
      

    
    
      InvestStack: createStackNavigator(
      {
        screen: Invest, 
      },
      {
      navigationOptions: {
        tabBarPosition: 'bottom',

        showLabel:false,
        tabBarIcon: ({tintColor, focused}) => {
          if(focused){
            return <Image source={require('../image/icon_invest_red.png')} style={{width:30,height:30}}/>;
        }else{
            return <Image source={require('../image/icon_invest_gray.png')} style={{width:30,height:30}}/>;
        }
        },
        tabBarOptions: {
          activeTintColor: 'red', // 选中时tab的label/icon的颜色
          inactiveTintColor: 'gray', // 未选中的颜色
        },
      }
    }
    ),
    InviteStack: createStackNavigator( 
      { 
      screen: Invite,
      },
      {
          navigationOptions: {
            tabBarPosition: 'bottom',

            showLabel:false,
            tabBarIcon: ({tintColor, focused}) => {
              if(focused){
                    return <Image source={require('../image/icon_my_red.png')} style={{width:30,height:30}}/>;
              }else{
                  return <Image source={require('../image/icon_my_gray.png')} style={{width:30,height:30}}/>;
              }
            },
            tabBarOptions: {
              activeTintColor: 'red', // 选中时tab的label/icon的颜色
              inactiveTintColor: 'gray', // 未选中的颜色
            },
        }
      }
    ),
   myStack: createStackNavigator(
    { 
      screen: Login,
    },
    {
        navigationOptions: {
            tabBarPosition: 'bottom',

            showLabel:false,
            title:'账户',
              
            tabBarIcon: ({tintColor, focused}) => {
              if(focused){
                  return <Image source={require('../image/icon_invite_red.png')} style={{width:30,height:30}}/>;
                  
              }else{
                  return <Image source={require('../image/icon_invite_gray.png')} style={{width:30,height:30}}/>;
              }
            },
            tabBarOptions: {
              activeTintColor: 'red', // 选中时tab的label/icon的颜色
              inactiveTintColor: 'gray', // 未选中的颜色
            },
        }
      },
      
    ),

   

    
  },
  {
      // initialRouteName: 'homeStack', // 设置默认的页面
      //将app.js中的顶部导航栏隐藏
      navigationOptions: {
        header: null,
    },
     
   }

)


const TITLE_OFFSET = Platform.OS === 'ios' ? 70 : 56;

export default navigator
// export default createAppContainer(navigator)

/* 
export default class Main extends React.Component {
  static navigationOptions = {
    //将app.js中的顶部导航栏隐藏
    header:null
  
  }
  render() {
    return <TabNavigator/>;
  }
} */



