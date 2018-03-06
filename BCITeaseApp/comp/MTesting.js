import React, { Component } from 'react';
import { AppRegistry, StyleSheet, TextInput, View, Alert, Button } from 'react-native';

export default class MTesting extends Component  {
    constructor(props) {
        super(props)

        this.state = {
            TextInputName: '',
            TextInputEmail: '',
            TextInputPhoneNumber: ''
        }
        
        this.InsertDataToServer = this.InsertDataToServer.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePhoneNum = this.handlePhoneNum.bind(this);
    }

    InsertDataToServer = () =>{
        
        const { TextInputName }  = this.state ;
        const { TextInputEmail }  = this.state ;
        const { TextInputPhoneNumber }  = this.state ;
        
        fetch('http://testing.sherrychenxy.com/submit_user_info.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({
                name: TextInputName,
                email: TextInputEmail,
                phone_number: TextInputPhoneNumber
          })
            
        }).then((response) => response.json()).then((responseJson) => {
            Alert.alert(responseJson);
            }).catch((error) => {
                console.error(error);
            }); 
    }
    
    handleName(evt){
        this.setState({
            TextInputName:evt.target.value
        })
    }

    handleEmail(evt){
        this.setState({
            TextInputEmail:evt.target.value
        })
    }

    handlePhoneNum(evt){
        this.setState({
            TextInputPhoneNumber:evt.target.value
        })
    }

    render() {
        return (
            <View style={styles.MainContainer}>
                <TextInput 
                    placeholder="Enter Name"
                    onChange={this.handleName}
                    style={styles.TextInputStyleClass}
                />
                <TextInput
                    placeholder="Enter Email"
                    onChange={this.handleEmail}
                    style={styles.TextInputStyleClass}
                />
                <TextInput
                    placeholder="Enter Phone Number"
                    onChange={this.handlePhoneNum}
                    style={styles.TextInputStyleClass}
                />
                <Button 
                    title="Insert Text Input Data to Server" 
                    onPress={this.InsertDataToServer}
                />
            </View>          
        );
    }
}

const styles = StyleSheet.create({
    MainContainer :{
        justifyContent: 'center',
        flex:1,
        margin: 10
    },

    TextInputStyleClass: {
        textAlign: 'center',
        marginBottom: 7,
        height: 40,
        borderWidth: 1,
        borderColor: '#FF5722',
        borderRadius: 10 ,
    }
});