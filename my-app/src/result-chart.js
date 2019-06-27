import GaugeChart from 'react-gauge-chart'
import React from 'react'

class Result extends React.Component {
    render(){
        return (
        <div>
            <div className="row">
            <GaugeChart id="gauge-chart1" nrOfLevels={30} colors={["#FF5F6D", "#FFC371"]} arcWidth={0.3} percent={0.37} />
            </div>
            <div className="row">
            <GaugeChart id="gauge-chart2" nrOfLevels={30} colors={["#FF5F6D", "#FFC371"]} arcWidth={0.3} percent={0.37} />
            </div>
            <div className="row">
            <GaugeChart id="gauge-chart3" nrOfLevels={30} colors={["#FF5F6D", "#FFC371"]} arcWidth={0.3} percent={0.37} />
            </div>
            <div className="row">
            <GaugeChart id="gauge-chart4" nrOfLevels={30} colors={["#FF5F6D", "#FFC371"]} arcWidth={0.3} percent={0.37} />
            </div>
        </div>
        )
       
    }
    

}

export default Result

