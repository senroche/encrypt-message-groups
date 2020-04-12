import React, { Component } from 'react';
import LoginForm from './LoginForm';
import { Link } from 'react-router-dom';
import Home from './Home';
import AddMemberForm from './AddMemberForm';

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            submit: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChanges = this.handleChanges.bind(this);
    }

    async handleSubmit() {

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
            return <Home />
        }
        return (
            <LoginForm onChange={this.handleChanges} onSubmit={this.handleSubmit} />
        )
    }
}

export default Auth;