/* @flow */
/* this is to play with flexbox */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function Sandbox() {
    return (
      <View style={styles.container}>
        <Text style={styles.boxOne}>one</Text>
        <Text style={styles.boxTwo}>two</Text>
        <Text style={styles.boxThree}>three</Text>
        <Text style={styles.boxFour}>four</Text>
      </View>
    );

}

const styles = StyleSheet.create({
  container: {
      paddingTop: 40,
      backgroundColor: '#333',
     // flex: 1, // flexible component that flexes all the way down to the bottom. all available room
      // everything inside flex container becomes flex item
      flexDirection: 'row', //main axis is flexDirection.
      justifyContent: 'space-between', //how its organized in main axis
      // if we add flex: 1 to boxOne, 2, 3, 4 it will take up all space in the flexDirection
      alignItems: 'flex-end', //how items are spread out in cross axis
      // if flexDirection is row, cross axis is vertical. if flexDirection is column then cross axis is horizontal
  },
  // default is to take up whole width
  boxOne: {
      // if we do flex 2 it will take up twice as much space and so on
      flex: 2,
      backgroundColor: 'violet',
      padding: 10,
  },
  boxTwo: {
      flex: 1,
      backgroundColor: 'gold',
      padding: 20,
  },
  boxThree: {
      flex: 1,
      backgroundColor: 'coral',
      padding: 30,
  },
  boxFour: {
      flex: 1,
      backgroundColor: 'skyblue',
      padding: 40,
  },
});
