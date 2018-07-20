import React, { Component } from 'react';

import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <Header />
      <Body />
      <Footer />
      </div>
    );
  }
}

export default App;
