import React from 'react'; 
import {SafeAreaView, Text} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: '分类',
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