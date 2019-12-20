import React, {Component} from 'react';
import { StyleSheet, Text,Image,ScrollView,Dimensions, ToastAndroid,TouchableOpacity,View,ImageBackground} from 'react-native';

import { scaleSizeW, scaleSizeH, setSpText } from "../ScreenUtils"

export default class MyAccount extends Component{

    static navigationOptions={
        header: null,
    }
   /*  static navigationOptions = {
        title: '账户',
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
 */
    render(){
      
        return(
            <View style={styles.container}> 
                      
                <ImageBackground source={require('../image/top_page_pg.png')} style={styles.image_bg} resizeMode="stretch">
   
                        <View style={styles.topContainer}> 
                            <TouchableOpacity style={styles.image_setting} onPress={()=>{this.props.navigation.push('Login')}}>
                                <Image source={require('../image/icon_setting.png')} style={styles.image_setting} /> 
                            </TouchableOpacity>
                            
                            <TouchableOpacity style={styles.service} activeOpacity={1} onPress={()=>{ToastAndroid.show("客服",ToastAndroid.SHORT)}}>
                                <View style={styles.server_on}>
                                    <Image source={require('../image/icon_service.png')} style={styles.image_setting} /> 
                                    <Text style={styles.text}>{'在线客服'}</Text>
                        
                                </View>
                            </TouchableOpacity>
                        

                        </View>
                        <View style={styles.twoContainer}>
                        <TouchableOpacity style={styles.twoContainer} onPress={()=>{ToastAndroid.show("头像",ToastAndroid.SHORT)}}>
                            
                                <Image source={require('../image/icon_setting.png')} style={styles.image_icon} /> 
                                <View style={styles.my_data}>
                                    
                                    <Text style={styles.text}>{'昵称'}</Text>
                                    <Text style={styles.text}>{'风险测评'}</Text>
                        
                                </View>
                         
                        </TouchableOpacity>
                        </View>

                        <View style={styles.all_money}>
                            <Text style={styles.text}>{'362.5'}</Text>
                        </View>
                        <View style={styles.all_money}>
                            <Text style={styles.text}>{'资产总额（元）'}</Text>
                            <Text style={styles.text_1} onPress={()=>{ToastAndroid.show("未开户",ToastAndroid.SHORT)}}>{'是否开户'}</Text>
                        </View>

                        <View style={styles.all_money}>
                           <View style={styles.part_money}>
                                <Text style={styles.text}>{'362.5'}</Text>
                                <Text style={styles.text}>{'累计收益（元）'}</Text>
                           </View>

                         
                            <View style={styles.part_money}>
                                <Text style={styles.text}>{'362.5'}</Text>
                                <Text style={styles.text}>{'预期收益（元）'}</Text>
                            </View>
                           
                        </View>
                        <View style={styles.card_bg}>
                            <View style={styles.balance}>
                                    <Text style={styles.text_2}>{'0.00'}</Text>
                                    <View style={styles.server_on}>
                                        <Text style={styles.text_3}>{'账户余额（元）'}</Text>
                                        <View style={{marginTop:5}} >
                                            <TouchableOpacity style={styles.balance} onPress={()=>{ToastAndroid.show("隐藏钱数",ToastAndroid.SHORT)}}>
                                                <Image source={require('../image/seek_password.png')} style={styles.image_setting} /> 
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                            </View>
                            <View style={styles.part}>
                                <TouchableOpacity style = {styles.button} onPress = {()=>{ToastAndroid.show("充值",ToastAndroid.SHORT)}}>
                                    <Text style = {{color: 'white'}}>充值</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style = {styles.button} onPress = {()=>{ToastAndroid.show("提现",ToastAndroid.SHORT)}}>
                                    <Text style = {{color: 'white'}}>提现</Text>
                                </TouchableOpacity>


                            </View>

            

                        </View>

                        <ScrollView>
                        <TouchableOpacity  onPress = {()=>{ToastAndroid.show("我的出借",ToastAndroid.SHORT)}}>
                            <View style={styles.listContainer}>
                                <View style={styles.listContainer}>
                                    <Image source={require('../image/icon_bing_wx.png')} style={styles.image_list} /> 
                                    <Text style = {styles.text_4}>我的出借</Text>
                                </View>
                                <Image source={require('../image/next_arrow_tip.png')} style={styles.next_arrow} /> 
                            </View>
                            <View style={styles.bottomLineContainer}></View>
                            </TouchableOpacity>
                            <TouchableOpacity  onPress = {()=>{ToastAndroid.show("我的卡卷",ToastAndroid.SHORT)}}>
                            <View style={styles.listContainer}>
                                <View style={styles.listContainer}>
                                    <Image source={require('../image/icon_coupons.png')} style={styles.image_list} /> 
                                    <Text style = {styles.text_4}>我的卡卷</Text>
                                </View>
                                <Image source={require('../image/next_arrow_tip.png')} style={styles.next_arrow} /> 
                            </View>
                            <View style={styles.bottomLineContainer}></View>
                            </TouchableOpacity>
                            <TouchableOpacity  onPress = {()=>{ToastAndroid.show("我的红包",ToastAndroid.SHORT)}}>
                            <View style={styles.listContainer}>
                                <View style={styles.listContainer}>
                                    <Image source={require('../image/icon_actual.png')} style={styles.image_list} /> 
                                    <Text style = {styles.text_4}>我的红包</Text>
                                </View>
                                <Image source={require('../image/next_arrow_tip.png')} style={styles.next_arrow} /> 
                            </View>
                            <View style={styles.bottomLineContainer}></View>
                            </TouchableOpacity>
                            <TouchableOpacity  onPress = {()=>{ToastAndroid.show("交易记录",ToastAndroid.SHORT)}}>
                            <View style={styles.listContainer}>
                                <View style={styles.listContainer}>
                                    <Image source={require('../image/icon_order_num.png')} style={styles.image_list} /> 
                                    <Text style = {styles.text_4}>交易记录</Text>
                                </View>
                                <Image source={require('../image/next_arrow_tip.png')} style={styles.next_arrow} /> 
                            </View>
                            <View style={styles.bottomLineContainer}></View>
                            </TouchableOpacity>
                            
                        </ScrollView>
                        
                </ImageBackground> 
               

              

               

            </View>

            

        );
    }

    //rn的生命周期，初始化的时候会执行
    componentDidMount(){
        let screenWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').height;

        {console.log(screenWidth)}
       /*  Image.getSize(imageSource).then((width, height) => {
            //取得图片的宽高，并进行相应的处理
             //width 图片的宽度 Math.floor向下取整
            //height 图片的高度
            let proportion = width/screenWidth;
            let myHeight = height/screenHeight;

          }).catch((error) => {
            //下载图片失败
            console.log(error);
          }); */
    };

    
  

}
let imageSource = "http://www.hangge.com/blog/images/logo.png";

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'flex-start',
        // alignItems:'flex-start',
        backgroundColor:'#F5FCFF'
    },
    
     button:{
        width:50,
        height:20,
        borderRadius: 20,
        marginLeft:10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f1523c',
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
    card_bg:{
        // flex:1,
        // width:50,
        height:100,
        margin:20,
        // marginTop:110,
        flexDirection:'row',
        justifyContent: 'flex-start',
        backgroundColor: '#FFA336',
        borderColor:'#FFA336',
        borderRadius:10,
        // borderWidth:2,
       

    },

    topContainer:{
        // flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'flex-start',
        width:'100%',
        height:40,
        paddingLeft:10,
        paddingTop:10,
        paddingRight:18,
        // resizeMode:'contain',
    },

    twoContainer:{
        // flex:1,
        // alignItems: 'flex-start',
        flexDirection:'row',
        // width:'100%',
        height:50,
        // marginLeft:10,
        paddingLeft:10,
        // backgroundColor:'#fff',
    },

    server_on:{
        // flex:1,
        flexDirection:'row',
        
        // backgroundColor:'#fff',
        
    },
    
    listContainer:{
        // flex:1,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padd:scaleSizeH(40),
        // backgroundColor:'#fff',
        
    },
    my_data:{
        // flex:1,
        flexDirection:'column',
        justifyContent:'center',
        
    },
    text:{
        fontSize:14,
        color:'#fff',
        paddingLeft:10,
    },
    text_1:{
        fontSize:14,
        color:'#3897F0',
        paddingLeft:10,
    },
    text_2:{
        fontSize:12,
        paddingLeft:10,
        color:'#fff',
        marginTop:5,
    },
    text_3:{
        fontSize:12,
        paddingLeft:10,
        color:'#666666',
        marginTop:5,
    },
    text_4:{
        fontSize:14,
        marginLeft:10,
        color:'#747474',
        // marginTop:5,
    },
    all_money:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center',
        padding:5,
    },

    part:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center',
        padding:5,
    },

    part_money:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        padding:5,
    },

    balance:{
        flex:1,
        justifyContent:'center',
        // alignItems: 'center',
        padding:5,
    },

    image_setting:{
        width: 20,
        height: 20,
        resizeMode:'contain'
     
    },
    image_list:{
        width: 20,
        height: 20,
        resizeMode:'contain',
        marginLeft:20,
     
    },
    next_arrow:{
        width: 15,
        height: 15,
        resizeMode:'contain',
        marginRight:20,
    },
    image_icon:{
        width: 50,
        height: 50,
        // backgroundColor:'#fff',
    },
    service:{
        width: null,
        height: 40,
        // backgroundColor:'#fff'
    },
    btn:{
        width: 50,
        height: 20,
    },  
    bottomLineContainer: {
        height: 0.5,
        marginBottom: 1,
        marginTop:5,
        backgroundColor: "#EFEFEF"
      },

})