import React, {useState} from 'react';
import Tweet from './Tweet';
//import './App.css'; don't need????? b/c you were importing
// Tweet and that imported ./App.css


function App(){

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);
  const [users, setUser] = useState([
    {name: 'Ed', message: "Hello world"},
    {name: 'John', message: 'my first post'},
    {name: 'Bob', message: 'my second post'}
  ]);

  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  };

  return(
    <div className = "app">
      {users.map(user => (
        // using state to have multiple tags without needing to repeatedly
        // copy and paste tag
        <Tweet name={user.name} message={user.message} />
      ))}

      {/*<h1 className={isRed ? "red":"" }>Change my color!</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>


      <Tweet name="Luis" message="This is a random"/>
      <Tweet name="Tupac" message="tweet random"/>
      <Tweet name="Jack" />
      <Tweet name="Vito" message="omae wae"/>*/}
    </div>
  );
}

// This is what happens behind the scenes
// React.createElement(div);

export default App;
