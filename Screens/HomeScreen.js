import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


class HomeScreen extends React.Component {

    render() {
        return (
        <View style={styles.container}>
            <Text style={styles.text}>Home!</Text>
        </View>
        );
    } 
}

export default HomeScreen;

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