import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export default function requiresAuth(Component, props) {
  class AuthHOC extends React.Component {

    componentDidMount() {
      this.checkIfLoggedIn();
    }

    componentDidUpdate() {
      this.checkIfLoggedIn();
    }

    checkIfLoggedIn() {
      const isAuthenticated = this.props.store.isAuthenticated;
      if (!isAuthenticated) {
        this.props.store.rejectLogin();
        this.props.history.push('/signin');
      }
    }

    render() {
      return (
        <div>
          { this.props.store.isAuthenticated ? <Component {...this.props} /> : null }
        </div>
      );
    }
  }

  return withRouter(AuthHOC);
}
