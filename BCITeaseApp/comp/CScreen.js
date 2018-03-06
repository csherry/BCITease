import React, { Component } from 'react';
import { Image
  , StyleSheet
  , TouchableOpacity
  , View 
} from 'react-native';

export default class CScreen extends React.Component {
constructor (props) {
    super(props);
        this.state={
            src:""
        }
    
    this.getPhotosFromGallery = this.getPhotosFromGallery.bind(this);
    this.onPress = this.onPress.bind(this);
    
    }
    getPhotosFromGallery() {
        Expo.ImagePicker.launchCameraAsync().then((resp)=>{
            this.setState({
                src:resp.uri
            })
        });
    
  }

    onPress() {
        getPhotosFromGallery();
    }
    
  render() {
    return (
      <View style={styles.camera}>
        <TouchableOpacity
            onPress={() => this.getPhotosFromGallery()}>
          <Image

            source={require('../nav-icons/button.png')} />
        </TouchableOpacity>
                    <Image source={{uri:this.state.src}}
            />
      </View>
    );
  }
}

const styles = StyleSheet.create({
camera: {
    margin:5,
    borderWidth:1,
    borderColor:'lightgrey',
    borderRadius:4,
    width: 250,
    marginLeft: 80,
    height: 200,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignContent: 'center',
    paddingLeft: 90,

  },
});