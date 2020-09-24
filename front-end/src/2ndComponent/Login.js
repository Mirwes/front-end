import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            
            LoginErrors : ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
      this.setState({
          [event.target.name]: event.target.value
      });
    }

    handleSubmit(event) {
        const {
            email,
            password } = this.state;

        axios.post("https://anytime-fitness-database.herokuapp.com/api/fitness/login",{
            user: {
                email: email,
                password: password
            }
        },
        {withCredentials: true }
        )
        .then(response => {
            console.log("Responsssssse from Login", response);
            if( response.data.logged_in){
                this.props.handleSuccessfulAuth(response.data);
            }            
        })
        .catch(error => {
            console.log("Login error", error);
        });
        console.log("form submitted");
        event.preventDefault();
    }
    render(){
        return (<div className="login-container">
            <form onSubmit={this.handleSubmit}>
                <input className="login" type="email"
                 name="email" 
                 placeholder="email" 
                 value={this.state.email}
                  onChange={this.handleChange} required 
                  />

                 <input className="login" type="password"
                 name="password" 
                 placeholder="password" 
                 value={this.state.password}
                  onChange={this.handleChange}
                   required 
                  />              
                  <button className="login-btn" type="submit">Login</button>
            </form>
            </div>);
    }
}