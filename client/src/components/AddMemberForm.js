import React, { useState } from 'react';
import MemberInputs from './MemberInput.js';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
//const axios = require('axios').default; 

const AddMemberForm = () => {

    const [nameState, setNameState] = useState({
        name: '',
    });

    const handleNameChange = (e) => setNameState({
        ...nameState,
        name: e.target.value,
    });

    const blankMember = { member: '' };
    const [memberState, setmemberState] = useState([
        { ...blankMember },
    ]);

    const addMember = () => {
        setmemberState([...memberState, { ...blankMember }]);
    };

    const handleMemberChange = (e) => {
        const updatedMembers = [...memberState];
        updatedMembers[e.target.dataset.idx] = e.target.value;
        setmemberState(updatedMembers);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        /*axios.post('http://localhost:5000/api/intents', {
          name: nameState.name,
          members: memberState,
        })
        .then(function (response) {
          console.log(response);
          window.location.reload(true);
        })
        .catch(function (error) {
          console.log(error);
        });*/
    }

    const handleCancel = (e) => {
        e.preventDefault();
        window.location.reload(true);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <h4 style={{ paddingBottom: "6px" }}>Add to group</h4>
            <h6 style={{ paddingBottom: "6px" }}>Create a group or add a user to an existing group.</h6>


            <Form.Group controlId="Member">
                <Form.Label>Group Name</Form.Label>
                <Form.Control type="text" placeholder="Enter a group name"
                    name="intent"
                    onChange={handleNameChange}
                />

            </Form.Group>
            <Form.Group>
                <Form.Check
                    type="radio"
                    label="Existing group"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                />
                <Form.Check
                    type="radio"
                    label="New group"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                />
            </Form.Group>


            <Form.Group controlId="Member.Description">
                <Form.Label>People
                <Button variant="secondary" size="sm" style={{ marginLeft: "5px", lineHeight: "1.3", borderRadius: "15px" }} value="Add another member"
                        onClick={addMember}>
                        +
              </Button></Form.Label>

            </Form.Group>

            {
                memberState.map((val, idx) => (
                    <MemberInputs
                        key={`memb-${idx}`}
                        idx={idx}
                        memberState={memberState}
                        handleMemberChange={handleMemberChange}
                    />
                ))
            }
            <Row>
                <Col><button onClick={handleSubmit} type="submit" className="btn btn-primary">Add</button></Col>
                <Col> <Button onClick={handleCancel} variant="outline-danger" style={{ float: "right", margin: "30px" }}>Cancel</Button></Col>
            </Row>
        </Form>

    );
};

export default AddMemberForm;