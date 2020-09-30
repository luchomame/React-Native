import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home'
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

// MUST BE IN GAMEZON DIRECTORY OR ELSE IT WONT WORKKKKK

// different ways to do it without using hooks
const getFonts = () =>  Font.loadAsync({
    // this grabs the font that is needed.
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
});
// allows us to use font in react native CSS equivalent called font family

// we need to wait and see if getFonts has loaded fonts or not
    // why not use await???? it'll still work 

//{ can shorten it. we are only returning one thing, no need to make it a large anonymous funciton, think lambda

export default function App() {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    if(fontsLoaded)
        return (
          <Home />
        );
    else
        return (
            <AppLoading
                startAsync={getFonts}
                onFinish={() => setFontsLoaded(true)}
            />
        )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
