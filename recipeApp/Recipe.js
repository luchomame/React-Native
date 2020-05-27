import React from 'react';
import { Text,View, Image } from 'react-native';


const Recipe = (props) =>{
    return(
      <View >
        <Text>{props.title}</Text>
        <Text>{props.calories}</Text>
        <Image source={{uri: props.image}}/>
        <Text>{props.url}</Text>
      </View>

    );



}

export default Recipe;
