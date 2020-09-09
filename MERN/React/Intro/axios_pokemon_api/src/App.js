import React from 'react';
import './App.css';
import axios from 'axios';


const App = () => {
  const [pokemon_list, set_pokemon_list] = React.useState([]);

  const get_pokemons = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000')
    .then(response => set_pokemon_list(response.data.results))
  }
  return (
    <div className="App">
      <button onClick={get_pokemons}>Fetch Pokemon With Axios</button>
      <ul>
      {
        pokemon_list.map(x => <li>{x.name}</li>)
      }
      </ul>
    </div>
  );
}

export default App;
