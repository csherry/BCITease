import React, { Component } from 'react';
import {
  CameraRoll,
  Image,
  StyleSheet,
  TouchableHighlight,
  View
} from 'react-native';

export default class VPhoto extends React.Component {

  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});