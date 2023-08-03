import { View, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import SearchButton from './SearchButton';

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
            <View style={styles.outercontainer}>
                  <View style={styles.container}>
                        <TextInput 
                              style={styles.text} 
                              placeholder="Ask question?" 
                              // ref={searchInput}
                              value={userInput}
                              onChangeText={handleChangeText}
                        />
                  </View>
                  <View style={styles.buttoncontainer} >
                        <SearchButton onPress={handleClick} />
                  </View>
            </View>
            </>
      )
}

const styles = StyleSheet.create({
      text: {
            fontSize: 16,
            color: '#000000',
            paddingTop: 7,
            // justifyContent: 'flex-start',
      },
      container: {
            flex: 1,
            paddingTop: 5,
            width: 270,
            marginTop: 15,
            marginBottom: 15,
            padding: 10,
            borderRadius: 3,
            backgroundColor: '#f1f1f1',
      },
      outercontainer: {
            width: 350,
            flexDirection: 'row',
      },
      buttoncontainer: {
            marginTop: 10,
            marginBottom: 10,
            padding: 5,
            width: 50,
            // justifyContent: 'flex-end'
      }

})