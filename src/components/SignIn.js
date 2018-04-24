import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { loginUser } from '../actions/auth';

class SignIn extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // If  the user is authenticated,
    // change the location to /feed
    if (this.props.store.isAuthenticated) {
      this.props.history.push('/feed');
    }
  }

  componentDidUpdate() {
    // Same as didMount
    if (this.props.store.isAuthenticated) {
      this.props.history.push('/feed');
    }
  }

  signin(e) {
    e.preventDefault();
    let { dispatch } = this.props.store;
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    dispatch(loginUser({
      username,
      password
    }));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={this.signin.bind(this)}>
              <div className="form-group">
                <label>
                  Username:
                </label>
                <input
                  className="form-control"
                  type="text"
                  ref="username"
                />
              </div>
              <div className="form-group">
                <label>
                  Password:
                </label>
                <input
                  className="form-control"
                  type="password"
                  ref="password"
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Sign In"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignIn);
