import React from 'react';
import logo from './logo.svg';
import './App.css';
import Die from './die';


function App() {
  return (
    <div className="App">
      <Die face="five"/>
      <Die face="four"/>
      <Die face="six"/>
      <Die face="five"/>
    </div>
  );
}

export default App;
