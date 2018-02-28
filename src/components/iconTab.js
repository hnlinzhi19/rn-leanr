import React from 'react'; 
import {View, Text, Image, StyleSheet} from 'react-native';

export default class TabComponent extends React.Component { 
  render() { 
    return (
      <View style={styles.wrapper}>
        <Text >
          This is top text.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper:{
    flex:1,
    width: 100
  }
});