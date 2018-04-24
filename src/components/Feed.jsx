import React, { Component } from 'react';

class Feed extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h2>News Feed</h2>
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
  loadStories: () => dispatch(loadStories()),
});

export default connect(null, mapDispatchToProps)(Feed);
