import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';

import FBSDK, {
    LoginManager,
    GraphRequest,
    GraphRequestManager,
    AccessToken
} from 'react-native-fbsdk';

import HomePage from './HomePage';

export default class FBLogin extends Component<{}>{
    constructor(props){
        super(props);
        
        this.state={
            curpage:false
        }
        
        this.changePage = this.changePage.bind(this);
        this._fbAuth = this._fbAuth.bind(this);
    }
    
    changePage(){
        this.setState({
            curpage:true
        })
    }
    
    _fbAuth() {
        LoginManager.logInWithReadPermissions(['public_profile']).then(
            (result)=>{
                console.log("HI"+result.toString());
                if (result.isCancelled) {
                  console.log("Login Cancelled");
                } else {
                    AccessToken.getCurrentAccessToken().then(
                        (data) => {
                            //alert(data.accessToken.toString())
                            console.log("Token"+data.accessToken.toString());
                            var str = data.accessToken.toString();
                            this.getMe(data.accessToken);
                        }
                    )
                    console.log("Login Success permission granted:" + result.grantedPermissions);
                }
            }, function(error) {
                console.log("some error occurred!!");
            }
        )
    }
    
   /* fbLogin(){
        fetch("https://graph.facebook.com/me?fields=name,age_range,picture.height(200)&&access_token=" + accessToken).then((resp) => {
            return resp.json();
        }).then((json) => {
            console.log(json);

            this.setState({
                name:json.name,
                fbPic:json.picture.data.url
            })
        })
    }*/
    
    getMe(str) {
        console.log("getme");
        const infoRequest = new GraphRequest(
            '/me',
            {
                parameters: {
                    fields: {
                        string: 'name,gender,picture,id'
                        // what you want to get
                    },
                    access_token: {
                        string: str 
                        // put your accessToken here
                    }
                }
            },
            this._responseInfoCallback,
        );

        new GraphRequestManager().addRequest(infoRequest).start();
    }
    
    _responseInfoCallback(error: ?Object, result: ?Object) {
        if (error) {
            console.log("GRAPH ERROR - "+error);
            alert('Error fetching data: ' + error.toString());
        } else {
            console.log("RESULT- Name is " + result.name);
            console.log("RESULT- gender is " + result.gender);
            console.log("RESULT- picture is " + result.picture.data.url);
            console.log("RESULT- id is " + result.id);
            
            var fd = new FormData();
        
            fd.append("name", result.name);
            fd.append("password", result.id);
            fd.append("gender", result.gender);
            fd.append("profilePictureUrl", result.picture.data.url);
            fd.append("fbid", result.id);
             console.log(fd);
            fetch("http://testing.sherrychenxy.com/insert.php", {
                method:"POST",
                body:fd
            }).then((resp)=>{
                 console.log(resp);
                return resp.text();
             }).then((text)=>{
                console.log("result", text);
             }).catch((err)=>{
                console.log(err); 
            })
            alert('Welcome to BCITease ' + result.name);
        }
    }
   
    render() {
        var pageToGo = null;
        if(this.state.curpage == true){
               pageToGo = (
                   <HomePage
                   />
               )
        } else{
            pageToGo = (
                <View style={styles.container}>
                    <Image source={require('../img/BCITease_Logo.png')} style={{width: 180, height: 60, marginBottom: 15}}/>
                    <View>
                        <TouchableOpacity 
                            onPress={this._fbAuth} style={styles.boxes} 
                        >
                            <Text style={styles.textcolor}> 
                                Login to Facebook
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )           
        }
        return (
            <View>
            {pageToGo}
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    
    boxes: {
        backgroundColor: '#EFDD8D',
        justifyContent: 'center',
        alignItems: 'center',    
        width: 180,
        height: 40,
        borderRadius: 5,
    },
    
    textcolor: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
    },
});