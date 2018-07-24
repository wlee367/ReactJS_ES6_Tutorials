import React, { Component } from 'react';
import Course from './Course';
class CourseSales extends Component {

    sumOfPrice(price){
        this.setState({total: this.state.total + price});
    }


    constructor(props){
        super(props);

        this.state = {
            total: 0,
        };
        this.sumOfPrice = this.sumOfPrice.bind(this);
    }


    render() {
        console.log(this.props.items)
        const courses = this.props.items.map((item, index)=>{
            return <Course
            name={item.name}
            price={item.price}
            key={index}
            sumOfPrice = {this.sumOfPrice}
            active={item.active}
            />
        });
        return (
            <div>
                <h1>You can buy courses: </h1>
                    <div id="courses">
                        {courses}
                        <p id="total">Total: <b>{this.state.total}</b></p>
                    </div>
            </div>
        );
    }
}



export default CourseSales;