import { StatusBar } from 'expo-status-bar';
import React, {useCallback} from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation/index';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
  
// SplashScreen.preventAutoHideAsync();

export default function App() {


  // const [fontsLoaded] = useFonts({
  //   'Ubuntu-Regular': require('./assets/fonts/Ubuntu-Regular.ttf'),
  //   'Ubuntu-Bold': require('./assets/fonts/Ubuntu-Bold.ttf')
  // });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (

    // <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
    <SafeAreaView style={styles.container} >
      <SafeAreaProvider  >
        <StatusBar
          style="light"
        />
        <View style={styles.view}>
          <Text style={styles.text}>project</Text> 
          <Text style={styles.text1}>ai</Text>
        </View>
        <Navigation />

      </SafeAreaProvider>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#31303A',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  text: {
    marginLeft: 70,
    textAlign: 'right',
    fontSize: 20,
    marginBottom: 10,
    color: '#f6eaea',
    fontWeight: '800',
    width: 150,
  },
  text1: {
    textAlign: 'left',
    fontSize: 20,
    marginBottom: 10,
    color: '#f49999',
    fontWeight: '800',
    borderColor: 'red',
    width: 150,
  },
  view: {
    alignSelf: 'center',
    flexDirection: 'row',
  }

});
