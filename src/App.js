import React from 'react';
import './App.css';
import AddPlayer from './Components/AddPlayer/AddPlayer';
import Header from './Components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <AddPlayer></AddPlayer>
    </div>
  );
}

export default App;
