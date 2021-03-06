import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SignIn extends Component {
  state = {
    email: "",
    submittedEmail: ""
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    if (name === "email") {
      this.setState({
        [name]: value
      });
    }
  };

  onSubmit = event => {
    event.preventDefault();
    const email = this.state;
    if (email !== "") {
      this.setState({
        submittedEmail: email
      });
    }

    const url = 'https://fep5kkldzj.execute-api.us-west-2.amazonaws.com/prod/';
    fetch(url)
      .then(response => response.json())
      .then(data => console.log(data));

    // Example GET method implementation:
    /*async function getData(url = '') {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
              'Access-Control-Allow-Origin': '*'
            }
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }

    const url = 'https://2imibo4i59.execute-api.us-west-2.amazonaws.com/prod/';
    getData(url)
      .then(data => {
        console.log(data); // JSON data parsed by `data.json()` call
      })
      .catch(error => {
        console.log(error);
      });*/
  };

  render() {
    return (
      <div>
        <p>
          Sign in here.
        </p>
        <SignInForm
          onSubmit={this.onSubmit}
          onChange={this.handleInputChange}
        />

        {(this.state.submittedEmail !== "")
            ?
          `hello ${this.state.email}`
            :
          <p/>
        }
      </div>
    );
  }
}

const SignInForm = ({email, password, confirmPassword, onChange, onSubmit}) => {
  return (
    <div>

      <form className="form-inline" onSubmit={onSubmit}>
        <input
            type="text"
            className="form-control"
            placeholder="Email"
            value={email}
            name="email"
            onChange={onChange}
        />

        <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            name="password"
            onChange={onChange}
        />

        <button
            type="submit"
            className="btn btn-primary mb-2 pxy-4">
            Sign in
        </button>
      </form>

    </div>
  );
}

SignInForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SignIn;
