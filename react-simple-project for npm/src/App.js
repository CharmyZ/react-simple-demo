import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var i = 1;
var myStyle = {
  fontSize: 30,
  color: '#FF0000'
};
var arr = [
   <h1>React</h1>,
   <h2> Demo</h2>,
];
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/*demo1*/}
        <div><h1>{1+1}</h1></div>
        {/*demo2*/}
        <h1>{i == 1 ? 'True!' : 'False'}</h1>       
        {/*demo3*/}
        <h1 style = {myStyle}> React Demo</h1>
        {/*demo4*/}
        <div>{arr}</div>,
      </div>
    );
  }
}

export default App;
