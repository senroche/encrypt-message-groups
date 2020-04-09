import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jump from 'react-reveal/Jump';
import Form from 'react-bootstrap/Form'
import '../App.css';

class LoginForm extends Component {

  render() {
    return (
      <Form className="login" onSubmit={this.props.onSubmit}>
        <div className="form-group">
          <Jump>
          </Jump>
          <h6>Login.</h6>
          <input type="username" required className="form-control"
            name="username"
            placeholder="Email"
            value={this.props.username}
            onChange={this.props.onChange} />
        </div>
        <div>
          <input type="password" className="form-control" id="lol"
            name="password"
            placeholder="Password"
            value={this.props.password}
            onChange={this.props.onChange} />
        </div>
        <button type="submit" className="btn btn-primary" style={{ margin: "10px" }}>Log In</button>
      </Form>

    )
  }
}

export default LoginForm;