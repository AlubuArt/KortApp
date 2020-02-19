import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

class LoginScreen extends React.Component {

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.text}>
                    Please login to continue!
                </Text>

                <TextInput style={styles.textInput} placeholder="Username" />
                <TextInput style={styles.textInput} placeholder="Password" />
                <Button title="Login" color="white"/>

            </View>
        )
    };

}
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#272D39',
      paddingTop: 50,

    },
    textInput: {
      height: 40,
      borderColor: 'grey',
      borderWidth: 1,
      marginBottom: 30,
      marginLeft: 20,
      marginRight: 20,
      marginTop: 5,
      
      borderRadius: 10,
      width: 280,
      alignSelf: 'center',
      textAlign: 'center',
      shadowColor: 'black',
      shadowOffset: {
        height: 3,
        wdth: 3,
      },
      shadowRadius: 3,
      shadowOpacity: 0.5,


    },
    nameTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 30,
        paddingBottom: 10,
    }
  });

