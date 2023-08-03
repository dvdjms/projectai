import { View, Text, StyleSheet, SafeAreaView, ScrollView,} from 'react-native';
import SearchBox from '../components/SearchBox';

export default function HomeScreen() {


      return (

            <SafeAreaView style={styles.container}>



              <ScrollView style={styles.scrollview} showsVerticalScrollIndicator={false}>
                  <Text style={styles.text}>Edinburgh</Text>
              </ScrollView>
              <SearchBox />
          </SafeAreaView>

      )
}

const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#25242B'
      },
      text: {
        fontSize: 16,
        color: '#000000',
        paddingTop: 10,
      },
      scrollview: {
        paddingTop: 10,
        // borderColor: '#4dfff0',
        // borderWidth: 2,
        width: 350,
        marginTop: 15,
        marginBottom: 15,
        padding: 15,
        borderRadius: 3,
        backgroundColor: '#f1f1f1',
      },
})