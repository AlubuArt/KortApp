import React from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';


class HomeScreen extends React.Component {

    

    constructor(props) {
        super(props)

        this.state = {
            scorePlayer1: '',
            scorePlayer2: '',
            scorePlayer3: '',
            

        }
        //bind the methods to the instance of this
        this.setScorePlayer1 = this.setScorePlayer1.bind(this);
        this.setScorePlayer2 = this.setScorePlayer2.bind(this);
        this.setScorePlayer3 = this.setScorePlayer3.bind(this)
        this.onPressButton = this.onPressButton.bind(this);
        


    }
    //set the state of each player´s score for the current game
    setScorePlayer1(event) {
        this.setState({ scorePlayer1: event.nativeEvent.text});
    }

    setScorePlayer2(event) {
        this.setState({ scorePlayer2: event.nativeEvent.text});
    }

    setScorePlayer3(event) {
        this.setState({ scorePlayer3: event.nativeEvent.text});
    }

    //store the state of each inputfield in a variable, then push it to an Array og to a SQL DB.
    onPressButton() {
        let score1 = this.state.scorePlayer1;
        let score2 = this.state.scorePlayer2;
        let score3 = this.state.scorePlayer3;
        
        
        alert(score3);
       
    }



    render() {
        return (
        <View style={styles.container}>

            <Text style={styles.text}>Player 1</Text>
            <TextInput  style={styles.textInput} 
                        onChange={this.setScorePlayer1}
                        value={this.state.scorePlayer1} />

            <Text style={styles.text}>Player 2</Text>
            <TextInput  style={styles.textInput} 
                        onChange={this.setScorePlayer2}
                        value={this.state.scorePlayer2} />

            <Text style={styles.text}>Player 3</Text>
            <TextInput  style={styles.textInput} 
                        onChange={this.setScorePlayer3}
                        value={this.state.scorePlayer3} />

            <Button title='tilføj spil'
                    onPress={this.onPressButton} />

        
        </View>
        );
    } 
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
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
      width: 80,
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
    }
  });