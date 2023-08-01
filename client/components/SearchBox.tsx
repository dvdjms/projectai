import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';


export default function SearchBox() {

      const [userInput, setUserInput] = useState('');


      const handleChangeText = (text: string) => {
            setUserInput(text);
      };

      const handleClick = () => {
            if (!userInput) {
                  alert('Please ask a question');
            }
            else {
                  console.log('print this', userInput)

                  // send to server
      
                  setUserInput('');
            };
      };


      return (
            <>
                  <View style={styles.container}>
                        <TextInput 
                              style={styles.text} 
                              placeholder="Ask question?" 
                              // ref={searchInput}
                              value={userInput}
                              onChangeText={handleChangeText}
                        />

                  </View>
                  <TouchableOpacity 
                        style={styles.button}
                        onPress={handleClick}>
                        
                        <Text>Press Here</Text>

                  </TouchableOpacity>
      
            </>
      )
}

const styles = StyleSheet.create({
      text: {
        fontSize: 16,
        color: '#000000',
        paddingTop: 7,
      },
      container: {
        paddingTop: 5,
      //   borderColor: '#4dfff0',
      //   borderWidth: 2,
        width: 350,
        marginTop: 15,
        marginBottom: 15,
        padding: 10,
        borderRadius: 3,
        backgroundColor: '#f1f1f1',
      },
      button: {
            backgroundColor: '#f194ff',
      }
})