import React, { PureComponent } from 'react';
import './App.css';
import LineGraph from './components/lineChart';
const data1 = '1 2 1 0 1 2 1 8 9 8 1 2 0 2 1 2 3 1 2 0 8 9 2 0 3 0 2 1 2 3 8 10 2 1 2 3 0 1 2 1 2 7 6 9 1 2 0 1 2 1';
const data2 = '0 2 1 2 3 10 12 1 1 2 3 0 1 2 1 2 7 6 9 1 2 0 1 2 1 2 1 3 0 2 3 1 1 2 3 10 9 12 0 2 3 1 2 0 1 7 11 0 1 2';
const data3 = '2 1 3 0 2 2 9 7 2 3 1 2 9 8 2 3 1 2 0 1 2 3 0 10 9 1 2 1 0 1 2 1 8 9 8 1 2 0 2 1 2 1 14 10 0 1 1 2 0 3';

export default class Example extends PureComponent {
  
  render() {
    let data = [];
    let input = [data1.split(' '),data2.split(' '),data3.split(' ')];
    for(let j=0;j<input.length;j++){
      var tempdata = [];
      for(let i=0;i<input[j].length;i++){
        //console.log(input[j].length,input[j]);
        var obj= {"time":i,val:input[j][i]};
        if(input[j][i]>5){
          obj["signal"]=1;
        }else{
          obj["signal"]=0;
        }
        //console.log("obj",obj);
        tempdata.push(obj);
      }
      data.push(tempdata);
    }
   
    //console.log(data);
    return (
      <div id="App">
        <h1>Signal Analysis</h1>
        {data.map((d,key)=>{
          return(<LineGraph key={key} data={d}/>)
        })}
      </div>
    );
  }
}
