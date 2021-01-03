import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SignIn extends Component {
  state = {
    username: "",
    submittedUsername: ""
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    if (name === "username") {
      this.setState({
        [name]: value
      });
    }
  };

  onSubmit = event => {
    event.preventDefault();
    const username = this.state;
    if (username !== "") {
      this.setState({
        submittedUsername: username
      });
    }
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

        {(this.state.submittedUsername !== "")
            ?
          `hello ${this.state.username}`
            :
          <p/>
        }
      </div>
    );
  }
}

const SignInForm = ({username, password, confirmPassword, onChange, onSubmit}) => {
  return (
    <div>

      <form className="form-inline" onSubmit={onSubmit}>
        <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={username}
            name="username"
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
