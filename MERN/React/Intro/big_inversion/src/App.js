import React from 'react';
import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard first_name="Joe" last_name="Blow" age="33" hair_color="red" />
      <PersonCard first_name="Harry" last_name="Farry" age="44" hair_color="green" />
      <PersonCard first_name="Jean" last_name="Olean" age="55" hair_color="yellow" />
      <PersonCard first_name="Margo" last_name="Fargo" age="66" hair_color="brown" />
    </div>
  );
}

export default App;
