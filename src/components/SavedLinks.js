import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLinks } from '../actions/links';

class SavedLinks extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getLinks();
  }

  render() {
    let linkItems = this.props.links.map(
      link => (<li><a href={link}>{link}</a></li>));
    return (
      <div className="container-fluid">
        <ul>
          {linkItems}
        </ul>
      </div>
    );
  }

}

const mapDispatchToProps = dispatch => 
  ({
    getLinks: () => dispatch(getLinks())
  });

const mapStateToProps = state => state.linkReducer;

export default connect(mapStateToProps, mapDispatchToProps)(SavedLinks);
