import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <Person name="Bob" age="23"/>
        <Person name="Jill" age="31"/>
        <Person name="Sophie" age="25"/>
      </div>
    );
  }
}

export default App;
