import React, {Component} from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

let uuid = require('uuid');

let config = {
    apiKey: "AIzaSyAIg5yYVIMU4GDQZQhw95Y72RsG-xYkc98",
    authDomain: "survey-project-24d1c.firebaseapp.com",
    databaseURL: "https://survey-project-24d1c.firebaseio.com",
    projectId: "survey-project-24d1c",
    storageBucket: "survey-project-24d1c.appspot.com",
    messagingSenderId: "141037749684"
  };
  firebase.initializeApp(config);

class Survey extends Component{

    /**
     * REMEMBER TO USE REALTIME FIREBASE DATABASE INSTEAD OF
     * CLOUD FIRESTONE WHICH IS IN BETA
     */
    nameSubmit = (event) =>{
        event.preventDefault();
        let studentName = this.refs.name.value;
        this.setState({studentName}, () =>{
            console.log(this.state);
        });
    }

    answerSelected = (event)=>{
        const answers = this.state.answers;
        if(event.target.name === 'answer1'){
            answers.answer1 = event.target.value;
          } else if(event.target.name === 'answer2'){
            answers.answer2 = event.target.value;
          } else if(event.target.name === 'answer3'){
            answers.answer3 = event.target.value;
          }

        this.setState({answers: answers}, () => {
            console.log(this.state);
        });
    }

    questionSubmit = (event) =>{
        event.preventDefault();
        firebase.database().ref('Survey/' + this.state.uid).set({
            studentName: this.state.studentName,
            answers: this.state.answers
        });
        this.setState({
            isSubmitted: true
        });
    }

    constructor(props){
        super(props);

        this.state = {
            uid: uuid.v1(),
            studentName: '',
            answers: {
                answer1: '',
                answer2: '',
                answer3: '',
            },
            isSubmitted: false
        };
        this.nameSubmit = this.nameSubmit.bind(this);
        this.answerSelected = this.answerSelected.bind(this);
        this.questionSubmit = this.questionSubmit.bind(this);
    }
    render(){
        let studentName;
        let questions;

        if(this.state.studentName === '' && this.state.isSubmitted===false){
            studentName = <div>
                <h1>What is your name?</h1>
                <form onSubmit={this.nameSubmit}>
                    <input className="namy" type="text" placeholder="enter your name" ref="name"/>
                </form>
            </div>;
            questions = '';
        } else if (this.state.studentName !== '' && this.state.isSubmitted===false){
            studentName = <h1> Welcome to the Survey, {this.state.studentName}</h1>;
            questions = <div>
            <h2>Please Answer Some Questions: </h2>
                <form onSubmit={this.questionSubmit}>
                <div className="card">
                       <label>What kind of ice cream do you like?</label>                            <br />
                        <input type="radio" name="answer1" value="Vanilla" onChange={this.answerSelected}/> Vanilla
                        <input type="radio" name="answer1" value="Chocolate" onChange={this.answerSelected}/> Chocoloate
                        <input type="radio" name="answer1" value="Mix" onChange={this.answerSelected}/> Mixed
                </div>
                <div className="card">
                    <label>What are you?</label>                            <br />
                     <input type="radio" name="answer2" value="student" onChange={this.answerSelected}/> student
                     <input type="radio" name="answer2" value="in-job" onChange={this.answerSelected}/> in-job
                     <input type="radio" name="answer2" value="idiot-sandwich" onChange={this.answerSelected}/> Idiot Sandwich
                 </div>
                 <div className="card">
                    <label>Is Online Learning helpful?</label>                            <br />
                    <input type="radio" name="answer3" value="yes" onChange={this.answerSelected}/> Yes
                    <input type="radio" name="answer3" value="no" onChange={this.answerSelected}/> No
                    <input type="radio" name="answer3" value="maybe" onChange={this.answerSelected}/> Maybe
                </div>
                <button className="feedback-button" type="submit" value="submit" />
                </form>
            </div>
        } else if(this.state.isSubmitted === true && this.state.studentName !== null){
            studentName = <h1>Thanks, {this.state.studentName}</h1>

        }
        return(
            <div>
            {studentName}
            ----------------
            {questions}
            </div>
        );
    }
}

export default Survey;