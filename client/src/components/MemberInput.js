import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form'

const MemberInputs = ({ idx, memberState, handleMemberChange }) => {
    const memId = `mem-${idx}`;



    return (
        <div key={`mem-${idx}`}>

            <Form.Control type="text" placeholder={`Member ${idx + 1}`}
                name={memId}
                data-idx={idx}
                id={memId}
                className="member"
                value={memberState[idx].name}
                onChange={handleMemberChange}
            />
        </div>
    );
};

MemberInputs.propTypes = {
    idx: PropTypes.number,
    memberState: PropTypes.array,
    handleMemberChange: PropTypes.func,
};

export default MemberInputs;