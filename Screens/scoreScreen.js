import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


class ScoreScreen extends React.Component {

    render() {
        return (
        <View style={styles.container}>
            <Text style={styles.text}>Scores!</Text>
        </View>
        );
    } 
}

export default ScoreScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#272D39',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 20,
      
    }
  });