import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {StyleSheet, Text, Viev } from 'react-native';
import { createStackNavigator, NavigationContainer } from '@react-navigation/native';
import LoadingScreen from './Screens/loadingScreen';


const Stack = createStackNavigator();

class App_test extends Component {




    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" Component={LoadingScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }

}

export default App_test;
