import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function Home(){
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Home Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    padding: 24, //bring it down

  },
  titleText: {
      fontFamily: 'nunito-bold',
      fontSize: 18,
  }
});