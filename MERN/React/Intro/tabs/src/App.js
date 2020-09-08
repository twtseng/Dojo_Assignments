import React, { useState } from 'react';
import './App.css';
import TabBar from './components/TabBar';

function App() {
  const tabs = [
    { label:"Tab label 1", content:"Tab content 1"},
    { label:"Tab label 2", content:"Tab content 2"},
    { label:"Tab label 3", content:"Tab content 3"},
    { label:"Tab label 4", content:"Tab content 4"},
    { label:"Tab label 5", content:"Tab content 5"},
  ]
  const [selectedContent, setSelectedContent] = useState("");
  
  return (
    <div className="App">
      <TabBar tabs={tabs} setSelectedContent={setSelectedContent}/>
      <div className="SelectedContent">{selectedContent}</div>
    </div>
  );
}

export default App;
