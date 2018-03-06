import React from 'react';
import {StyleSheet, Text, View, FlatList, TextInput, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';
import {send, subscribe} from 'react-native-training-chat-server';
import ReversedFlatList from 'react-native-reversed-flat-list';


const CHANNEL = 'zaqmlpxswnkodfadadfl12345678';
    

export default class ChatComp extends React.Component {
constructor(props) {
    super(props);
        this.state = {
        typing:"",
        messages: [],
        user:{
            name:'',
            profilePictureUrl:''
            },
        cards:{
            name:'',
            profilePictureUrl:''
            }
        }
        
    };

    componentDidMount(){
        var fd = new FormData();
        console.log("profilepagefb",this.props.fbid);
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
        
        fetch("http://testing.sherrychenxy.com/index2.php",{
            method:"POST",
            body:fd
        }).
            then((resp) => {
                console.log('omgsherry', resp);
                return resp.json();
            }).then((json)=>{
                this.setState({
                    user:json[0]
                });
                console.log('qaz',json[0]);
            });
        /*
    var NAME = this.state.user.name;
    var AVATAR =  this.state.user.profilePictureUrl;*/
    }

  componentWillMount() {
    subscribe(CHANNEL, messages => {
      this.setState({messages});
    });
  }
    
    async sendMessage() {
        await send({
        channel: CHANNEL,
        sender: this.state.user.name,
        avatar: this.state.user.profilePictureUrl,
        message: this.state.typing
    });
        
      console.log('James',this.state.user.profilePictureUrl);
      console.log('Jjjjj',this.state.user.name);
  // set the component state (clears text input)
  this.setState({
    typing: '',
  });
}

  renderItem({item}) {
      
    return (
      <View style={styles.row}>
        <Image style={styles.avatar} source={{uri: item.avatar}} />
        <View style={styles.rowText}>
        <Text style={styles.sender}>{item.sender}</Text>
        <Text style={styles.message}>{item.message}</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ReversedFlatList data={this.state.messages} renderItem={this.renderItem} />
        
        <KeyboardAvoidingView behavior="padding">
            <View style={styles.footer}>
                <TextInput
                  value={this.state.typing}
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  placeholder="Message..."
                  onChangeText={text => this.setState({typing: text})}
                />
                <TouchableOpacity onPress={this.sendMessage.bind(this)}>
                    <Text style={styles.send}>Send</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    width: 407,
  },
    
    row: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
    
    message: {
    fontSize: 18,
  },
    
    sender: {
    fontWeight: 'bold',
    paddingRight: 10,
  },
    
    footer: {
    flexDirection: 'row',
    backgroundColor: '#eee',
  },
    
    input: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 18,
    flex: 1,
  },
    
    send: {
    alignSelf: 'center',
    color: '#f59431',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 20,
  },
    
    avatar: {
    borderRadius: 20,
    width: 40,
    height: 40,
    marginRight: 10,
  },
    
    rowText: {
    flex: 1,
  },
});