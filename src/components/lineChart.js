import React,{Component} from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
import './lineChart.css';

class LineGraph extends Component{
    render(){
        //console.log("props",this.props);
        return(
            <div id="graph-wrapper">
                <LineChart
                className="line-graph-data"
                width={1000}
                height={300}
                data={this.props.data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis dataKey=""/>
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="val" stroke="#82ca9d" />
                </LineChart>
                <LineChart
                className="line-graph-signal"
                width={1000}
                height={300}
                data={this.props.data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="signal" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </div>
        )
    }
}

export default LineGraph;