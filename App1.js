import React, {Component} from 'react';
import { StyleSheet, Text,Image, View,Platform,BackAndroid,ImageBackground,TouchableOpacity,ToastAndroid} from 'react-native';
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';


import CustomTabBar from './pages/CustomTabBar'


// import commonStyle from './commonStyle';
import {commonStyle} from './commonStyle'

export default class App1 extends Component{


    static navigationOptions={
        header: null,
    }


    /*
    * activeOpacity:透明度
    *
    */
    render(){
        return(
            <View style = {styles.container}>

                <ScrollableTabView
                      renderTabBar={() => (<CustomTabBar
                        backgroundColor={'#f4f4f4'}
                        tabUnderlineDefaultWidth={60} // default containerWidth / (numberOfTabs * 4)
                        tabUnderlineScaleX={3} // default 3
                        activeColor={"#0af"}
                        inactiveColor={"#333"}
                        />)}>


                    <Text tabLabel='密码登录'/>
                    <Text tabLabel='验证码登录'/>
                   
                </ScrollableTabView>
    
            </View>
        );
    }

}

const styles =StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'flex-start',

        backgroundColor: commonStyle.red,
    },

    button:{
        width:120,
        height:50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4398ff',
    },
    image_bg:{
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-start',
        // alignItems: 'center',
        width:null,
        height:'50%',
        // resizeMode:'cover',
    },
    out:{
        width: 15,
        height: 15,
        marginTop:12,
        marginLeft:12,
        resizeMode:'contain'
    },
    image_out:{
        width: 15,
        height: 15,
    }
    

});