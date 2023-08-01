import { View, Text, StyleSheet } from 'react-native';

export default function Settings() {


      return (
            <View style={ styles.container }>
                  <Text style={styles.text}>Settings</Text>
            </View>

      )


}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            // alignItems: 'center',
            // justifyContent: 'space-evenly',

            padding: 30,
            backgroundColor: '#7303a8'
          },
          text: {
            fontSize: 20,
            fontWeight: 'bold',
            color: 'orange',
            paddingTop: 10,
      },
})