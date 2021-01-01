import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from './marker.jsx';

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 48.8584,
      lng: 2.2945
    },
    zoom: 12
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:""}} //check .env file
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >

        <Marker
          lat={this.props.coord[0]}
          lng={this.props.coord[1]}
          name="My Marker"
          color="blue"
        />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
