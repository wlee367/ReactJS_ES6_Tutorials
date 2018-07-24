import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CourseSales from './Component/Course/CourseSales';

class App extends Component {
  render() {

    var courses = [
      { name: 'Complete ios10 dev course', price:199},
      { name: 'Complete Pentesting course', price:299},
      { name: 'Complete frontend dev course', price:283},
      { name: 'Complete your face dev course', price:439}
    ];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Course Purchase Page</h1>
        </header>
      <CourseSales items={courses}/>
      </div>
    );
  }
}

export default App;
