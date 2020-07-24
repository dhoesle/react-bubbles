import React from "react";
import axios from 'axios';
import { axiosWithAuth } from "../utils/axiosWithAuth";


class Login extends React.Component {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  state = {
    credentials: {
      username: '',
      password: ''
    }
  }

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  login = e => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/login', {
        username: 'Lambda School',
        password: 'i<3Lambd4'
      })
      .then(res => {
        console.log("Login -> res.data", res.data.payload)
      })
      .catch(err => console.log(err))
  }


  render() {
    return (
      <>
        <h1>Welcome to the Bubble App!</h1>
        <form onSubmit={this.login}>
            <label>username</label>
            <input
              type='text'
              name='username'
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
            <label>password</label>
            <input
              type='password'
              name='password'
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
            <button>Log in</button>
        </form>
      </>
    );
  }  
};

export default Login;
