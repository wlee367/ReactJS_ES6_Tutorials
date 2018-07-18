import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Component Life Cycle</h1>
        </header>
        <Body />
      </div>
    );
  }
}


class Body extends Component{
  constructor(props){
    super(props);

    this.state = {
      randomNumber: 0
    };
    this.getRandomNumber = this.getRandomNumber.bind(this);
  }

  getRandomNumber(){
      this.setState({randomNumber: Math.floor(Math.random()*10) })
  }
  render(){
    return(
      <div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => this.getRandomNumber()}>Random Number Generator </button>
        <Number myNumber={this.state.randomNumber}/>
      </div>
    );
  }
}

class Number extends Component{
 
  componentDidMount(){
    console.log("componentDidMount called here");
  }

  componentWillMount(){
    console.log('lol');
  }

  componentWillReceiveProps(newProps){
    console.log("componentWillReceivePRops called")
  }

  shouldComponentUpdate(newProps, nextState){
    console.log('Called should component update');
    return true;
  }

  componentWillupdate(newProps, nextState){
    console.log('Called Component will update');
  }

  componentDidUpdate(newProps, nextState){
    console.log('called component did update');
  }

  componentWillUnmount(){
    console.log('Called componentwill unmount');
  }
  render(){
    return(
      <div>
        <br />
        {this.props.myNumber}
      </div>
    )
  }
}


export default App;
