import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jump from 'react-reveal/Jump';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import '../App.css';

class LoginForm extends Component {

  render() {
    return (

      <Form className="login" onSubmit={this.props.onSubmit}>
        <div className="form-group">
          <Jump>
            {this.props.formState ? (
              <h3>Login.</h3>
            ) : (
                <h3>Register.</h3>
              )}
          </Jump>

          <input type="userame" required className="form-control"
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
        {this.props.formState ? (
          <button type="submit" className="btn btn-primary" style={{ margin: "10px" }}>Log In</button>
        ) : (
            <button type="submit" className="btn btn-primary" style={{ margin: "10px" }}>Register</button>
          )}
        <div>
          {this.props.formState ? (
            <Button variant="link" onClick={this.props.formChange}>Click here to register</Button>
          ) : (
              <Button variant="link" onClick={this.props.formChange}>Already registered? Click here to sign in.</Button>
            )}
        </div>
      </Form>

    )
  }
}

export default LoginForm;