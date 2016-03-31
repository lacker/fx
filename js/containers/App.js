import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 100,
      height: 100,
    };
  }

  render() {
    var aspectratio = this.state.width / this.state.height;
    var cameraprops = {fov : 75, aspect : aspectratio,
      near : 1, far : 5000,
      position : new THREE.Vector3(0,0,600),
      lookat : new THREE.Vector3(0,0,0)};

    return (
      <Renderer
        width={this.state.width}
        height={this.state.height}>
        <Scene
          width={this.state.width}
          height={this.state.height}
          camera="maincamera">
        </Scene>
      </Renderer>
    );
  }
}

// mapStateToProps defines which parts of the redux state are
// placed on props when App is rendering.
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
