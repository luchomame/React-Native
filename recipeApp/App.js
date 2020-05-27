import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { Input } from 'react-native-elements';
import AppStyles from './style/AppStyles';
import Recipe from "./Recipe";

export default function App() {
  const APP_ID='d521382e';
  const APP_KEY ='2816434cb3270972cef31f1d716bf7bc';

  const [recipes, setRecipes] = useState([]);

  // allows user to search
  const [search, setSearch] = useState("");
  const [query, setQuery]= useState("chicken");

  useEffect( () =>{
    getRecipes();
  }, [query]); // it will use effect whenever query is set

  const getRecipes = async() => {
    // exeternal request needs await. need to wait on api
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    // hits is a value of data structure
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e => {
      setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault(); // stop page refresh
    setQuery(search); // refreshes api call. getRecipes() is called when this is changed
    setSearch(''); // changes textbox to empty
    console.log("HERE");
    console.log(recipes);
  };

  const handleSearch = (text) =>{
      console.log(text);
      setSearch(text);
  };


  return (
    <View style={AppStyles.App}>
      <View style={AppStyles.horizontal}>
          <TextInput style={AppStyles.Input} value={search} onChangeText={handleSearch} />
          <TouchableOpacity style={AppStyles.submitButton} onPress={getSearch}>
            <Text>Search</Text>
          </TouchableOpacity>
      </View>
      {recipes.map(recipe => (
        <Recipe
          title={recipe.recipe.label}
          calories = {recipe.recipe.calories}
          image={recipe.recipe.image}
          url={recipe.recipe.uri}
           />
      ))}
    </View>
  );
}
