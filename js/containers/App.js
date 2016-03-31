import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (<div>
      <h1>Hello react-three world</h1>
    </div>);
  }
}

// mapStateToProps defines which parts of the redux state are
// placed on props when App is rendering.
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
