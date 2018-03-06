import React, { Component } from 'react';
import { AppRegistry, StyleSheet, TextInput, View, Alert, Button } from 'react-native';

export default class DBTesting extends Component {
    
    constructor(props){
    
        super(props);
        this.state = {
            users: [],
            name: '',
            password: ''
    }

    this.fetchStuff = this.fetchStuff.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.insertDB = this.insertDB.bind(this);
    }

    fetchStuff(){
        fetch("http://testing.sherrychenxy.com/index.php").then((resp) => {
            console.log(resp);
            return resp.json();
        }).then((json) => {
            console.log(json);
            this.setState({
                users:json
            })
        })
    }

    handleName(text){
        this.setState({
            name:text
        })
    }

    handlePassword(text){
        this.setState({
            password:text
        })
    }

    insertDB(){
        var fd = new FormData();
        fd.append("name", this.state.name);
        fd.append("password", this.state.password);
        
        fetch("http://testing.sherrychenxy.com/insert.php", {
            method:"POST",
            body:fd
        })
    }

    render(){
        var allUsers = this.state.users.map((obj, i) => {
            return(
                <View key={i}>
                <Text>{obj.name}-{obj.password}</Text>
                </View>
            )
        })
        
        return(
            <View style={styles.MainContainer}>
                <Button
                    title="Fetch" 
                    onPress={this.fetchStuff}
                />  
            
                <TextInput 
                    placeholder="Enter Name"
                    onChangeText={this.handleName}
                    style={styles.TextInputStyleClass}
                />
            
                <TextInput 
                    placeholder="Enter Password"
                    onChangeText={this.handlePassword}
                    style={styles.TextInputStyleClass}
                />
            
                <Button 
                    title="Insert Text Input Data to Server" 
                    onPress={this.insertDB}
                />
            </View>
        )
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
