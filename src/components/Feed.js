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
      <div className="container" style={{'margin-left': '0px'}}>
        <StoryList loadStories={this.props.loadStories} />        
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loadStories: () => dispatch(loadStories())
});

export default connect(null, mapDispatchToProps)(Feed);
