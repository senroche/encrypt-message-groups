import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const axios = require('axios');
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    // Go to API and check testAPI route for a response
    callAPI() {
        axios.get("http://localhost:5000/test")
            .then((response) => {
                console.log(response.data);
                this.setState({ apiRespone: response.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    componentDidMount() {
        this.callAPI();
        e)
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">{this.state.apiResponse}</p>
        </div>
        );
    }
}

export default App;
