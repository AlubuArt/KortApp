import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InputScoreScreen from './inputScoreScreen';
import StatisticsScreen from './statisticsScreen';
import LoginScreen from './LoginScreen';
import ScoreScreen from './scoreScreen';
import { Ionicons } from '@expo/vector-icons';
import * as firebase from 'firebase';



//Creating a bottomTabNavigator component
const TabNavigator = createBottomTabNavigator();

class MainScreen extends Component {

    constructor(props) {
        super(props);

        
    }

    render() {
        return(

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
                                    component={InputScoreScreen}
                                    />
                    <TabNavigator.Screen name="Regnskab" 
                                    component={ScoreScreen} />
                    <TabNavigator.Screen name="Statestik" 
                                    component={StatisticsScreen} />
                    <TabNavigator.Screen name="Login"
                                    component={LoginScreen} />
                </TabNavigator.Navigator>
            </NavigationContainer>
        )
        
    }
}

export default MainScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })