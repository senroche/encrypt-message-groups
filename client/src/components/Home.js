import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Wall from './Wall'
import AddMemberForm from './AddMemberForm'
import '../App.css';


class Home extends Component {
    constructor(props) {
        super(props);

    }

    //The form information is supposed to see by
    //run 'json-server db.json -w -p 8000' in /server directory
    //go 'http://localhost:8000/intents'
    render() {
        return (
            <Container fluid>
                <Row><Col lg={11}></Col><Button onClick={() => window.location.reload()} style={{ margin: "10px" }}> Log out </Button></Row>
                <Row style={{ padding: "10px" }}>>
                    <Col lg={3}>
                        <Jumbotron fluid style={{ padding: "10px" }}>
                            {/*This is the form where a user will add a member to an existing*/}
                            <AddMemberForm user={this.props.user} />
                        </Jumbotron>
                    </Col>
                    <Col lg={8}>
                        <Wall user={this.props.user} />
                    </Col>
                </Row>
            </Container>

        )
    }
}
export default Home;

