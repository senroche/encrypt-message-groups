import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'

import '../App.css';


class Wall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            groupSelect: "all",
            dropdown: [],
            post: ''
        };

        this.handlePostChange = this.handlePostChange.bind(this);
        this.handleSend = this.handleSend.bind(this);
        this.generateMessages = this.generateMessages.bind(this);
        this.generateMessages = this.generateMessages.bind(this);
        this.getData = this.getData.bind(this);
        this.generateSelector = this.generateSelector.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.getGroups = this.getGroups.bind(this);
        this.handleSend = this.handleSend.bind(this);
    }

    componentDidMount() {
        this.generateMessages();
        this.generateSelector();
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

    handleSend(e) {
        e.preventDefault;
        this.console.log("Group", this.state.groupSelect);
        this.console.log("Message", this.state.post);
    }

    handlePostChange(e) {
        this.setState({ post: e.target.value });
    }

    getGroups() {
        var arr = [{ name: "name1" }, { name: "name2" }, { name: "name3" }, { name: "name4" }]
        return arr;
    }

    handleSelect(e) {
        e.preventDefault;
        this.setState({ groupSelect: e.target.name });
    }

    generateSelector() {
        var arr = this.getGroups();
        var x = [];
        for (var i = 0; i < arr.length; i++) {
            var str = arr[i].name;
            var element = (
                <Dropdown.Item name={str} onClick={this.handleSelect}>{arr[i].name}</Dropdown.Item>
            )
            x.push(element);
        }
        this.setState({ dropdown: x })
    }

    // Similar to entities, if I was to work more on this there would be a table component to prevent dupe
    generateMessages() {
        var x = this.getData();
        var arr = [];
        for (var i = 0; i < x.length; i++) {
            var element = (
                <Alert variant='primary'>
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
                    <h4> New Post: </h4>
                    <InputGroup className="mb-3">
                        <DropdownButton
                            as={InputGroup.Prepend}
                            variant="outline-secondary"
                            title="Group"
                            id="input-group-dropdown-1"
                            style={{ borderColor: "#b8daff", color: "#b8daff" }}
                        >{this.state.dropdown}
                        </DropdownButton>
                        <FormControl onChange={this.handlePostChange} aria-describedby="basic-addon1" />
                        <InputGroup.Append>
                            <Button variant="outline-secondary" onClick={this.handleSend}>Post</Button>
                        </InputGroup.Append>
                    </InputGroup>

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