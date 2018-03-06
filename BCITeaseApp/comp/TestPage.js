import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';


export default class ChatPage extends React.Component {
    constructor(props){
        super(props);
    }
    
render() {
    return (
        <View style={styles.background}>
            <Text style={styles.myBut}>Welcome to BCITease</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
background: {
    flex: 1,
    marginTop: 85,
  },
myBut: {
    flex: 1,
    top: 200,
  },
})