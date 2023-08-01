import { View, Text, StyleSheet } from 'react-native';

export default function ChatSCreen() {


      return (
            <View style={ styles.container }>
                  <Text style={styles.text}>Chat</Text>
            </View>

      )

}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            // alignItems: 'center',
            // justifyContent: 'space-evenly',
            padding: 30,
            backgroundColor: '#08210c'
      },
      text: {
            fontSize: 20,
            fontWeight: 'bold',
            color: 'orange',
            paddingTop: 10,
      },
})