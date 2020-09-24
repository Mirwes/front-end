import React, { Component } from 'react';
// import React, { useState } from 'react';

import axios from 'axios';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            role: "client",
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
            username,
            password,
            role,
         } = this.state;

        axios.post("https://anytime-fitness-database.herokuapp.com/api/fitness/login",{
            
                username,
                password,
                role,
        
        }
       
        )
        .then(response => {
            localStorage.setItem('token', response.data.token)
            console.log("Responsssssse from Login", response);
            if( response.data.logged_in){
                this.props.handleSuccessfulAuth(response.data);
            }            
        })
        .catch((error) => {
            console.log("Login error", error);
        });
        console.log("form submitted");
        event.preventDefault();
    }
    render(){
        return (<div className="login-container">
            <form onSubmit={this.handleSubmit}>
                <input className="login" type="username"
                 name="username" 
                 placeholder="username" 
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














// const Login = () => {

// export default class Login extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         username: "",
    //         password: "",
            
    //         LoginErrors : ""
    //     }

    // const initialState = {
    //     username: "",
    //     password: "",
        
    // }

    // const [user, setUser] = useState(initialState);
    // const[post, setPost] = useState([]);

    

    // }

    // const handleChange =(event) =>{
    //     const newData = {
    //         ...user,
    //         [event.target.name] : event.target.value
    //     }
    //     setUser(newData)
    // }

  

    // function submitForm (event){
    //     event.preventDefault()
    //     console.log(user)
    

    //     axios
    //     .post("https://anytime-fitness-database.herokuapp.com/api/fitness/login",user)
        // {
        //     user: {
        //         username: username,
        //         password: password
        //     }
        // },
        // {withCredentials: true }
        // )
    //     .then(response => {
    //         console.log("Responsssssse from Login", response);
    //         if( response.data.logged_in){
    //             this.props.handleSuccessfulAuth(response.data);
    //         }            
    //     })
    //     .catch(error => {
    //         console.log("Login error", error);
    //     });
    //     console.log("form submitted");
    //     event.preventDefault();
    // }

    // .then(response => {
    //     console.log("reponseeeeeeee", response)
    //     setPost(response.data);
    //     setUser(initialState)
    // })
    // .catch(error => {
    //     console.log(error);
    // })
  

    // }
    

    // login = event => {

       

    //     event.preventDefault();
    //     axios
    //         .post('/auth/login', this.state.credentials)
    //         .then(results => {
    //             localStorage.setItem('token', results)
    //             console.log('Login.js', results)
    //             this.props.history.push('/sleep-tracker')
    //         })
    //         .catch(error => {
    //             console.log('Error is: ', error)
    //         })
    // }
  







