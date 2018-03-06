import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, Dimensions, TouchableOpacity } from 'react-native';


export default class ChatPage extends React.Component {
    constructor(props){
        super(props);
        
        this.state={
            sampleText:[]
        }
    
    
        this.pushToConversations = this.pushToConversations.bind(this);
        this.toMessages = this.toMessages.bind(this);
    }
   
    pushToConversations(obj){
        var arr = this.state.sampleText;
        arr.push(obj.curName);
        this.setState({
           sampleText:arr 
        });
    }
    
    toMessages(){
        this.props.toMessages()
    }
    
render() {
    
    var theUserData = [];
    var theUserConvos = [];
    
    console.log(this.state.sampleText);
    for (var i = 0; i < this.props.connectedUsers.length; i++){
        var comp =(
            <TouchableOpacity key={i} style={styles.connected} onPress={this.pushToConversations.bind(this, this.props.connectedUsers[i])}>
                <View>
                    <View style={styles.connectedUsersPic}>
                        <Image style={styles.connectedUsersPic1}
                        source={{uri: this.props.connectedUsers[i].curImage}}
                        />
                    </View>
                    <Text style={{textAlign:"center", fontSize:11}}>{this.props.connectedUsers[i].curName}</Text>
                </View>
            </TouchableOpacity>
        );
        theUserData.push(comp);
      }
      
      console.log("henry", this.props.connectedUsers[i])
          for (var y = 0; y < this.state.sampleText.length; y++){
                var comp2 =(
                    <TouchableOpacity key={y} onPress={() => this.toMessages()}>
                        <View style={styles.msg}> 
                        <Text style={styles.nameFont}>{this.state.sampleText[y]}</Text>
                        </View>
                    </TouchableOpacity>
                );
                theUserConvos.push(comp2);
            }
    
    return (
        <View>
        
            <View style={styles.div1}>
            <Text style={styles.chatHeaders}> CONNECTIONS </Text>
                <ScrollView
                    contentContainerStyle={{width:Dimensions.get('window').height}}
                    horizontal={true}>{theUserData}
                </ScrollView>
            </View>

            <View style={styles.div2}>
                <Text style={styles.chatHeaders2}> CONVERSATIONS </Text>
                    <ScrollView contentContainerStyle={{height:Dimensions.get('window').height}} vertical={true}>{theUserConvos}
                </ScrollView>
            </View>
        </View>
    );
  }
}


const styles = StyleSheet.create({
background: {
    flex: 1,
    backgroundColor: '#fdfdfd'
  },
    
connectedUsersDiv: {
    width: 50,
    height: 50,
  },

connectedUsersPic: {
    height: 60,
    width: 60,
    margin: 15,
    shadowOffset:{  width: 5,  height: 5,  },
    shadowColor: 'darkgrey',
    shadowOpacity: 1.0,
},
    
connectedUsersPic1: {
    height: 60,
    width: 60
},
    
connected:{
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent:'center',
    },

chatHeaders: {
    fontSize: 30,
    color: 'orange',
    paddingTop: 10,
    marginTop: 15,
    marginLeft: 91,
    marginRight: 15,


},
chatHeaders2: {
    fontSize: 30,
    color: 'orange',
    paddingTop: 10,
    margin: 15,
    marginLeft: 74,
},

msg: {
    width: 385,
    backgroundColor: 'white',
    borderColor: 'orange',
    marginLeft: 15,
    marginRight: 15,
    marginTop:3,
    height: 75,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 15,
    shadowOffset:{  width: 5,  height: 5,  },
    shadowColor: 'darkgrey',
    shadowOpacity: 1.0,
    borderLeftWidth: 6, 
    padding: 10,   
},

msgUn: {
    width: 400,
    backgroundColor: 'white',
    borderColor: 'darkgrey',
    marginLeft: 15,
    marginRight: 15,
    marginTop:3,
    height: 75,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 15,
    shadowOffset:{  width: 5,  height: 5,  },
    shadowColor: 'darkgrey',
    shadowOpacity: 1.0,
    borderLeftWidth: 6, 
    padding: 10,   
},
    
div1: {
    width: 400, 
    height: 200,
},

div2: {
    height: 451
},
    
nameFont: {
    fontSize: 14,
    color: "orange"
},

})
