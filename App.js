import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/HomeScreen';
import ScoreScreen from './Screens/scoreScreen';
import StatisticsScreen from './Screens/statisticsScreen';
import LoginScreen from './Screens/LoginScreen';
import { Ionicons } from '@expo/vector-icons';
import firebase from 'firebase';



//Creating a bottomTabNavigator component
const TabNavigator = createBottomTabNavigator();

class App extends Component {

  //If component did mount without problems, connect to the firebase project
  componentDidMount() {

    var firebaseConfig = {
        apiKey: "AIzaSyCpJ3OeLXo9BFLeFBw4zQ3Fj2Zio1geLTY",
        authDomain: "reactnative-kortapp.firebaseapp.com",
        databaseURL: "https://reactnative-kortapp.firebaseio.com",
        projectId: "reactnative-kortapp",
        storageBucket: "reactnative-kortapp.appspot.com",
        messagingSenderId: "34157226291",
        appId: "1:34157226291:web:162fc8a6a0a158daaf3646",
        measurementId: "G-PTVKDX97H4"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      //setting the name and age of the current user in the DB
      firebase.database().ref('users/001').set({
        name: 'Jacob',
        age: 34,
        game: {
          player1: '',
          player2: '',
          player3: ''
        }
      }).then(()=> {
        console.log('inserted');
      }).catch((error) =>{
        console.log(error);
      })
      
}; 

  render() {

    return (
    
      <NavigationContainer >
        <TabNavigator.Navigator initialRouteName="Home" 
                                
                                //Styling the bottomTab with icons and color
                                screenOptions={( { route } ) => ({
                                  tabBarIcon: ({ focused, color, size}) => {
                                    let iconName;

                                      if (route.name === "Home") {
                                      iconName = focused
                                      ? 'ios-add': 'md-add';
                                    } else if (route.name === "Regnskab") {
                                      iconName = focused 
                                      ? 'ios-calculator' : 'md-calculator';
                                    } else {
                                      iconName = focused 
                                      ? 'ios-trophy' : 'md-trophy';
                                    }
                                    //Returning the component styled
                                    return <Ionicons name={iconName} size={25} color={color} />;
                                  },

                                })}
                                tabBarOptions={{
                                  activeTintColor: 'tomato',
                                  inactiveTintColor: 'grey',
                                  backgroundcolor: 'grey',
                                } 
                                }>

          {/*Setting the screen components in the bottomTabNavigator  */}
          <TabNavigator.Screen name="Home" 
                                component={HomeScreen} />
          <TabNavigator.Screen name="Regnskab" 
                    component={ScoreScreen} />
          <TabNavigator.Screen name="Statestik" 
                    component={StatisticsScreen} />
          <TabNavigator.Screen name="Login"
                    component={LoginScreen} />
        </TabNavigator.Navigator>
      </NavigationContainer>
      
    
  );
}
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272D39',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    
  },
  bottomTab: {
    color: 'grey',

  }
});