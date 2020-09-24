import React, { Component } from 'react';
import Login from './Login';

// import Dashboard from './Dashboard';

export default class Home extends Component {
    handleSuccessfulAuth(data){
        this.props.handleLogin(data);
        this.props.history.push("/dashboard");
    }
    render(){
        return (
            <div>
                <h4 className="login-button"></h4>
                {/* <Dashboard /> */}
        {this.props.loggedInStaus}

                
                <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
            </div>
        );
    }
}