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

    // TODO: add bookmark icon/implement bookmark actions
    // TODO: add comments
    return (
      <div className="card" style={cardStyles}>
        <a href={this.props.story.url}>{this.props.story.title}</a>
        <p>{getHost(this.props.story.url)}</p>
      </div>
    );
  }
}

function getHost(link) {
    var host;

    if (link.indexOf("://") > -1) {
        host = link.split('/')[2];
    }
    else {
        host = link.split('/')[0];
    }

    host = host.split(':')[0];
    host = host.split('?')[0];

    return host;
}

export default Story;
