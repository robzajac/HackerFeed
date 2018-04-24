import React, { Component } from 'react';
import { getStoryIDs } from '../actions/stories';
import { connect } from 'react-redux';

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
  // TODO change this to loading actual stories
  loadStories: () => dispatch(getStoryIDs())
});

export default connect(null, mapDispatchToProps)(Feed);
