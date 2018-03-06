import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <StatusBar backgroundColor="lightseagreen" barStyle="light-content" />
        <Text style={styles.title}>BCITease
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    height: 70,
    backgroundColor: '#edde91',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 10,
  },
  title: {
    color: '#f59431',
    fontWeight: 'bold',
    fontSize: 24,
  },
});