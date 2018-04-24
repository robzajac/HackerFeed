import React, { Component } from 'react';
import { connect } from 'react-redux';

class Story extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { id } = this.props;
    let cardStyles = {
      marginBottom: '40px',
      padding: '10px',
    };

    return (
      <div className="card" style={cardStyles}>
        <p>{id}</p>
      </div>
    );
  }
}


export default Story;
