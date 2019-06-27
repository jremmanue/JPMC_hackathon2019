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

// class App extends React.Component {
//   render() {
//     return (
//       <>
//       <Container>
//         <Row>
//           <Col xs={12} lg={{offset: 2, span: 8}}>
//             <h1>React Gauge Chart Demo</h1>
//           </Col>
//         </Row>  
//         <Row>
//           <Col xs={12} lg={6}>
//             <h6>GaugeChart with default props</h6>
//             <GaugeChart id="gauge-chart1" />
//           </Col>
//           <Col xs={12} lg={6}>
//             <h6>GaugeChart with 20 levels</h6>
//             <GaugeChart id="gauge-chart2" nrOfLevels={20} percent={0.86} needleColor="#345243" />
//           </Col>
//         </Row>
//         <Row>
//           <Col xs={12} lg={6}>
//             <h6>GaugeChart with custom colors</h6>
//             <GaugeChart id="gauge-chart3" nrOfLevels={30} colors={["#FF5F6D", "#FFC371"]} arcWidth={0.3} percent={0.37} />
//           </Col>
//           <Col xs={12} lg={6}>
//             <h6>GaugeChart with larger padding between elements</h6>
//             <GaugeChart id="gauge-chart4" nrOfLevels={10} arcPadding={0.1} cornerRadius={3} percent={0.6} />
//           </Col>
//         </Row>
//       </Container>

//       </>
//     );
//   }
// }



export default App;
