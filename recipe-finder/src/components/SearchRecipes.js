import React, {Component} from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {setRecipes} from '../actions';

class SearchRecipes extends Component {

    constructor(props){
        super(props);

        this.state = {
            ingreidents: '',
            dish: ''
        }
    }

    search() {
        let { ingredients, dish } = this.state;
        const url = `http://www.recipepuppy.com/api/?=${this.state.ingreidents}&q=${this.state.dish}`;

        fetch(url, {
            method: 'GET'
        }).then(response => response.json())
        .then(json=>this.props.setRecipes(json.results));
    }

    render() {
        return(
            <Form inline>
                <FormGroup>
                    <ControlLabel>
                        Ingredients
                        {' '}
                    </ControlLabel>
                    <FormControl
                    type="text"
                    placeholder="garlic, chicken"
                    onChange={event=>this.setState({
                        ingreidents: event.target.value
                    })}></FormControl>
                </FormGroup>
                {' '}
                <FormGroup>
                    <ControlLabel>
                        Dish
                    </ControlLabel>
                    {' '}
                    <FormControl
                    type="text"
                    placeholder="adobo"
                    onChange={event => this.setState({
                        dish:event.target.value
                    })}></FormControl>
                </FormGroup>
                {' '}
                <Button onClick={() => this.search()}>Submit</Button>
            </Form>
        );
    }
}
export default connect(null, { setRecipes })(SearchRecipes);