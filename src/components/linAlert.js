import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Alert extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>1</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { 
    backgroundColor: '#000', 
  },
  text:{
    color:'#fff'
  }
});
