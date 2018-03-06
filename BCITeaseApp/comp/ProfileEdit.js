import React, { Component } from 'react';
import { 
    StyleSheet
    , Text
    , View
    , Image
    , TextInput
    , Button
    , Picker
} from 'react-native';

import ProfilePage from './ProfilePage';

export default class ProfileEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            program:"",
            quote:"",
            bio:"",
            hobbies:"",
        }

        this.updateProfile = this.updateProfile.bind(this);
        this.changeBio = this.changeBio.bind(this);
        this.changeQuote = this.changeQuote.bind(this);
        this.changeHobbies = this.changeHobbies.bind(this);
    }

    changeBio(text){
        var uBio = text;

        this.setState({
         bio:uBio
        });
    }

    changeQuote(text){
        var uQuote = text;

        this.setState({
         quote:uQuote
        });
    }

    changeHobbies(text){
        var uHobbies = text;

        this.setState({
         hobbies:uHobbies
        });
    }

    updateProfile(){
        console.log('Profile Updated');

        var obj = {
            program:this.state.program,
            quote:this.state.quote,
            bio:this.state.bio,
            hobbies:this.state.hobbies
        }

        this.props.updateProfile(obj);
            this.props.showProfile();
            console.log(obj);
          
        console.log('tess');
        
        var fd = new FormData();
        fd.append("program", this.state.program);
        fd.append("quote", this.state.quote);
        fd.append("bio", this.state.bio);
        fd.append("hobbies", this.state.hobbies);
        
        fetch("http://testing.sherrychenxy.com/insert2.php", {
            method:"POST",
            body:fd
        });
    }

    render() {
        var settingsEdit = (
            <View> 
                <View style={styles.changes}>
                <Image
                    style={styles.uImg}
                    source={this.state.fbImage}
                />
                    <Picker
                        selectedValue={this.state.program}
                        onValueChange={(itemValue, itemIndex) => this.setState({program: itemValue})}>
                            <Picker.Item label="Advanced Website Storytelling" value="Advanced Website Storytelling" />
                            <Picker.Item label="Agile Development" value="Agile Development" />
                            <Picker.Item label="Applied Computer Applications (ACA)" value="Applied Computer Applications (ACA)" />
                            <Picker.Item label="Applied Computer Information Systems (ACIS)" value="Applied Computer Information Systems (ACIS)" />
                            <Picker.Item label="Applied Data Analytics" value="Applied Data Analytics" />
                            <Picker.Item label="Applied Web Development" value="Applied Web Development" />
                            <Picker.Item label="Computer Systems Technology" value="Computer Systems Technology" />
                            <Picker.Item label="Cross-Platform Storytelling & Content Marketing" value="Cross-Platform Storytelling & Content Marketing" />
                            <Picker.Item label="Digital Design and Development" value="Digital Design and Development" />
                            <Picker.Item label="Essentials of Website Storytelling" value="Essentials of Website Storytelling" />
                            <Picker.Item label="Mobile App Tools" value="Mobile App Tools" />
                            <Picker.Item label="New Media Design and Web Development" value="New Media Design and Web Development" />
                            <Picker.Item label="Software Systems Developer" value="Software Systems Developer" />
                            <Picker.Item label="Technical Web Designer" value="Technical Web Designer" />
                            <Picker.Item label="Web Development Fundamentals" value="Web Development Fundamentals" />
                            <Picker.Item label="Web Technologies" value="Web Technologies" />
                            <Picker.Item label="Web and Mobile Application Development" value="Web and Mobile Application Development" />
                            <Picker.Item label="WordPress Developer" value="WordPress Developer" />

                    </Picker>

                    <TextInput
                        onChangeText={this.changeQuote}
                        placeholder="Write your favourite quote here..."
                        multiline={true}
                        numberOfLine={10}
                        style={styles.inputs}
                    />

                    <TextInput
                        onChangeText={this.changeBio}
                        placeholder="Tell us a little bit about yourself..."
                        multiline={true}
                        numberOfLine={20}
                        style={styles.inputs}
                        />

                    <TextInput
                        onChangeText={this.changeHobbies}
                        placeholder="What are your hobbies?"
                        multiline={true}
                        numberOfLine={10}
                        style={styles.inputs}
                    />

                    <Button
                        onPress={this.updateProfile}
                        title="Save"
                    />

                    </View>
            </View>
        )

        var thePageOpen = settingsEdit;

        return (
            <View>
                {thePageOpen}
            </View>
            )
      }
}

const styles = StyleSheet.create({
inputs: {
    top:0, 
    width: 300,
    height: 25,
    borderColor: 'lightgrey', 
    borderWidth: 1, 
    borderRadius: 15,
    margin: 5,
  },

changes: {
    width: 300,
    height: 651,
},

uImg: {
    marginLeft: 50,
    height:200,
    borderRadius: 100,
    width:200,
    marginTop: 20,
    marginBottom: 15,
  },

title: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent:'center',
    margin: 'auto',
    color: '#FF9500',
    fontSize: 30,
},
})