import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Linking, TouchableOpacity, AsyncStorage } from 'react-native';

import samyee from '../nav-icons/abbey.jpg';
import SwipeCards from 'react-native-swipe-cards';

class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.disableYellowBox = true;
        return (
            <View style={styles.card}>   
                <Image
                    style={styles.uImg}
                    source={{uri: this.props.profilePictureUrl}}
                />
                <View style={{margin:20}}>
                    <Text style={styles.username}>
                        {this.props.name}
                    </Text>
                    <Text style={styles.usertitle}>
                        {this.props.program}
                    </Text>
                    <Text style={styles.quote}>
                        {this.props.quote}
                    </Text>   
                </View>
            </View>
        )
    }
}

class NoMoreCards extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
            <Text style={styles.noMoreCardsText}>No more cards</Text>
            </View>
        )
    }
}

export default class ProfilePage extends React.Component {
    constructor(props){
        super(props);

        this.state={

            curName: "",
            curTitle: "",
            curImage: "",
            curQuote: "",
            users: [],
            cards: [{
                name:"",
                profilePictureUrl:"",
                program:"",
                quote:"",
                hobbies:""
            }]
        }
    }

    componentDidMount(){
        var fd = new FormData();
        console.log("homepagefb",this.props.fbid);
        fd.append("fbid", this.props.fbid);
        fetch("http://testing.sherrychenxy.com/index.php",{
            method:"POST",
            body:fd
        }).
            then((resp) => {
                console.log('omgsherry', resp);
                return resp.json();
            }).then((json)=>{
                this.setState({
                    cards:json
                });
                console.log('asd',json);
            });
    }
    
    handleYup = (card) => {
        console.log(`Next on ${card.name}`);
    }
    handleNope = (card) => {
        console.log(`Previous on ${card.name}`);
    }
    handleConnect = (card) => {
        console.log(`Connect with ${card.name}`);
      
        var tempObj={
          curName: card.name,
          curImage: card.profilePictureUrl,
      }
        
      this.props.connectedUsers.push(tempObj);
      console.log(tempObj); 
    }
  
    render() {
        return (

            <SwipeCards
                style={styles.card}

                cards={this.state.cards}
                renderCard={
                    (cardData) => <Card {...cardData} />
                }
                renderNoMoreCards={() => <NoMoreCards />}
                loop={true}

                handleYup={this.handleYup}
                handleNope={this.handleNope}
                handleConnect={this.handleConnect}
                hasConnectAction
            > 

            </SwipeCards>
        );
    }
}

const styles = StyleSheet.create({
    card: {
    flex:1,
    backgroundColor: '#232e3f',
    margin:0,
    borderRadius:8,
    width: 430,
    shadowOffset:{  width: 10,  height: 10,  },
    shadowColor: 'black',
    shadowOpacity: 1.0,
    height: 690,
  },
uImg: {
    height:350,
    borderRadius: 8,
    width:'auto',
  },
username: {
    color: 'white',
    fontSize:20,
    marginLeft:10,
    marginTop:20,
  },
usertitle: {
    fontSize:15,
    marginLeft:10,
    color: '#FF9500',
    marginTop:5,
  },
  quote: {
    fontSize: 12,
    justifyContent: 'center',
    color: 'white',
    margin: 25,
    fontStyle: 'italic',

  },
})