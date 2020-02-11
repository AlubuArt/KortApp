import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import ScoreScreen from './Screens/scoreScreen';
import StatisticsScreen from './Screens/statisticsScreen';



const TabNavigator = createBottomTabNavigator();

const Stack = createStackNavigator();

function App() {
  return (
    
      <NavigationContainer>
        <TabNavigator.Navigator initialRouteName="Home">
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