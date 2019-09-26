import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow,mount } from 'enzyme';
configure({ adapter: new Adapter() });


describe('renders component in the page',()=>{
  let wrapper;
  beforeEach(()=>{
    wrapper = shallow(<App />);
    //console.log("before each function will get called");
  });
  it('renders the h1 element with text',()=>{
    const header = wrapper.find('h1').text();
    expect(header).toEqual('Signal Analysis');
  })
  it('renders the main div',()=>{
    //console.log("renders the main div");
    const maindiv = wrapper.find('#main');
    expect(maindiv.length).toBe(1);
  });
})