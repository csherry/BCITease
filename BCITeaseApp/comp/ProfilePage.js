import React, { Component } from 'react';
import { 
    StyleSheet
    , Text
    , View
    , Image
    , TextInput
    , Button
    , Picker
    , AsyncStorage
    , TouchableOpacity
} from 'react-native';

import ProfileEdit from './ProfileEdit';

export default class ProfilePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            edit:false,
            user:{
                name:'',
                profilePictureUrl:''
            },
            profile:{
                program:'',
                quote:'',
                bio:'',
                hobbies:''
            },
            cards: [{
                name:"",
                profilePictureUrl:""
            }]
        }
        
        this.editProfile = this.editProfile.bind(this);
        this.updateProfile = this.updateProfile.bind(this);
        this.showProfile = this.showProfile.bind(this);
    }

    updateProfile(obj){
        this.setState({
            profile:obj
        })
        console.log("my object",obj);
    }
    
    editProfile(){
            this.setState({
            edit:true
        })
    }

    settingsEdit(){
        this.setState({
            settings:true
        })
    }

    showProfile(){
        this.setState({
            edit:false
        })
    }
    
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
    }
    
    render() {
        console.log('now', this.state.profile);        
        var allUsers = this.state.cards.map((obj, i)=>{
            return(
                <View key={i}>
                <Image
                    style={styles.dphoto}
                    source={{uri: obj.profilePictureUrl}}
                />
                <Text style={styles.info}>
                    {obj.name}
                </Text>
                </View>
            )
        })
        
        var settingsEdit = (
            <View>
                <ProfileEdit 
                    updateProfile={this.updateProfile} showProfile={this.showProfile}
                />
            </View>
        );
    
        var yesProfile = (
            <View style={styles.profile}>
                <Image 
                    style={styles.dphoto}
                     source={{uri:this.state.user.profilePictureUrl}}
                />

                <View style={styles.info}>
                    <Text style={styles.username}>{this.state.user.name}</Text>
                    <Text style={styles.userprogram}>{this.state.profile.program}</Text>
                    <Text style={styles.quote}>{this.state.profile.quote}</Text>
                    <Text style={styles.bio}>{this.state.profile.bio}</Text>
                    <Text style={styles.hobbies}>{this.state.profile.hobbies}</Text> 
                <Button
                    onPress={this.editProfile}
                    title="Edit Profile"
                />
                </View>
            </View>

        )

        var thePageToShow = null;

        if (this.state.edit == true){
            thePageToShow = settingsEdit;
        } else {
            thePageToShow = yesProfile;
        } 

        return (
            <View>
                {thePageToShow}
            </View>

        );
    }
}

const styles = StyleSheet.create({
  profile: {
    backgroundColor: 'white',
    width: 417,
    height: 'auto',
    margin: 0,
  },

  info:{
    width: 375,
    height: 321,
  },

  dphoto: {
    height:330,
    width:'auto',
    backgroundColor: '#FF9500',
  },

  username: {
    fontSize:40,
    marginLeft:10,
    color: '#FF9500',
    marginTop: 10,

  },

  userprogram: {
    fontSize:20,
    marginLeft:30,
    color: '#232e3f',
    marginTop:2,
    fontWeight: 'bold',
  },

  quote: {
    fontSize: 12,
    paddingLeft: 50,
    color: 'grey',
    marginTop: 2,
    fontStyle: 'italic',
  },

  bio: {
    fontSize: 16,
    color: 'black',
    marginLeft: 30,
    marginTop: 10,
  },

  hobbies:{
    fontSize: 16,
    color: 'black',
    marginLeft: 30,
    marginTop: 5,
  },

setIcon: {
    width: 45,
    height: 50,
    marginTop: 20,
    marginLeft: 70,
    marginRight: 10
  },
});