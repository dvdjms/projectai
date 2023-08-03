import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

interface Props {
      // title: string;
      onPress?: () => void;
}

export default function SearchButton(props: Props) {

      const { onPress } = props;

      return (
            <>
                  <TouchableOpacity
                        style={styles.button}
                        onPress={onPress}
                        >
                        
                        <Text style={styles.text}>Go</Text>

                  </TouchableOpacity>
            </>
      )
}

const styles = StyleSheet.create({
      text: {
        fontSize: 18,
        color: '#4d2b2b',
        paddingTop: 7,
        fontWeight: 'bold'
      },
      button: {
            backgroundColor: '#ecdcef',
            height: 47,
            width: 45,
            padding: 2,
            borderRadius: 3,
            alignItems: 'center',
      }
})