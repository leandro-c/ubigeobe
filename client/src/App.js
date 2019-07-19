import React from 'react';
import logoBelatrix from './belatrix.jpg'
import './App.css';
import Tables from './containers/ContainerTables'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logoBelatrix} className="App-logo" alt="logo" />
      </header>
      <Tables/>
    </div>
  );
}

export default App;
