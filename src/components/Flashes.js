import React, { Component } from 'react';
import { connect } from 'react-redux';


class Flashes extends Component {
  constructor() {
    super();
  }

  render() {
    let messages = this.props.messages.map((i, idx) => {
      let alertInfo = 'alert ' + (i.messageType === 'error' ? 'alert-danger' : 'alert-info');
      return (
        <div
          className={alertInfo}
          key={idx}
          id={idx}
          onClick={() => this.props.dismiss(idx)}
        >
          { i.message.toString() }. Click to dismiss.
        </div>
      );
    });
    return (
      <div>
        { messages }
      </div>
    );
  }
}

const mapStateToProps = state => state.messageReducer;

const mapDispatchToProps = dispatch => ({
  dismiss: (idx) => {
    dispatch({
      type: 'DISMISS',
      idx,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Flashes);
