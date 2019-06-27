import GaugeChart from 'react-gauge-chart'
import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import Popup from 'react-popup'

const header = {
    marginLeft: 235
}

const otherHeader = {
    marginRight: -25
}
class Result extends React.Component {
    // value = 0.23
    constructor(props) {
        super(props)
        this.bias = {dict: {'racist': 0.3, 'LGBTQ': .45}}
    }
    render(){
        return (
            <div>
                <Container>
                    <div className="rowTop">
                        <div className='column'>
                        <p>GENDER</p>
                        <GaugeChart id="gauge-chart1" nrOfLevels={30} colors={["#FF5F6D", "#FFC371"]} arcWidth={0.3} percent={this.bias.dict['racist']} padding="5px"/>
                        </div>
                           
                        <div className='column'>
                        <p>RACIAL</p>
                        <GaugeChart id="gauge-chart2" nrOfLevels={30} colors={["#FF5F6D", "#FFC371"]} arcWidth={0.3} percent={this.bias.dict['LGBTQ']} padding-top="120px"/>
                        </div>
                    </div>
                    <div className="rowTop">
                    <div className='column'>
                        <p>CULTURAL</p>
                        <GaugeChart id="gauge-chart3" nrOfLevels={30} colors={["#FF5F6D", "#FFC371"]} arcWidth={0.3} percent={0.37} />
                    </div> 
                    <div className='column'> 
                        <p>LGBTQ</p> 
                        <GaugeChart id="gauge-chart4" nrOfLevels={30} colors={["#FF5F6D", "#FFC371"]} arcWidth={0.3} percent={0.37} />
                    </div>
                    </div>
                </Container>
            </div>
        );
    }
    
    

}

export default Result
