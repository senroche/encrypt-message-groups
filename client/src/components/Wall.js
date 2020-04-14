import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'

import '../App.css';
const axios = require('axios').default;

class Wall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            groupSelect: "Group",
            dropdown: [],
            post: ''
        };

        this.handlePostChange = this.handlePostChange.bind(this);
        this.handleSend = this.handleSend.bind(this);
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
        var x = axios.get('http://localhost:5000/api/post/' + this.props.user)
            .then((response) => {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
                return error;
            });
        return x;
    }

    handleSend(e) {
        e.preventDefault;
        if (this.state.groupSelect === "Group") {
            alert("Must select group!");
        } else {
            axios.post('http://localhost:5000/api/post', {
                group: this.state.groupSelect,
                author: this.props.user,
                content: this.state.post,
            })
                .then(function (response) {
                    console.log(response);
                    alert("Post success!");
                    this.setState({ post: '' });
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    handlePostChange(e) {
        this.setState({ post: e.target.value });
    }

    handleSelect(e) {
        e.preventDefault;
        this.setState({ groupSelect: e.target.name });
    }

    getGroups() {
        var str = 'http://localhost:5000/api/groups/' + this.props.user;
        var x = axios.get(str)
            .then((response) => {
                console.log("Anything", response);
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
                return error;
            });
        return x;
    }


    generateSelector() {
        this.getGroups()
            .then((response) => {
                var x = [];
                for (var i = 0; i < response.length; i++) {
                    var str = response[i];
                    console.log(str);
                    var element = (
                        <Dropdown.Item name={str} onClick={this.handleSelect}>{str}</Dropdown.Item>
                    )
                    x.push(element);
                }
                this.setState({ dropdown: x });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    generateMessages() {
        this.getData()
            .then((response) => {
                var arr = [];
                var x = response;
                for (var i = x.length - 1; i > -1; i--) {
                    var element = (
                        <Alert variant='primary'>
                            <Alert.Heading style={{ fontSize: "1em" }}>{x[i].author}</Alert.Heading>
                            <p style={{ fontSize: "1.1em" }} className="mb-0">
                                {x[i].content}
                            </p>
                            <hr />
                            <p className="mb-0">
                                @ {x[i].group}Date :,{x[i].date}
                            </p>
                            <p>{"Group : @" + x[i].group_name}</p>
                        </Alert>
                    )
                    arr.push(element);
                }
                this.setState({ posts: arr })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    getGroupData() {
        this.getGroups()
            .then((response) => {

                var x = [];
                for (var i = 0; i < response.length; i++) {
                    var str = "http://localhost:5000/api/group/" + response[i];
                    axios.get(str)
                        .then((response) => {
                            console.log("God", response);
                            x = x.push(response);
                        })
                        .catch(function (error) {
                            console.log(error);
                            return error;

                        });
                }
                return x;
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    //No time to implement the group selector table
    /* generateTable() {
         this.getGroupData()
             .then((response) => {
                 var x = response;
                 var arr = [];
                 //Push each group
                 console.log(response);
                 for (var i = 0; i < x.length; i++) {
                     var mem = []
                     //Push each member to an array element
                     for (var j = 0; j < x.members.length; j++) {
                         var elem = (
                             <p>- {x.data.members[j]}</p>
                         )
                         mem = mem.push(elem);
                     }
                     var element = (
                         <div>
                             <div className="custom-control custom-checkbox">
                                 <input type="checkbox" className="custom-control-input" id={x[i]._id} name={x[i].name}></input>
                                 <label className="custom-control-label" for={x.data[i]._id}> {x[i].name} </label>
                                 {mem}
                             </div>
                         </div>
                     )
                     arr.push(element);
                 }
                 this.setState({ tableArray: arr })
             })
             .catch(function (error) {
                 console.log(error);
             });
 
 
     }
 
     .then((response) => {
         var x = [];
         for (var i = 0; i < response.length; i++) {
             var str = response[i];
             console.log(str);
             var element = (
                 <Dropdown.Item name={str} onClick={this.handleSelect}>{str}</Dropdown.Item>
             )
             x.push(element);
         }
         this.setState({ dropdown: x });
     })
     .catch(function (error) {
         console.log(error);
     });
 }*/


    render() {

        return (
            <div>
                <Container fluid className="tile-glow">
                    <h4> Wall Posts: </h4>
                    <div style={{ width: "100%", height: "500px", overflow: "auto", borderStyle: "solid", borderWeight: "0.1px", borderColor: "#1367be", padding: "3px" }}>
                        {this.state.posts}
                    </div>
                    <div style={{ margin: "10px" }}>
                        <InputGroup className="mb-3">
                            <DropdownButton
                                as={InputGroup.Prepend}
                                variant="outline-secondary"
                                title={this.state.groupSelect}
                                id="input-group-dropdown-1"
                                style={{ borderColor: "#b8daff", color: "#b8daff" }}>
                                {this.state.dropdown}
                            </DropdownButton>
                            <FormControl onChange={this.handlePostChange} value={this.state.post} aria-describedby="basic-addon1" />
                            <InputGroup.Append>
                                <Button variant="outline-primary" onClick={this.handleSend}>Post</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </div>
                </Container>
            </div>
        )
    }
}
export default Wall;