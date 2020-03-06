import React from ' react';
import {View, Text, StyleSheet } from 'react-native';

class Main_test extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        }
    }

    render() {

        const { currentUser } = this.state;

        return(
            <View style={styles.container}>
                <Text>
                    Hi {currentUser && currentUser.email}!
                </Text>
            </View>
        )
    }
}

export default Main_test;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })