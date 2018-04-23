import React, { Component } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import Navbar from './Navbar';
import SignIn from './SignIn';
import SignUp from './SignUp';

class App extends Component {
  constructor(props) {
    super(props);
  }

  // TODO check for authenticatiion in default route, direct to feed if auth'd
  render() {
    return (
      <div className="container-fluid">
        <Navbar store={this.props.store} />
        <Switch>
          <Route store={this.props.store} path="/signin"
            render={() => <SignIn store={this.props.store} />}
          />
          <Route store={this.props.store} path="/signup"
            render={() => <SignUp store={this.props.store} />}
          />
          
          <Route store={this.props.store} render={() => <SignIn store={this.props.store} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
