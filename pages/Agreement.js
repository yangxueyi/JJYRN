import React, {Component} from 'react';
import {Text,StyleSheet,Image,Platform,View} from 'react-native';


const TITLE_OFFSET = Platform.OS === 'ios' ? 70 : 56;

export default class Agreement extends Component{

    static navigationOptions = {
        title: '项目详情',
        // headerBackImage:<BackImage/>,//返回按钮
        // headerRight:<ButtonRight/>,
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

      render(){

        return(
            <View style={styles.container}> 
            <Text style={styles.text}>{'协议'}</Text>

            </View>
        )

      }

}


const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5FCFF'
    },

    text:{
        fontSize:21,
        color:'#F35941'


    },
   

});
