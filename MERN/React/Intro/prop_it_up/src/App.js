import React from 'react';
import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard first_name="Joe" last_name="Schmoe" hair_color="Black" age={20} />
      <PersonCard first_name="Sarah" last_name="Cho" hair_color="Blue"  age={30}/>
      <PersonCard first_name="Yina" last_name="Lee" hair_color="Red" age={40} />
    </div>
  );
}

export default App;
