import React, { useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const APP_ID='d521382e';
  const APP_KEY ='2816434cb3270972cef31f1d716bf7bc';

  /*
  // ex curl req
  // const exampleReq=
  // `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  //const [counter, setCounter] = useState(0);

  // arrow function as parameter
  // useEffect(() =>{
  //   // runs at every page re render
  //   console.log("Effect has been run");
  // },
  // // by adding this empty array the effect doesn't run again. don't want it
  // // to run a bunch of times. Can add variables like counter and it runs
  // // every time counter changes
  //  []);
  */

  const [recipes, setRecipes] = useState([]);
  // allow user to Search
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken'); //chicken default

  // bc preventDefault it now only runs when page refresh (click submit button)
  useEffect( () => {
    // get recipes console logs a dictionary
    getRecipes();
  }, [query]); // do not add search to second var. it will update it every time you type.

  const getRecipes = async() => {
    // external request needs await. we don't know when the api will respond
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
    // if error you need to wait. exceeded requests
    //console.log(data.hits);

    // CAN ALSO BE REQRITTEN AS
    // fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    // .then(response => {
    //   response.json();
    // })
  }

  // this is to change the text box. if we don't add this func then itll always be
  // an empty string
  const updateSearch = e => {
    setSearch(e.target.value);
    // see the search
    //console.log(search); you can see every letter typed
    // can now change the q in fetch
  };
  // e is event
  const getSearch = e => {
    e.preventDefault(); // stop page refresh
    setQuery(search);
    setSearch(''); // after you look up set text back to empty
  };


  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
          <input className="search-bar" type="text" value={search}
              onChange={updateSearch}/>
          <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe =>(
        // we named our const recipe. the stuff we get from the api
        // is a dict {0: recipe: (stuff)}
        // the key prop warning means react wants a specific key to all items.
        // helps when removing and re-rendering. can remove a single component this way
        <Recipe key={recipe.recipe.label} title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          url={recipe.recipe.url}
          ingredients={recipe.recipe.ingredients}
          />
      ) )}
    </div>
      <br />
    </div>
  );
}

export default App;
