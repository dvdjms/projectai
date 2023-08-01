import { View, Text, StyleSheet } from 'react-native';


export default function CheckOutScreen() {


      return (
            <View style={ styles.container }>
               <Text style={styles.text}>Check Out</Text>
            </View>

      )
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            // alignItems: 'center',
            // justifyContent: 'space-evenly',
            backgroundColor: '#6650f6',
            padding: 30,

      },
      text: {
            fontSize: 20,
            fontWeight: 'bold',
            color: 'orange',
            paddingTop: 10,
      },
})