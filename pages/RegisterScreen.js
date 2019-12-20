import React, { Component } from "react";
import { Text,
    Image,
    View ,
    ScrollView,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    ToastAndroid } from "react-native";


import {scaleSizeW,scaleSizeH,setSpText } from "../ScreenUtils"

import CheckBox from 'react-native-check-box'

import {commonStyle} from '../commonStyle'

export default class RegisterScreen extends Component{
    static navigationOptions={
        header: null,
    }

     // checkBox构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            data: [{name: 'android', checked: true},
                {name: 'IOS', checked: false}]
        };
    }

    //CheckBox的点击事件
    check = async() =>{
        if(this.state.isChecked){
             ToastAndroid.show('注册',ToastAndroid.SHORT);
        }else{
             ToastAndroid.show('请阅读并同意《家家盈用户服务协议》《家家盈隐私政策》',ToastAndroid.SHORT);
        }
    }

    render(){
        return(
            
            <View style = {styles.container}>
            <ScrollView>
               <ImageBackground source={require('../image/top_page_pg.png')} style={styles.image_bg} resizeMode="stretch">
                     <TouchableOpacity  onPress={()=> {this.props.navigation.push('Main')}} >
                        <Image source={require('../image/icon_out.png')} style={styles.image_out} /> 
                    </TouchableOpacity>

                     <View style={styles.card_bg}>

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
                        <View style={styles.edit_bg}>
                            <Image source={require('../image/icon_nviter.png')} style={styles.image_setting} />
                            <TextInput
                                style={{height: 40}}
                                placeholder="请输入邀请人手机号"
                                onChangeText={(text) => this.setState({text})}
                                    maxLength={11}
                                    keyboardType="numeric"//设置键盘类型
                                    
                            />

                        </View>
                        <View style={styles.lineContainer}/>

                     </View>

               </ImageBackground>

                <Text  style= {styles.btn_login_bg} onPress={this.check}>注册</Text>

                <View style={styles.container_wx}>
                <View style={styles.lineContainer_wx}/>
                <TouchableOpacity onPress={()=>{ToastAndroid.show('微信登录',ToastAndroid.SHORT)}}>
                    <Image source={require('../image/icon_wx.png')} style={styles.icon_wx} />
                </TouchableOpacity>
                <View style={styles.lineContainer_wx}/>
                </View>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems: 'center',marginBottom:20}}>
                    <CheckBox
                       style={{paddingRight:scaleSizeW(10)}}
                        onClick={()=>{
                        this.setState({
                            isChecked:!this.state.isChecked
                        })
                        }}
                        isChecked={this.state.isChecked}
                        unCheckedImage={<Image source={require('../image/normal.png')}  style={styles.checkBox_bg}/>}
                        checkedImage={<Image source={require('../image/checked.png')}  style={styles.checkBox_bg}/>}
                    />
                    <Text style={{fontSize:10,color:'#999999'}}>我已阅读并同意</Text>
                    <Text style={{fontSize:10,color:'#71B2FD'}} onPress={()=>{ToastAndroid.show('《家家盈用户服务协议》',ToastAndroid.SHORT)}}>《家家盈用户服务协议》</Text>
                    <Text style={{fontSize:10,color:'#71B2FD'}} onPress={()=>{ToastAndroid.show('《家家盈隐私政策》',ToastAndroid.SHORT)}}>《家家盈隐私政策》</Text>
                </View>

                  </ScrollView>
            </View>


        )
    }
}

const styles=StyleSheet.create({

     container:{
        flex:1,
        justifyContent:'flex-start',
        backgroundColor:'#EFEFEF'
    },
      container_wx:{
         flexDirection:'row',
         justifyContent:'center',
         alignItems: 'center',
         marginTop:scaleSizeH(60),
         marginBottom:scaleSizeH(31),
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
        paddingTop:scaleSizeH(60),
        flexDirection:'column',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        borderColor:'#FFA336',
        borderRadius:10,
        // borderWidth:2,

    },
    
     image_setting:{
        width: scaleSizeW(30),
        height: scaleSizeH(35),
        marginLeft:30,
        // marginBottom:15,
        marginRight:commonStyle.marginRight,
     
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
      //线
    lineContainer: {
        height: commonStyle.lineWidth,
        marginLeft: 30,
        marginRight: 30,
        // backgroundColor: 'red',
        alignItems:'center',
        backgroundColor: commonStyle.lineColor,
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
      icon_wx:{
        width: scaleSizeW(50),
        height: scaleSizeW(40),
    },

    checkBox_bg:{
        width: scaleSizeW(25),
        height: scaleSizeW(25),
    }

})