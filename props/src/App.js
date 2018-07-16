import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>
          prop number is: {this.props.propNumber}
          prop String is: {this.props.propString}
          prop Object is: {this.props.propObject.obj1}
        </h3>
        <Parent />
      </div>
    );
  }
}

App.propTypes = {
  propObject: PropTypes.object,
  propString: PropTypes.string.isRequired,
  propNumber: PropTypes.number
}

App.defaultProps = {
  propNumber:3,
  propString:"This is a prop string",
  propObject: {
    obj1:"I am obj 1",
    obj2: "I am obj2",
    obj3: "I am obj3"
  }
}

class Parent extends Component{

  constructor(props){
    super(props);

    this.state = {
      cars: ['s-audi', 's-idk', 'state', 'honda']
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    this.setState({cars: this.state.cars.reverse()});
  }
  render(){
    return(
      <div>
        <button onClick={this.handleClick}><h2>Just some info</h2></button>
        <Cars msg="cars are gr8" model="34903" coolCars={this.state.cars}/>
      </div>
    );
  }
}

Parent.defaultProps = {
  cars: ['BMW', 'MERC', 'City', 'Audi']
}

class Cars extends Component{
  render(){
    console.log(this.props);
    return(
      <div>
        <h3>
          I am from Cars component
          <p>{this.props.msg}</p>
          <p>{this.props.model}</p>
          <div>{this.props.coolCars.map((item, i)=>{
            return <p key={i}>{item}</p>;
          })}</div>
        </h3>
      </div>
    );
  }
}

export default App;
