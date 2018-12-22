import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.loginUser(this.state);
  };

  render() {
    return (
      <section className={`login-form ${this.props.status}`}>
        <form
          onSubmit={e => {
            this.handleSubmit(e);
          }}
        >
          <input
            placeholder="email"
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <input
            placeholder="password"
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <button>Login</button>
        </form>
        <button onClick={this.props.landingChange}>Sign Up</button>
      </section>
    );
  }
}

export default Login;
