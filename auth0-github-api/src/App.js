import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import GitHub from './Github';
import Header from './Components/Header';
import auth0 from 'auth0-js';



class App extends Component {

  auth0 = new auth0.WebAuth({
    domain: 'wlee367.auth0.com',
    clientID: 'Vlqr001iKMx9i4az0b0D2XAqSl0Lxu6f',
    redirectUri: 'http://localhost:3000/callback',
    audience: 'https://wlee367.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });



  constructor(props){
    super(props);

    this.state = {
      isToken: '',
      profile: {}
    }
  }

  static defaultProps ={
    clientId: 'wlee367.auth0.com',
    domain: 'Vlqr001iKMx9i4az0b0D2XAqSl0Lxu6f'
  }

  componentWillMount(){
    this.lock = new Auth0Lock(this.props.clientId, this.props.domain);

    this.lock.on('authenticated', (authResult)=>{
      console.log(authResult);
    });
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <GitHub/>
      </div>
    );
  }
}

export default App;
