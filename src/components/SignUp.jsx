import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../actions/auth';

class SignUp extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // If  the user is authenticated,
    // change the location to /feed
    if (this.props.isAuthenticated) {
      this.props.history.push('/feed');
    }
  }

  componentDidUpdate() {
    // Same as didMount
    if (this.props.isAuthenticated) {
      this.props.history.push('/feed');
    }
  }

  signup(e) {
    e.preventDefault();
    let { dispatch } = this.props;
    let username = this.refs.rusername.value;
    let password = this.refs.rpassword.value;
    let name = this.refs.name.value;
    dispatch(registerUser({
      username,
      password,
      name
    }));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={this.signup.bind(this)}>
              <div className="form-group">
                <label>
                  Username:
                </label>
                <input
                  className="form-control"
                  type="text"
                  ref="rusername"
                />
              </div>
              <div className="form-group">
                <label>
                  Password:
                </label>
                <input
                  className="form-control"
                  type="password"
                  ref="rpassword"
                />
              </div>
              <div className="form-group">
                <label>
                  Name:
                </label>
                <input
                  className="form-control"
                  type="text"
                  ref="name"
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Sign Up"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { authReducer } = state;
  return authReducer;
}

export default withRouter(connect(mapStateToProps)(SignUp));
