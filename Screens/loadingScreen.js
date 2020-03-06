import React, { Component } from 'react';
import {View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { navigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from 'firebase';
import MainScreen from './mainScreen';
import SignUpScreen from './SignUpScreen';

const Stack = createStackNavigator();



class LoadingScreen extends Component {

    
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: null,
        }

    }
    //Check to se if the user is signed in or not. 
    // if the user is signed in, return to the main_test screen. If not signed in return to the signup Screen.
    componentDidMount() {
        firebase.auth().signInAnonymously()
      .then(() => {
        this.setState({
          isAuthenticated: true,
        });
      });
        
    };

    render() {

        if(this.state.isAuthenticated) {
            return <MainScreen />
        } 
        return (
            <View style={styles.container}> 
                <Text style={styles.text}>
                    Loading....
                </Text>
                <ActivityIndicator style={styles.ActivityIndicator}
                size='large' />
            </View>
        )
    }
}

export default LoadingScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      
    },
    text: {
        fontSize: 14,
        color: 'black',
        paddingTop: 200,
    },
    ActivityIndicator: {
        alignItems: 'center',
        paddingTop: 20,
         
    }
});

