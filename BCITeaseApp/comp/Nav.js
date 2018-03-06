import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';

import home from '../nav-icons/home.png';
import connections from '../nav-icons/connections.png';
import chat from '../nav-icons/chat.png';
import profile from '../nav-icons/profile.png';
import settings from '../nav-icons/settings.png';

import home2 from '../nav-icons/home2.png';
import connections2 from '../nav-icons/connections2.png';
import chat2 from '../nav-icons/chat2.png';
import profile2 from '../nav-icons/profile2.png';
import settings2 from '../nav-icons/settings2.png';

export default class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state={
            homeIcon: require('../nav-icons/home2.png'),
            chatIcon: require('../nav-icons/chat.png'),
            profIcon: require('../nav-icons/profile.png'),
        }    
        
        this.homeClick = this.homeClick.bind(this);
        this.chatClick = this.chatClick.bind(this);
        this.profClick = this.profClick.bind(this);
    }
    
    homeClick(){
        this.setState({
            homeIcon: require('../nav-icons/home2.png'),
            chatIcon: require('../nav-icons/chat.png'),
            profIcon: require('../nav-icons/profile.png'),
        })
        
        this.props.toHome();
    };
    
    chatClick(){
        this.setState({
            homeIcon: require('../nav-icons/home.png'),
            chatIcon: require('../nav-icons/chat2.png'),
            profIcon: require('../nav-icons/profile.png'),
        })
        this.props.toChat();
    };
    
    profClick(){
        this.setState({
            homeIcon: require('../nav-icons/home.png'),
            chatIcon: require('../nav-icons/chat.png'),
            profIcon: require('../nav-icons/profile2.png'),
        })
        this.props.toProfile();
    };


render() {
    return (
        <View>
            <View style={styles.nav}>
                <TouchableOpacity onPress={() => this.homeClick()}>
                    <Image
                        style={styles.homeIcons} 
                        source={this.state.homeIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.chatClick()}>
                    <Image
                        style={styles.chatIcons} 
                        source={this.state.chatIcon}
                />
                </TouchableOpacity>

             <TouchableOpacity onPress={() => this.profClick()}>
                    <Image
                        style={styles.profIcons} 
                        source={this.state.profIcon}
                />
                </TouchableOpacity>

            </View>
        </View>
                                                    
                                                    
    );
  }
}


const styles = StyleSheet.create({
  homeIcons: {
    width: 40,
    height: 50,
    marginTop: 20,
    marginLeft: 58,
    marginRight: 10
  },
chatIcons: {
    width: 45,
    height: 45,
    marginTop: 20,
    marginLeft: 78,
    marginRight: 10
  },
profIcons: {
    width: 45,
    height: 50,
    marginTop: 20,
    marginLeft: 70,
    marginRight: 10
  },

  nav: {
    height: 85,
    width: 417,
    backgroundColor: '#EFDD8D',
    shadowOffset:{  width: 5,  height: 5,  },
    shadowColor: 'darkgrey',
    shadowOpacity: 1.0,
    elevation: 4,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
