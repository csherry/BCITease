import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Nav from './Nav';
import ProfilePage from './ProfilePage';
import HomePage from './HomePage';
import ChatPage from './ChatPage';
import ChatComp from './mobileChat/ChatComp';
import ProfileEdit from './ProfileEdit';

export default class MConnect extends React.Component {
    constructor(props){
        super(props);
        
        this.state={
            goingHome: true,
            goingChat: false,
            goingProfile: false,
            goingMessages: false,
            connectedUsers: [],
            
        }
        
        this.toHome = this.toHome.bind(this);
        this.toChat = this.toChat.bind(this);
        this.toProfile = this.toProfile.bind(this);
        this.toMessages = this.toMessages.bind(this);
        this.usersToMessages = this.usersToMessages.bind(this);
    }
    
    
    
     toHome(){
        this.setState({
            goingHome: true,
            goingChat: false,
            goingProfile: false,
            goingMessages: false,
        })
    };
    
     toChat(){
        this.setState({
            goingHome: false,
            goingChat: true,
            goingProfile: false,
            goingMessages: false,
        })
    };
    
     toProfile(){
        this.setState({ 
            goingHome: false,
            goingChat: false,
            goingProfile: true,
            goingMessages: false,
        })
    };
     
    toMessages(){
        this.setState({
            goingHome: false,
            goingChat: false,
            goingProfile: false,
            goingMessages: true,
        })    
    }
    
    usersToMessages(data){
        this.state.connectedUsers.push(data);
        
        console.log(this.state.connectedUsers);
    }
    
    
  render() {
      
        var curPage;
        
      if (this.state.goingHome === true && this.props.fbid !== null){
          curPage = <HomePage
                        usersToMessages={this.usersToMessages}
                        connectedUsers={this.state.connectedUsers}
                        fbid={this.props.fbid}
                    />
      } else if (this.state.goingChat === true){
          curPage = <ChatPage
                        toMessages={this.toMessages}
                        connectedUsers={this.state.connectedUsers}
                    />
      } else if (this.state.goingProfile === true){
          curPage = <ProfilePage 
          fbid={this.props.fbid}
          />
      } else if (this.state.goingMessages === true){
          curPage = <ChatComp 
          fbid={this.props.fbid}
          />
      }
      
      
    return (
      <View style={styles.container}>
        <Nav
            toHome={this.toHome}
            toChat={this.toChat}
            toProfile={this.toProfile}
        />
        
        {curPage}
        
      </View>
    );
  }
}
      
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
  },
})
