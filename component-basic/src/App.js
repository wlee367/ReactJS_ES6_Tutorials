import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.yourname = "John";
    this.state = {};
  }

  sayHelloThere(name){
    return "Hello " + name;
  }

  render() {
    const myName = "Jason";
    return (
      <div className="App">
       <h2>Just some sample text: {this.yourname}</h2>
      </div>
    );
  }
}

export default App;
