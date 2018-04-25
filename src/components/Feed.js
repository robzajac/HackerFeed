import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadStories } from '../actions/stories';

import StoryList from './StoryList';

class Feed extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <StoryList loadStories={this.props.loadStories} />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loadStories: () => dispatch(loadStories())
});

export default connect(null, mapDispatchToProps)(Feed);
