import React from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';
import Modal, { ModalContent, ModalButton, ScaleAnimation  }  from 'react-native-modals';
import { LinearGradient } from 'expo-linear-gradient';
import { Divider } from 'react-native-elements';
import ModalFooter from 'react-native-modals/dist/components/ModalFooter';
import firebase from 'firebase';
import { SafeAreaView } from 'react-native-safe-area-context';


class InputScoreScreen extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            
            scorePlayer1: '',
            scorePlayer2: '',
            scorePlayer3: '',
            modalVisible: false,
        }

        //bind the methods to the instance of this
        this.setScorePlayer1 = this.setScorePlayer1.bind(this);
        this.setScorePlayer2 = this.setScorePlayer2.bind(this);
        this.setScorePlayer3 = this.setScorePlayer3.bind(this)
        this.onPressButton = this.onPressButton.bind(this);
        this.onTouchOutside = this.onTouchOutside.bind(this);
        this.onModalButtonPressYes = this.onModalButtonPressYes.bind(this);
        this.onModalButtonPressNo = this.onModalButtonPressNo.bind(this);
    }


    componentDidMount() {
        
    };
    
    
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
        
        //Set the state of the Modal component visible to true
        this.setState({ modalVisible: true })
    }
    //Close the modal when touch outside the modal
    onTouchOutside() {
        this.setState({ modalVisible: false})
    }

    onModalButtonPressYes() {
        

        let score1 = this.state.scorePlayer1;
        let score2 = this.state.scorePlayer2;
        let score3 = this.state.scorePlayer3;
        //Write logic here that sends the score to the database, and clear set the state of the textinput fields
        firebase.database().ref('users/user/game/player1').push(score1);
        firebase.database().ref('users/user/game/player2').push(score2);
        firebase.database().ref('users/user/game/player3').push(score3)
        
        
        .then(() =>{
            console.log('Updatede the score for the players');
        }).catch((error) => {
            console.log(error);

        }).then(() => {
        //Maybe add a confirmation pop that shows the new overall score
        this.setState({ modalVisible: false})
        this.setState({scorePlayer1: ' ', scorePlayer2: ' ', scorePlayer3:' '})
        });
        //Send a notification to the players that the score have been updated

    }

    onModalButtonPressNo() {    
        this.setState({ modalVisible: false });
    }

  

    render() {
        return (

            <SafeAreaView flex='2'>
           
           <LinearGradient  colors={['black', 'grey']} style={styles.linearGradient}>

            <Text style={styles.headerText} >INDTAST</Text>
            <Text style={styles.headerText} >NYT</Text>
            <Text style={styles.headerText} >RESULTAT</Text>
            <Divider style={styles.divider}></Divider>

            </LinearGradient>

            <View style={styles.inputFields}>

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

        
            </View>

            
            <View flex='1'>

            <Button style={styles.button}
                    title='Tilføj Resultat'
                    onPress={this.onPressButton}
                    color="white"
                     />
            </View>         
            

            {/* pops up when the "tilføj resultat" button is pressed. Thx to JACKLAM718 for the modal component: https://github.com/jacklam718/react-native-modals/blob/master/README.md */}
            <Modal  visible={this.state.modalVisible}
                    onTouchOutside={this.onTouchOutside}
                    modalAnimation={new ScaleAnimation()}
                    >
                <ModalContent style={styles.modalContent}>
                    <Text style={styles.modalText}>
                        Er du sikker på at du vil tilføje resultaterne til regnskabet?
                    </Text>
                    
                    <Text style={styles.modalText}>Player1: {this.state.scorePlayer1}</Text>
                    <Text style={styles.modalText}>Player2: {this.state.scorePlayer2}</Text>
                    <Text style={styles.modalText}>Player2: {this.state.scorePlayer3}</Text>

                </ModalContent>
                <ModalFooter>
                        <ModalButton text="JA" onPress={this.onModalButtonPressYes} key="1"/>
                        <ModalButton text="NEJ" onPress={this.onModalButtonPressNo} key="2"/>
                </ModalFooter>
                     {/*The content of the model*/}   
                    
            </Modal>


            </SafeAreaView>

        
            
       
        );
    } 
}

export default InputScoreScreen;

const styles = StyleSheet.create({
    linearGradient: {
      flex: 3,
        paddingTop: 20,
    },
    inputFields: {
        paddingTop: 10,
        
    },

    SafeAreaView: {
        alignItems: "stretch",
    },

    textInput: {
      height: 45,
      backgroundColor: '#52575D',
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

    divider: {
        paddingTop: 20,
        backgroundColor: 'transparent'
    }, 
    text: {
        fontSize: 20,
        textAlign: 'center',
    },
    headerText: {
        fontSize: 50,
        fontWeight: '100',
        color: 'white',
        textAlign: 'center',
        
        
        paddingBottom: 0,
        paddingTop: 0,
    },
    modalContent: {
        padding: 0,
        textAlign: 'center'

    },
    modalText: {
        paddingBottom: 10,
        textAlign: 'center',

    }
  });

  