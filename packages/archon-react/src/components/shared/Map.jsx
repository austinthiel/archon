import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Map extends Component {
  constructor(props) {
    super(props);
    this.onScriptLoad = this.onScriptLoad.bind(this);
  }

  onScriptLoad() {
    const map = new window.google.maps.Map(
      document.getElementById(this.props.id),
      this.props.options
    );
    this.props.onMapLoad(map);
  }

  componentDidMount() {
    if (!window.google) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = `https://maps.google.com/maps/api/js?key=AIzaSyAdeZqPt4lhr881sXyQmjddULBWniFnp5c`;
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
      // Below is important.
      //We cannot access google.maps until it's finished loading
      s.addEventListener('load', () => {
        this.onScriptLoad();
      });
    } else {
      this.onScriptLoad();
    }
  }

  render() {
    return <div style={{ width: '100%', height: '100%' }} id={this.props.id} />;
  }
}

export default Map;
