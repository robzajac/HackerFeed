import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadStory } from '../actions/stories';
import { saveLink } from '../actions/links';

class Story extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let cardStyles = {
      marginBottom: '40px',
      padding: '10px',
    };

    // TODO: add comments
    // TODO: add date/time
    // TODO: add rank (number of upvotes)
    let url = this.props.story.url ? getHost(this.props.story.url) : "";
    let saveButton = this.props.story.url ?
      (<a onClick={() => this.props.saveLink(this.props.story.url)} className="btn btn-primary">
        Save link
      </a>) : "";
    return (
      <div className="card" style={cardStyles}>
        <a href={this.props.story.url}>{this.props.story.title}</a>
        <p>{url}</p>
        {saveButton}
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

const mapDispatchToProps = dispatch =>
  ({
    saveLink: link => dispatch(saveLink(link)),
  });

export default connect(null, mapDispatchToProps)(Story);
