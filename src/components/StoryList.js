import React, { Component } from 'react';
import { connect } from 'react-redux';

import Story from './Story';

class StoryList extends Component {

  componentDidMount() {
    this.props.loadStories();
  }

  render() {
    let stories = this.props.storyIDs.map((id) => (
      <Story id={id} />
    ));
    
    return (
      <div className="col-md-12">
        { stories }
      </div>
    );
  }
}

const mapStateToProps = state => state.storyListReducer ;

export default connect(
  mapStateToProps,
  null
)(StoryList);
