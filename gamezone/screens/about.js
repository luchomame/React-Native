import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function About(){
    return (
        <View style={styles.container}>
            <Text>About Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    padding: 24, //bring it down

  },
});
