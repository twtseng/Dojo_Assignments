import React, { useState } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import ColorBlock from './components/ColorBlock';

function App() {
  const [blocks, setBlocks] = useState([]);
  const AddBlock = color => {
    let newBlock = { color: color };
    setBlocks([...blocks, newBlock]);
  }
  return (
    <div className="App">
      <ColorPicker submitColor={AddBlock}/>
      <div className="Blocks">
      { 
        blocks.map(x => <ColorBlock color={x.color}/>)
      }
      </div>
    </div>
  );
}

export default App;
