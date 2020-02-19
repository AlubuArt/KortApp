import React from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';
import Modal, { ModalContent } from 'react-native-modals';


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
        this.onTouchOutside = this.onTouchOutside.bind(this);
        
        


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

    //store the state of each inputfield in a variable, then push it to an Array or to a SQL DB.
    onPressButton() {
        let score1 = this.state.scorePlayer1;
        let score2 = this.state.scorePlayer2;
        let score3 = this.state.scorePlayer3;
        //Set the state of the Modal component to true
        this.setState({ visible: true })
    }
    //Close the modal when touch outside the modal
    onTouchOutside() {
        this.setState({ visible: false})
    }



    render() {
        return (
        <View style={styles.container}>

            <Text style={styles.headerText} >INDTAST NYT RESULTAT</Text>

            <Text style={styles.nameTitle}>Player 1</Text>
            <TextInput  style={styles.textInput} 
                        onChange={this.setScorePlayer1}
                        value={this.state.scorePlayer1} />

            <Text style={styles.nameTitle}>Player 2</Text>
            <TextInput  style={styles.textInput} 
                        onChange={this.setScorePlayer2}
                        value={this.state.scorePlayer2} />

            <Text style={styles.nameTitle}>Player 3</Text>
            <TextInput  style={styles.textInput} 
                        onChange={this.setScorePlayer3}
                        value={this.state.scorePlayer3} />

            <Button title='Tilføj Resultat'
                    onPress={this.onPressButton} />

            {/* pops up when the "tilføj resultat" button is pressed. Thx to JACKLAM718 for the modal component: https://github.com/jacklam718/react-native-modals/blob/master/README.md */}
            <Modal visible={this.state.visible}
                    onTouchOutside={this.onTouchOutside}>
                     {/*The content of the model*/}   
                    <ModalContent>
                        <Text>
                            Er du sikker på at du vil tilføje resultaterne til regnskabet?
                        </Text>
                        <Button title="JA"/><Button title="NEJ"/>
                        
                    </ModalContent>
            </Modal>

        
        </View>
        );
    } 
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 3,
      backgroundColor: '#272D39',
      paddingTop: 50,

    },
    textInput: {
      height: 45,
      backgroundColor: '#52575D',
      //borderColor: 'grey',
      borderWidth: 1,
      marginBottom: 30,
      marginLeft: 20,
      marginRight: 20,
      marginTop: 5,
      borderRadius: 5,
      width: 100,
      alignSelf: 'center',
      textAlign: 'center',
      shadowColor: 'black',
      shadowOffset: {
        height: 3,
        wdth: 3,
      },
      fontSize: 20,
      color: '#AAA8B4',
      shadowRadius: 3,
      shadowOpacity: 0.5,


    },
    nameTitle: {
      fontSize: 20,
      //fontWeight: 'bold',
      textAlign: 'center',
      color: 'grey',
      textAlign: 'center',


    },
    text: {
        fontSize: 20,
        textAlign: 'center',
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'grey',
        textAlign: 'center',
        paddingBottom: 20,
        paddingTop: 35,
    },
    
  });