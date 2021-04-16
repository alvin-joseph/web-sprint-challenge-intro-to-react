import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

import Character from './components/Character';
import { url } from './theme/index';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
    .get("https://swapi.dev/api/people/")
    .then(res => {
      //console.log(res.data);
      setCharacters(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  return (
    <div className="App">
      <img src={url} alt='star wars'></img>
      <h1 className="Header">Characters</h1>
      {characters.map((character, i) => {
        return <Character key={i} character={character}/>
      })}
    </div>
  );
}

export default App;
