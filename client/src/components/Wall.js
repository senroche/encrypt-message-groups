import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'

import '../App.css';


class Wall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        };
        this.generateMessages = this.generateMessages.bind(this);
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.generateMessages();
    }

    getData() {
        //Sample data
        const arr = [{ name: "john@email.ie", message: "Placeholder placeholder" }, { name: "john@email.ie", message: "Placeholder placeholder" },
        { name: "john@email.ie", message: "Placeholder placeholder" }, { name: "john@email.ie", message: "Placeholder placeholder" },
        { name: "john@email.ie", message: "Placeholder placeholder" }, { name: "john@email.ie", message: "Placeholder placeholder" }]
        /*  var getDatas = axios.get('api-string')
            .then((response) => {
              return response.data;
            })
            .catch(function (error) {
              console.log(error);
              return error;
      
            });
          return getDatas;*/
        return arr;
    }


    // Similar to entities, if I was to work more on this there would be a table component to prevent dupe
    generateMessages() {
        var x = this.getData();
        var arr = [];

        for (var i = 0; i < x.length; i++) {
            var element = (
                <Alert variant="success">
                    <Alert.Heading style={{ fontSize: "1em" }}>{x[i].name}</Alert.Heading>
                    <hr />
                    <p className="mb-0">
                        {x[i].message}
                    </p>
                </Alert>
            )
            arr.push(element);
        }
        this.setState({ posts: arr })

    }


    render() {
        return (
            <div>
                <Container fluid className="tile-glow">
                    <h4> Wall Posts: </h4>
                    <div style={{ height: "400px", width: "400px", overflow: "auto", borderStyle: "solid", borderWeight: "0.1px", borderColor: "#13beb1", padding: "3px" }}>
                        {this.state.posts}
                    </div>
                </Container>
            </div>
        )
    }
}
export default Wall;