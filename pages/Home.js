import React, {Component} from 'react';
import {FlatList,StyleSheet,Text,Image,Button,Alert,TouchableOpacity,View} from 'react-native'


//ip
// var REQUEST_URL = "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

let REQUEST_URL = "https://test-app.jajaying.com/app/Android/queryLoanList";
let image_url = {
    uri: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=762328188,3599250631&fm=26&gp=0.jpg'
  };

let parameters = {
    "deviceId" : "5FDAF1AC-9BE2-4E71-8E0B-45B7D65D5E32",
    "appStore" : "jjy100001",
    "deviceSystem" : "ANDROID",
    "pageSize" : 10,
    "deviceType" : "Simulator -- iOS 12.1",
    "appVersion" : "5.0.1",
    "pageNo" : 1
  }

export default class Home extends Component{

   
 
    static navigationOptions = {
        title: '主页',
     
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

      
    //头尾布局
    header = () => {
        return (
            <Image source = {image_url} style={{height: 160,}}></Image>
        )
    };

      constructor(props){
        super(props)
        this.state ={
            data : [],
            loaded :false
        };
    // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向会变为空
    // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
        this.fetchData = this.fetchData.bind(this);
        this.readerView = this.readerView.bind(this);
    }

    //组件的安装
    componentDidMount(){
        this.fetchData();
    }

    //加载数据
    fetchData(){
        fetch(REQUEST_URL,{
        method: "POST",
        headers: {
            Accept: 'application/json;charset=UTF-8',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(parameters)
        })
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson)
            // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
                this.setState({
                    data: this.state.data.concat(responseJson['businessObject']['list']),
                    loaded : true
                });
            });
    }

    render(){
        if(!this.state.loaded){//数据正在加载中
            return this.readerLoadingView();
        }
        return(
            <FlatList
                data={this.state.data}
                renderItem={this.readerView}
                // ItemSeparatorComponent = {this.renderSeparator}
                style={styles.list}
                ListHeaderComponent = {this.header}
                keyExtractor={(item, index) => {
                    console.log(item.loanName, index, item.loanId);
                    return item.loanId;
                  }
                }
            />
        );
    }

    /*分割线*/
    renderSeparator = () => {
        return (
            <View
            style={{
            height: 1,
            backgroundColor: "#CED0CE",
            }}
            />
        );
      };


    /*加载中的view*/
    readerLoadingView(){
        return(
            <View style = {styles.container}>
                <Text>loading...</Text>
            </View>
        );
    }

    readerView({ item }){
        // { item }是一种“解构”写法，请阅读ES2015语法的相关文档
        // item也是FlatList中固定的参数名，请阅读FlatList的相关文档
        return(
            <View style={styles.container}>

                <TouchableOpacity style= {styles.container} activeOpacity ={0.5} onPress = {()=>{
                        this.props.navigation.navigate('InvestDetail',{itemContent: item.loanId})
                        // console.log("12323322")
                    }}>
                      <View style={styles.container}>
                        <View style={styles.topContainer}>
                            <View style={styles.flagContainer}></View>
                            <Text style={styles.title}>{item.loanName}</Text>
                        </View>
                        <View style={styles.middleContainer}>
                            <Text style={styles.percent}>{item.yearRate}%</Text>
                            <View style={styles.middleContainer}>
                            <Text style={styles.termCount}>{item.termCount}</Text>
                            <Text style={styles.termUnit}>{item.termUnit}</Text>
                            </View>
                            <Text style={styles.loanStatus}>{item.loanStatus}</Text>
                        </View>
                        <View style={styles.lineContainer}></View>
                        <View style={styles.bottomContainer}>
                            <Text style={styles.coupon}>可用：红包 | 加息券 | 现金券</Text>
                        </View>
                        <View style={styles.bottomLineContainer}></View>
                        </View>
                </TouchableOpacity> 

                

            </View>
        );
    }

  
   
    /* render(){
       
        return(
            <View style = {styles.container}>



                 <TouchableOpacity style= {styles.button} activeOpacity ={0.5} onPress = {()=>{
                    this.props.navigation.navigate('Login')
                    console.log("12323322")
                }}>
                    <Text style = {{color: 'white'}}>首页</Text>
                </TouchableOpacity> 

            </View>
        );
    } */

}


const styles =StyleSheet.create({

  /*   container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5FCFF'
    },
 */
container: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF"
  },
  flagContainer: {
    width: 3,
    height: 22,
    backgroundColor: "#f1523c",
    marginLeft: 18,
    marginTop: 20
  },
  topContainer: {
    height: 42,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#FFFFFF"
  },
  title: {
    fontSize: 14,
    color: '#666666',
    fontWeight: 'bold',
    marginLeft: 12,
    marginTop: 24
  },
  middleContainer: {
    flexDirection: "row",
    height: 64,
    justifyContent: 'space-between',
    backgroundColor: "#fff"
  },
  percent: {
    fontSize: 25,
    color: "#f1523c",
    paddingLeft: 33,
    paddingTop: 24,
    fontFamily: 'DINCondensed-Bold'
  },
  termCount: {
    fontSize: 21,
    color: "#666666",
    alignItems: 'center',
    paddingTop: 24,
    paddingLeft: 10,
    paddingRight: 0,
    fontFamily: 'DINCondensed-Bold',
    textAlign: 'right'
  },
  termUnit: {
    fontSize: 14,
    color: '#666666',
    fontWeight: 'normal',
    marginTop: 25,
    paddingLeft: 0,
    paddingRight: 10,
    textAlign: 'left'
  },
  loanStatus: {
    fontSize: 14,
    color: '#666666',
    fontWeight: 'normal',
    paddingRight: 52,
    paddingTop: 24,
    paddingLeft: 10
  },
  lineContainer: {
    alignItems: 'center',
    height: 0.5,
    marginLeft: 33,
    marginRight: 33,
  },
  bottomContainer: {
    height: 31,
    backgroundColor: "#FFFFFF"
  },
  coupon: {
    fontSize: 12,
    color: '#999999',
    fontWeight: 'normal',
    marginLeft: 33,
    marginTop: 7.5
  },
  bottomLineContainer: {
    height: 0.5,
    marginBottom: 1,
    backgroundColor: "#999999"
  },
  list: {
    backgroundColor: "#F0F0F0"
  }

});



