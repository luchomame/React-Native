import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Alert,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import Header from './components/header'
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo'
import Sandbox from './components/sandbox'

export default function App() {
    const [todos, setTodos] = useState([
        {text: 'buy coffee', key: '1'},
        {text: 'create an app', key: '2'},
        {text: 'play on the switch', key: '3'}
    ]);

    const pressHandler = (key) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.key != key);
        });
    }

    const submitHandler = (text) => {

        if(text.length > 3){
            setTodos((prevTodos) => {
                return [
                    //... is spread operator. spreads all old todos into new array
                    { text: text, key: Math.random().toString()}, //not most efficient way of making randoms
                    ...prevTodos
                ];
            });
        } else {
            Alert.alert('OOPS!', 'todos must be over 3 chars long', [
                {text: 'Understood', onPress: () => console.log('alert closed')}
            ]);
        }
    }

  return (
      // <Sandbox />
      <TouchableWithoutFeedback onPress={() => {
          Keyboard.dismiss();
          console.log('dismissed keyboard');
      }}>
        <View style={styles.container}>
            {/* header */}
            <Header />
            <View style={styles.content}>
                <AddTodo submitHandler = {submitHandler}/>
                <View style={styles.list}>
                    <FlatList
                        data={todos}
                        renderItem={({item}) =>  (
                            /* gonna return jsx. Don't need keys property bc flatlist does it automatically*/
                            /*we are passing a function to the todo item so it can interact with the state that is declared here in the app*/
                            <TodoItem item={item} pressHandler={pressHandler}/>
                        )}
                     />
                </View>
            </View>
        </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
      padding: 40,
      //backgroundColor: 'pink',
      flex: 1,
  },
  list: {
      flex: 1, //list will now expand to whats available in the screen
      marginTop: 20,
      //backgroundColor: 'yellow',
  }
});
