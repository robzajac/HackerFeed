import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

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
    // TODO handle signin
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

export default SignIn;
