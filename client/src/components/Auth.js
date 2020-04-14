import React, { Component } from 'react';
import LoginForm from './LoginForm';

import Home from './Home';


const axios = require('axios').default;

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            submit: false,
            formState: true
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChanges = this.handleChanges.bind(this);
        this.createUser = this.createUser.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
    }

    createUser() {
        axios.post('http://localhost:5000/api/user', {
            username: this.state.email,
            password: this.state.password
        })
            .then((response) => {
                console.log(response);
                alert("You didn't have an account so we created a new one!");
                this.setState({ submit: true });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleSubmit(e) {
        e.preventDefault();
        var str = 'http://localhost:5000/api/user/';

        // Login
        if (this.state.formState === true) {
            str = str + this.state.email + '/' + this.state.password;
            axios.get(str)
                .then((response) => {
                    if (response.data === true) {
                        this.setState({ submit: response.data });
                    }
                    else {
                        alert("Incorrect credentials!");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        // Register
        else {
            axios.post(str, {
                username: this.state.email,
                password: this.state.password
            })
                .then((response) => {
                    console.log(response);
                    alert("You now have an account!");
                    this.setState({ submit: true });
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    handleFormChange(e) {
        e.preventDefault();
        if (this.state.formState === true) {
            this.setState({ formState: false });
        }
        else {
            this.setState({ formState: true });
        }
    }


    handleChanges(event) {
        if (event.target.name === "username") {
            this.setState({ email: event.target.value });
        }
        else if (event.target.name === "password") {
            this.setState({ password: event.target.value });
        }
        else {
            console.log('Trying to update:', event.target.name, 'to', event.target.value);
        }
    }

    render() {
        if (this.state.submit) {
            return <Home user={this.state.email} />
        }
        return (
            <LoginForm onChange={this.handleChanges} onSubmit={this.handleSubmit} formState={this.state.formState} formChange={this.handleFormChange} />
        )
    }
}

export default Auth;