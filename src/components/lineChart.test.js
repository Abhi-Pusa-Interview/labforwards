import React from 'react';
import ReactDOM from 'react-dom';
import LineGraph from './lineChart';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow,mount } from 'enzyme';
configure({ adapter: new Adapter() });

const data = [{time: 0, val: "1", signal: 0},{time: 1, val: "2", signal: 0},
              {time: 2, val: "1", signal: 0},{time: 3, val: "0", signal: 0},
              {time: 4, val: "1", signal: 0},{time: 5, val: "2", signal: 0}];

describe('renders component for line chart',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<LineGraph data={data}/>)
    })
    it('renders the wrapper div',()=>{
        const graphdiv = wrapper.find('#graph-wrapper');
        expect(graphdiv.length).toBe(1);
    });
    it('renders the data graph component',()=>{
        const graph = wrapper.find('.line-graph-data');
        expect(graph.length).toBe(1);
    });
    it('renders the data graph component',()=>{
        const graph = wrapper.find('.line-graph-signal');
        expect(graph.length).toBe(1);
    });
})