import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import GaugeChart from 'react-gauge-chart'
import logo from './logo.svg';
import './App.css';
import Result from './result-chart'

class App extends React.Component{
  render() {
    return (
      <div className="App">
        <header className="App-header">
        
        <Result></Result>

        </header>
      </div>
    );
  }
}


export default App;
