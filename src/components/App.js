import React, { Component } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import Navbar from './Navbar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Feed from './Feed';
import AuthHOC from './AuthHOC';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <Navbar />
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/feed" 
            render={() => this.props.store.isAuthenticated ? 
              <Feed store={this.props.store} /> : 
              <SignIn store={this.props.store} />} />
          
          <Route render={() => <SignIn store={this.props.store} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
