import React from 'react';
import { StyleSheet } from 'react-native';

const AppStyles = StyleSheet.create({
  App: {
    minHeight: "100%",
    // background-image: -webkit-linear-gradient(bottom, #a18cd1 0%, #fbc2eb 100%),
    // background-image: -o-linear-gradient(bottom, #a18cd1 0%, #fbc2eb 100%),
    // background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)

  },
  Input:{
    margin: 15,
    padding: 5, /* keeps it from starting at the very edge */
    height: 40,
    width: "40%",
    borderColor: "black",
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: "#b177df",
    padding: 10,
    margin: 15,
    height: 40,
    alignSelf: 'flex-start',
  },
  horizontal: {
    flexDirection: 'row',
  }
});

export default AppStyles;
