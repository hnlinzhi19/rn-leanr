import React from 'react'; 
import {SafeAreaView,ScrollView,View, StyleSheet, ActivityIndicator, Text, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import IconTab from '../components/iconTab';

const { width } = 200

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: '首页',
  };
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      bannerList:[]
    };
  }
  componentDidMount(){
    this.getData();
  }
  // 重新渲染页面
  innerView (){
    const {isLoading, bannerList} = this.state; 
    const listItem = bannerList.map((item) => <Image key={item.link} 
          style={styles.image}
          resizeMode='stretch'
          source={{uri: item.link}} 
        />); 
    
    if (isLoading) {
      return  <ActivityIndicator style={[styles.centering]} size="large" />;
    }
    
    return listItem;
  }
  getData(){
    fetch('http://m.chijiayd.com/api/wap/index/1', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((result) => {
      const {
        code,
        data
      } = JSON.parse(result._bodyInit);
      if (code === 1) {
        this.setState((prevState, props) => {
          return Object.assign(prevState, {
            isLoading: false,
            bannerList: data.navList || [],
          });
        });
      }
    });
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <SafeAreaView >
        
        {this.innerView()}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  image: {
    width:50,
    height:50,
  }
});