import React from 'react';
import logo from './logo.svg';
import './App.css';
import logotest from './images/Final_Logo.jpg'

function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
          <img alt='logo' src={logotest} className="logoStyle" width='90' margintop='-100'/>
          <h2 className='header'>KNOW YOUR DNI</h2>
      </nav>
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
