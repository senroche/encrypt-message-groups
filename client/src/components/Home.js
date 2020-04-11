import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Wall from './Wall'
import AddMemberForm from './AddMemberForm'
import '../App.css';


//const axios = require('axios').default;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            privateKey: ''
        };

        this.generateTable = this.generateTable.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    //The form information is supposed to see by
    //run 'json-server db.json -w -p 8000' in /server directory
    //go 'http://localhost:8000/intents'
    render() {
        return (
            <div>
                <Row style={{ padding: "20px" }}>
                    <Col lg={3}>
                        <Container fluid className="tile-glow">
                            <h4> Intents: </h4>
                            <div style={{ height: "70%", overflow: "auto", borderStyle: "solid", borderWeight: "0.1px", borderColor: "#13beb1", padding: "3px" }}>
                                <Wall />
                            </div>
                        </Container>
                    </Col>

                    <Col lg={7}>
                        <Jumbotron fluid style={{ width: "50%", padding: "20px" }}>
                            {/*This is the form where a user will add a member to an existing*/}
                            <AddMemberForm />
                        </Jumbotron>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Home;

