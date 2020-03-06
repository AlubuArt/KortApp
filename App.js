import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/bottom-tabs';
import * as firebase from 'firebase';
import firebaseConfig from './ressources/firebase_config';
import LoadingScreen from './Screens/loadingScreen';



  class App extends Component {

    constructor(props) {
      super(props);


      // Initialize Firebase
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }

    };

  
  //If component did mount without problems, connect to the firebase project
  componentDidMount() {
    firebase.auth().signInAnonymously()
      .then(() => {
        this.setState({
          isAuthenticated: true,
        });
      });
  }

  render() {

    return (
      <View style={styles.container}>
        <LoadingScreen /> 
      </View>
      
      
    
  );
}
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', 
  },
  text: {
    fontSize: 20,
    
  },
  
});