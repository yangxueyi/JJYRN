
import React, {Component} from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';

export default class Invest extends Component{

    static navigationOptions = {
        title: '项目',
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
                <Text style = {{color:'red'}}>项目</Text>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

});