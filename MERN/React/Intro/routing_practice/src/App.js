import React from 'react';
import { Router } from '@reach/router';
import './App.css';

function Home() {
  return (
    <div>Welcome</div>
  )
}
function SingleParam(props) {
  if (isNaN(props.param)) {
    return <div>The word is {props.param}</div>;
  } else {
      return <div>The number is {props.param}</div>;
  }
}
function WordAndTwoColors(props) {
  return (
    <div style={{color:props.color, backgroundColor:props.bgColor}}>{props.word}</div>
  )
}
function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home"></Home>        
        <SingleParam path="/:param"></SingleParam>
        <WordAndTwoColors path="/:word/:color/:bgColor"></WordAndTwoColors>
      </Router>
    </div>
  );
}

export default App;
