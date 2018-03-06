import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Animated,
    AppRegistry
} from 'react-native';

export default class Loading extends Component  {
    
    componentWillMount() {
        this.animatedValue = new Animated.Value(1);
    }
    
    componenetDidMount() {
        Animated.timing(this.animatedValue, {
            toValue: .4,
            duration: 2000
        }).start()
    }
    
    render() {
        const animatedStyle = { opacity: this.animatedValue }
        return (
            <View style={styles.container}>
            <Animated.View style={[styles.box, animatedStyle]} />
            </View>
        );
    }
}
    

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    
    box: {
        backgroundColor: "#333",
        width: 1000,
        height: 1000,
    },
})

AppRegistry.registerComponent('Loading', () => Loading);


