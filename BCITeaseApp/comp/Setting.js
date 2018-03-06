import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Linking, TouchableOpacity, Button, Video, AsyncStorage } from 'react-native';

import swipeleft from '../tuts/swipe-left.gif';
import swiperight from '../tuts/swipe-right.gif';
import swipeup from '../tuts/swipe-up.gif';
import swipeleft2 from '../tuts/swipe-left2.gif';
import tapchat from '../tuts/tap-chat.gif';
import tapprofile from '../tuts/tap-profile.gif';

import SwipeTuts from 'react-native-swipe-cards';

import MConnect from './MConnect';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
      style={styles.card}>
      <Image 
        source={this.props.video}
        style={{width:417, height: 735}}
                />
        </View>
      
    )
  }
}


export default class Settings extends React.Component {
    constructor(props){
        super(props);
     
        this.state={
            
            tutsVideo: require('../tuts/swipe-left.gif'),
                cards: [
                    {video: require('../tuts/swipe-left2.gif')},
                    {video: require('../tuts/swipe-right.gif')},
                    {video: require('../tuts/swipe-up.gif')},
                    {video: require('../tuts/tap-chat.gif')},
                    {video: require('../tuts/tap-profile.gif')},
                ]
        }
    }

   /* componentDidMount(){
        AsyncStorage.getItem("first").then((resp)=>{
            if(resp){
                //setState to not show video   
            } else {
                AsyncStorage.setItem("first", true);
            }
        });
        
    }*/
  handleYup = (card) => {
  }

  handleNope = (card) => {
  }

  handleConnect = (card) => {
  };


    render() {
        var pageToGo = null;
        if(this.state.curpage == true){
        } else{
            pageToGo = (
               <SwipeTuts
                    style={styles.card}
                    cards={this.state.cards}
                    renderCard={
                        (cardData) => <Card {...cardData} />
                    }
                    loop={false}

                    handleYup={this.handleYup}
                    handleNope={this.handleNope}
                    handleConnect={this.handleConnect}
                    renderNoMoreCards={(card)=><MConnect fbid = {this.props.fbid} />}
                    
                > 

                </SwipeTuts>
            )           
        }
        return (
            <View style={styles.container}>
            {pageToGo}
            </View>
        );
    }
}
   
const styles = StyleSheet.create({

card: {
    width: 400,
    height: 700,
    shadowOffset:{  width: 10,  height: 10,  },
    shadowColor: 'black',
    shadowOpacity: 1.0,
    alignItems: 'center',
    justifyContent:'center',

  },
})