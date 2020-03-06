import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, TabNavigator } from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/inputScoreScreen';
import ScoreScreen from './Screens/scoreScreen';
import StatisticsScreen from './Screens/statisticsScreen';
import LoginScreen from './Screens/LoginScreen';
import { Ionicons } from '@expo/vector-icons';
import * as firebase from 'firebase';
import firebaseConfig from './ressources/firebase_config';


  class App extends Component {

    constructor(props) {
      super(props);

      // Initialize Firebase
      if (!firebase.apps.length) {
        firebase.initializeApp({firebaseConfig});
      }
      //firebase.initializeApp(firebaseConfig);


      this.writeUserData = this.writeUserData.bind(this);
      this.getUserData = this.getUserData.bind(this);

    }

  
  //If component did mount without problems, connect to the firebase project
  componentDidMount() {
    this.writeUserData();
    this.getUserData();
    
  };
  
  
//setting the name and age of the current user in the DB i.e Hardcoded userlogin
writeUserData() {
  firebase.database().ref('/users').set(this.state)
  .then(()=> {
    console.log('inserted');
  }).catch((error) =>{
    console.log(error);
  })
};

getUserData() {
  this.setState({player1: firebase.database().ref('/users/user/game/player1')});
  
}


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
                                component={HomeScreen}
                                userName={this.userName}
                                 />
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