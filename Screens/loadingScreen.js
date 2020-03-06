import React, { Component } from 'react';
import {View, Text, ActivityIndicator, StyleSheet } from 'react-native';
//import firebase from 'firebase';


class LoadingScreen extends Component {

    //Check to se if the user is signed in or not. 
    // if the user is signed in, return to the main_test screen. If not signed in return to the signup Screen.
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? 'Main_test' : 'SignUpScreen')
        })
    }

    render() {
        return (
            <View style={StyleSheet.container}> 
                <Text>
                    Loading....
                </Text>
                <ActivityIndicator size='large' />
            </View>
        )
    }
}

export default LoadingScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#272D39',
      paddingTop: 50,
      alignItems: 'center'

    },
});

