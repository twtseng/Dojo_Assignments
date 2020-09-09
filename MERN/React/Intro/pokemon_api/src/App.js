import React from 'react';
import './App.css';


const App = () => {
  const [pokemon_list, set_pokemon_list] = React.useState([]);

  const get_pokemons = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=1000')
    .then(response => response.json())
    .then(response => set_pokemon_list(response.results))
  }
  return (
    <div className="App">
      <button onClick={get_pokemons}>Fetch Pokemon</button>
      <ul>
      {
        pokemon_list.map(x => <li>{x.name}</li>)
      }
      </ul>
    </div>
  );
}

export default App;
