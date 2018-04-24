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
import Logout from './Logout';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <Navbar />
        <div>
          <Switch>
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/logout" component={AuthHOC(Logout)} />
            <Route path="/feed" component={AuthHOC(Feed)} /> 
            <Route component={SignIn} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
