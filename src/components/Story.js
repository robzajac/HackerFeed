import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadStory } from '../actions/stories';

class Story extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let cardStyles = {
      marginBottom: '40px',
      padding: '10px',
    };

    return (
      <div className="card" style={cardStyles}>
        <p>test</p>
        <p>{this.props.story.title}</p>
        <p>{this.props.story.url}</p>
      </div>
    );
  }
}

export default Story;
