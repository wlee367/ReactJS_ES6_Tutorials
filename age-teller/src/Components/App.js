import React, {Component} from 'react';

// import {Form, FormControl, Button} from 'react-bootstrap';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


import AgeStats from './AgeStats';

import './App.css';

class App extends Component{
    constructor(props){
        super(props);

        this.state ={
            newDate: '',
            birthday: '1992-06-21',
            showStats: false
        }
    }

    changeBirthday() {
        console.log(this.state);
        this.setState({
            birthday: this.state.newDate,
            showStats: true
        });
    }
    render(){
        return(
            <div className="App">
                <Form inline>
                <h2>Input your birthday!</h2>
                <FormGroup onChange={ event => this.setState({
                    newDate: event.target.value
                })}>
                    <Label for="exampleDate"></Label>
                    <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
                    </FormGroup>
                    <Button color="primary" onClick={() => this.changeBirthday()}>Submit</Button>
                </Form>
                {
                    this.state.showStats ?
                    <div className="fade age-stats">
                    <AgeStats date={this.state.birthday}/>
                    </div>
                    :
                    <div></div>
                }
            </div>
        );
    }
}
export default App;