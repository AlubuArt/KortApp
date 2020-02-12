import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/HomeScreen';
import ScoreScreen from './Screens/scoreScreen';
import StatisticsScreen from './Screens/statisticsScreen';
import { Ionicons } from '@expo/vector-icons';


//Creating a bottomTabNavigator component
const TabNavigator = createBottomTabNavigator();

function App() {
  return (
    
      <NavigationContainer>
        <TabNavigator.Navigator initialRouteName="Home"
                                //Styling the bottomTab with icons and color
                                screenOptions={( { route } ) => ({
                                  tabBarIcon: ({ focused, color, size}) => {
                                    let iconName;

                                    if(route.name === "Home") {
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
                                }}>

          {/*Setting the screen components in the bottomTabNavigator  */}
          <TabNavigator.Screen name="Home" 
                                component={HomeScreen} />
          <TabNavigator.Screen name="Regnskab" 
                    component={ScoreScreen} />
          <TabNavigator.Screen name="Statestik" 
                    component={StatisticsScreen} />
        </TabNavigator.Navigator>
      </NavigationContainer>
      
    
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    
  }
});