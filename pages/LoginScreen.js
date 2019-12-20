import React, {Component} from 'react';
import { StyleSheet, 
        ImageBackground,
        Text,
        Image,
        View,
        Button,
        ScrollView,
        TextInput,
        TouchableOpacity,
        ToastAndroid,
        PixelRatio} from 'react-native';

import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view'

import { scaleSizeW, scaleSizeH, setSpText } from "../ScreenUtils"

import CustomTabBar from './CustomTabBar'

import {commonStyle} from '../commonStyle'


import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'//软键盘



export default class LoginScreen extends Component{
   static navigationOptions={
        header: null,
    }

    render(){
        return(

            <View  style = {styles.container}>
            <ScrollView>
             <View style={{flex:1}}>
               <ImageBackground source={require('../image/top_page_pg.png')} style={styles.image_bg} resizeMode="stretch">

                    <TouchableOpacity  onPress={()=> {this.props.navigation.push('Main')}} >
                        <Image source={require('../image/icon_out.png')} style={styles.image_out} /> 
                    </TouchableOpacity>

                    <View style={styles.card_bg}>
                           <ScrollableTabView style={styles.tab_bg}
                                renderTabBar={() => (<CustomTabBar
                                    backgroundColor={'#fff'}
                                    tabUnderlineDefaultWidth={60} // default containerWidth / (numberOfTabs * 4)
                                    tabUnderlineScaleX={3} // default 3
                                    activeColor={"#000"}
                                    inactiveColor={"#747474"}
                                    />)}>


                                <View  tabLabel='密码登录'>
                                    <View style={styles.edit_bg}>
                                        <Image source={require('../image/icon_number.png')} style={styles.image_setting} />
                                       <TextInput
                                            style={{height: 40}}
                                            placeholder="请输入手机号码"
                                            onChangeText={(text) => this.setState({text})}
                                             maxLength={11}
                                             keyboardType="numeric"//设置键盘类型
                                             
                                        />

                                    </View>
                                    <View style={styles.lineContainer}/>
                                        <View  style={styles.edit_bg1}>
                                            <View style={styles.edit_bg}>
                                            
                                                <Image source={require('../image/icon_pass.png')} style={styles.image_setting} />
                                                <TextInput
                                                    style={{height: 40}}
                                                    placeholder="请输入密码"
                                                    onChangeText={(text) => this.setState({text})}
                                                />
                                                
                                            </View>
                                            <TouchableOpacity onPress={()=> {ToastAndroid.show('查看密码',ToastAndroid.SHORT)}}>
                                                <Image source={require('../image/icon_stop_see.png')} style={styles.stop_see} resizeMode="stretch" />
                                             </TouchableOpacity>
                                       </View>
                                        <View style={styles.lineContainer}/>

                                    <Text style = {styles.tv_seek_pass} onPress={()=>{ToastAndroid.show("找回密码",ToastAndroid.SHORT)}}>找回密码</Text>
                                    <View style={styles.container1}>
                                        <Text style = {styles.tv_regiter}>没有账号？</Text>
                                           <Text style = {styles.tv_regiter1} onPress={()=>{this.props.navigation.push('RegisterScreen')}}>立即注册</Text>
                                    </View>

                                    
                                    
                                    
                                </View>

                                
                                <View   tabLabel='验证码登录'>
                                    <View style={styles.edit_bg}>
                                        <Image source={require('../image/icon_number.png')} style={styles.image_setting} />
                                       <TextInput
                                            style={{height: 40}}
                                            placeholder="请输入手机号码"
                                            onChangeText={(text) => this.setState({text})}
                                             maxLength={11}
                                             keyboardType="numeric"//设置键盘类型
                                             
                                        />

                                    </View>
                                    <View style={styles.lineContainer}/>
                                        <View  style={styles.edit_bg1}>
                                            <View style={styles.edit_bg}>
                                            
                                                <Image source={require('../image/icon_code.png')} style={styles.image_setting} resizeMode="stretch" />
                                                <TextInput
                                                    style={{height: 40}}
                                                    placeholder="请输入您的验证码"
                                                    onChangeText={(text) => this.setState({text})}
                                                />
                                                
                                            </View>
                                            <Text  style= {styles.btn_mess_code} onPress={()=>{ToastAndroid.show('获取验证码',ToastAndroid.SHORT)}}>获取验证码</Text>
                                       </View>
                                        <View style={styles.lineContainer}/>
                                    <Text/>
                                    <View style={styles.container1}>
                                        <Text style = {styles.tv_regiter}>没有账号？</Text>
                                           <Text style = {styles.tv_regiter1} onPress={()=>{ToastAndroid.show("立即注册",ToastAndroid.SHORT)}}>立即注册</Text>
                                    </View>
                                    
                                </View>

                            </ScrollableTabView>
                            
                    </View>
                    
                </ImageBackground>
                <Text  style= {styles.btn_login_bg} onPress={()=>{ToastAndroid.show('登录',ToastAndroid.SHORT)}}>登录</Text>

                   
                 </View>

                 <View style={styles.container_wx}>
                    <View style={styles.lineContainer_wx}/>
                        <TouchableOpacity onPress={()=>{ToastAndroid.show('微信登录',ToastAndroid.SHORT)}}>
                            <Image source={require('../image/icon_wx.png')} style={styles.icon_wx} />
                        </TouchableOpacity>
                    <View style={styles.lineContainer_wx}/>
                </View>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems: 'center',marginBottom:20}}>
                    <Text style={{fontSize:10,color:'#999999'}}>我已阅读并同意</Text>
                    <Text style={{fontSize:10,color:'#71B2FD'}} onPress={()=>{ToastAndroid.show('《家家盈用户服务协议》',ToastAndroid.SHORT)}}>《家家盈用户服务协议》</Text>
                    <Text style={{fontSize:10,color:'#71B2FD'}} onPress={()=>{ToastAndroid.show('《家家盈隐私政策》',ToastAndroid.SHORT)}}>《家家盈隐私政策》</Text>
                </View>

                </ScrollView>

              
            </View>

           
        );
    }

}


const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'flex-start',
        backgroundColor:'#EFEFEF'
    },
    container1:{
         flexDirection:'row',
        alignItems: 'center',
        justifyContent:'center',
        marginTop:20,
    },
     container_wx:{
         flexDirection:'row',
         justifyContent:'center',
         alignItems: 'center',
         marginTop:scaleSizeH(60),
         marginBottom:scaleSizeH(31),
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
        // flex:1,
        flexDirection:'column',
        justifyContent:'flex-start',
        // alignItems: 'center',
        width:null,
        height:scaleSizeH(685),
        // resizeMode:'cover',
    },
     image_out:{
        width: 16,
        height: 16,
        marginTop: commonStyle.marginTop,
        marginLeft:commonStyle.marginLeft,
        // resizeMode:'contain'
     
    },
      card_bg:{
        // flex:1,
        // width:50,
        height:scaleSizeH(551),
        marginLeft:scaleSizeW(31),
        marginRight:scaleSizeW(31),
        marginTop:scaleSizeH(450),
        flexDirection:'row',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        borderColor:'#FFA336',
        borderRadius:10,
        // borderWidth:2,

    },
    btn_login_bg:{
        // flex:1,
        alignItems: 'center',
        height:scaleSizeH(85),
        marginTop:scaleSizeH(320),
        marginLeft:scaleSizeW(101),
        marginRight:scaleSizeW(101),
        fontSize:18,
        color:'#fff',
        justifyContent: 'flex-start',
        backgroundColor: '#f1523c',
        borderColor:'#f1523c',
        borderRadius:50,
        textAlign:'center',//设置text位置  文本对齐
        textAlignVertical:'center' //文本垂直对齐
        // position: 'absolute',
        // borderWidth:2,

    },

    btn_mess_code:{
        alignItems: 'center',
        // width:scaleSizeW()
        height:scaleSizeH(40),
        // marginTop:scaleSizeH(320),
        // marginLeft:scaleSizeW(101),
        marginRight:scaleSizeW(64),
        marginTop:scaleSizeW(40),
        paddingRight:scaleSizeW(10),
        paddingLeft:scaleSizeW(10),
        fontSize:12,
        color:'#999999',
        justifyContent: 'flex-start',
        backgroundColor: '#DDDDDD',
        borderColor:'#DDDDDD',
        borderRadius:50,
        textAlign:'center',//设置text位置  文本对齐
        textAlignVertical:'center' //文本垂直对齐
    },

    tab_bg:{
        justifyContent: 'flex-start',
        borderRadius:10,
        backgroundColor: '#fff',
    },
    edit_bg1:{
         flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    edit_bg:{
       flexDirection:'row',
        alignItems: 'center',
        // justifyContent: 'flex-start',
        // resizeMode:'cover',
        paddingTop:20,
    },

     image_setting:{
        width: scaleSizeW(30),
        height: scaleSizeH(35),
        marginLeft:30,
        // marginBottom:15,
        marginRight:commonStyle.marginRight,
     
    },
    stop_see:{
        width: scaleSizeW(40),
        height: scaleSizeH(20),
        marginTop:25,
        marginRight:30,
    },
    //线
    lineContainer: {
        height: commonStyle.lineWidth,
        marginLeft: 30,
        marginRight: 30,
        // backgroundColor: 'red',
        alignItems:'center',
        backgroundColor: commonStyle.lineColor,
    },
     //线
    lineContainer_wx: {
        flex:1,
        // width:50,
        height: commonStyle.lineWidth,
         marginLeft: scaleSizeW(36),
        marginRight: scaleSizeW(36),
        // alignItems:'center',
        backgroundColor: '#d1cfca',
    },

    tv_seek_pass:{

        fontSize:12,
        color:'#DBDBDB',
        marginTop:6,
        marginRight:40,
        textAlign:'right',//设置text位置
    },

    tv_login:{
         alignItems: 'center',
       
        fontSize:18,
        color:'#fff',
         textAlign:'center',//设置text位置  文本对齐
        textAlignVertical:'center' //文本垂直对齐
       
    },
    
    tv_regiter:{
        fontSize:12,
        color:'#000',
    },
    tv_regiter1:{
        fontSize:12,
        color:'#71B2FD',
    },

    icon_wx:{
        width: scaleSizeW(50),
        height: scaleSizeW(40),
    },
    


})