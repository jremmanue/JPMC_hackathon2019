import React from 'react';
import logo from './logo.svg';
import './App.css';
import logotest from './images/Final_Logo.jpg'
import Overlay from './test'
import Form from './Form.js'

function App() {
  return (
    <div className="App">
      <Overlay></Overlay>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
          <img alt='logo' src={logotest} className="logoStyle" width='90' margintop='-100'/>
          <h2 className='header'>KNOW YOUR DNI</h2>
      </nav>
      <header className="App-header">
        <div id="wrapper">
          <div id="left">
            <Form></Form>
          </div>
          <div id="right"></div>
        </div>
      </header>
    </div>
  );
}

export default App;
