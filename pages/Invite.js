import React, {Component} from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';

import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view'
import CustomTabBar from './CustomTabBar';


export default class Invite extends Component{
    static navigationOptions = {
        title: '邀请',
        headerStyle: {
          backgroundColor: '#f4511e',//标题背景
        },
        headerTintColor: '#fff',//文字颜色
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleStyle:{flex: 1,textAlign:'center'},//设置标题居中
    
        // headerTitleContainerStyle:{
        //   left: TITLE_OFFSET,
        //   right: TITLE_OFFSET,
        // },
      }

    render(){
        return(

            <View  style = {styles.container}>
               {/*  <TouchableOpacity style = {styles.button} onPress = {()=>{this.props.navigation.navigate('InvestStack')}}>
                    <Text style = {{color: 'white'}}>邀请</Text>
                </TouchableOpacity> */}

                 <ScrollableTabView
                      renderTabBar={() => (<CustomTabBar
                        backgroundColor={'#F5FCFF'}
                        tabUnderlineDefaultWidth={60} // default containerWidth / (numberOfTabs * 4)
                        tabUnderlineScaleX={3} // default 3
                        activeColor={"#000"}
                        inactiveColor={"#747474"}
                        />)}>


                    <Text tabLabel='密码登录'/>
                    <Text tabLabel='验证码登录'/>
                   
                </ScrollableTabView>
            </View>

            

        );
    }

}

const styles = StyleSheet.create({

    container:{
         flex:1,
        justifyContent:'flex-start',

        backgroundColor:'#F5FCFF'
    },
     button:{
            width:120,
            height:50,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#4398ff',
        }

})