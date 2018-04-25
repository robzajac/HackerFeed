import React, { Component } from 'react';
import { connect } from 'react-redux';

import Story from './Story';

class StoryList extends Component {

  componentDidMount() {
    this.props.loadStories();
  }

  render() {
    let stories = [];

    for (var i = 0; i < this.props.stories.length; i++) {
      stories.push(<Story story={this.props.stories[i]} />);
    }

    return (
      <div className="col-md-12">
        { stories }
      </div>
    );
  }
}

const mapStateToProps = state => state.storyListReducer;

export default connect(
  mapStateToProps,
  null
)(StoryList);
