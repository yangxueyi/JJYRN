import React, {Component} from 'react';
import {Text,TouchableOpacity,Button,ImageBackground,StyleSheet,Image,Platform,View} from 'react-native';
import { ToolbarAndroid } from 'react-native-gesture-handler';


const TITLE_OFFSET = Platform.OS === 'ios' ? 70 : 56;

let REQUEST_URL = "https://test-app.jajaying.com/app/Android/queryLoanDetail";


const parameters = {
    "deviceId" : "5FDAF1AC-9BE2-4E71-8E0B-45B7D65D5E32",
    "appStore" : "jjy100001",
    "deviceSystem" : "ANDROID",

    "deviceType" : "Simulator -- iOS 12.1",
    "appVersion" : "5.0.1",
    "loadId":"20181220C124170000000000000009oh"
  }

//创建一个返回按钮的组件
class BackImage extends React.Component { 
    render() {
      return (
        <Image
          source={require('../image/icon_edit.png')}
          style={styles.back}
        />
      );
    }
}
//创建一个右侧按钮
class ButtonRight extends React.Component{
    render() {
        return (
       
            <Text style={styles.rightText} onPress={()=>{this.props.navigate('Agreement')}}>协议</Text>

        /* <View>
          <Button title = '111' style={styles.rightText} onPress={()=>{this.props.navigate('Agreement');}}/>
          </View> */

        );
      }
}
  


export default class InvestDetail extends Component{
    static navigationOptions = {
        title: '项目详情',
        headerBackImage:<BackImage/>,//返回按钮
        headerRight:<ButtonRight/>,//左侧按钮
      /*   headerRight: (
            <ButtonRight navigate={this.props.navigation.navigate}/>
        ), */
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

    constructor(props){
    super(props)
    const {navigation} = this.props;
    this.loanId = navigation.getParam('itemContent')
    this.state ={
        data : [],
        loaded :false
    };
    // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向会变为空
    // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
        this.fetchData = this.fetchData.bind(this);
        // this.readerView = this.readerView.bind(this);
        
        
    }


       //rn的生命周期，初始化的时候会执行
    componentDidMount(){
        console.log(this.loanId)
        this.fetchData(this.loanId)
    }

    //加载数据
    fetchData(loanId){
        fetch(REQUEST_URL,{
        method: "POST",
        headers: {
            Accept: 'application/json;charset=UTF-8',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            "deviceId" : "5FDAF1AC-9BE2-4E71-8E0B-45B7D65D5E32",
            "appStore" : "jjy100001",
            "deviceSystem" : "ANDROID",

            "deviceType" : "Simulator -- iOS 12.1",
            "appVersion" : "5.0.1",
            "loanId":loanId
        })
        })
            .then(response => response.json())
            .then(responseJson => {

                
                // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
                    this.setState({
                        data: this.state.data.concat(responseJson),
                        loaded : true
                    });

                  
                    {console.log(data)}
            })
            
            .catch(error => {
                console.log(error)
              });
    }

        /*加载中的view*/
    readerLoadingView(){
        return(
            <View style = {styles.container}>
                <Text>loading...</Text>
            </View>
        );
    }

    readerView(data){
      
        // { item }是一种“解构”写法，请阅读ES2015语法的相关文档
        // item也是FlatList中固定的参数名，请阅读FlatList的相关文档
        return(
            <View style={styles.container}> 
           
                      
            <ImageBackground source={require('../image/top_page_pg.png')} style={styles.image_bg}>
                <View style={styles.topContainer}> 
      
                <Text style ={styles.text}>{data.resultCodeMsg}</Text>

                </View>

                </ImageBackground> 

            </View>
        )
    }


      render(){

            // ToastAndroid.show(JSON.stringify(this.state.movies),ToastAndroid.SHORT)
            //由于刚开始的的时候设置movies的职位空，所以第一次会加载等待的view
            if(!this.state.loaded){
                return this.readerLoadingView()
            }
            //只获取第一个数组的数据
            var data = this.state.data[0];
            return this.readerView(data);
        }

     

}




const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'flex-start',

        backgroundColor:'#F5FCFF'
    },
    image_bg:{
        flex:1,
        justifyContent:'flex-start',
        width:null,
        height:'65%',
        // resizeMode:'contain',
    },

    topContainer:{
        flex:1,
        justifyContent:'flex-start',
        width:null,
        height:'65%',
        paddingLeft:20,
        paddingTop:20,
        // resizeMode:'contain',
    },
    image_top:{
        flex:1,
        // alignItems:'center',
        justifyContent:'flex-start',
        width:null,
        height:null,
        //不加这句，就是按照屏幕高度自适应
        //加上这几，就是按照屏幕自适应
        resizeMode:'stretch',
        //祛除内部元素的白色背景
        backgroundColor:'rgba(0,0,0,0)',
    },


    text:{
        fontSize:16,
        color:'#fff'


    },
    back:{
        width: 15,
        height: 15
    },
    rightText:{
        fontSize:15,
        color:'#fff',
        paddingRight:10,
        backgroundColor:'#f4511e'
        
    },



});
