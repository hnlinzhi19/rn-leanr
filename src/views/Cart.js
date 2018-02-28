import React from 'react'; 
import {SafeAreaView, Text} from 'react-native';

export default class CartScreen extends React.Component {
  static navigationOptions = {
    title: '购物车',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <SafeAreaView >
        <Text >
          This is top text.
        </Text>
        <Text >
          This is bottom text.
        </Text>
      </SafeAreaView>
    );
  }
}