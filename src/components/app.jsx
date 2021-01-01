import React, { Component } from 'react';

import flats from '../../data/flats.js';
import FlatList from './flat-list.jsx';
import SimpleMap from './map.jsx';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      lat: 48.8584,
      long: 2.2945
    }
  }

  flatPosition = (lattitude, longitude) => {
    this.setState({
      lat: lattitude,
      long: longitude
    });
  }



  render() {

    return (
      <div className="container">
        <FlatList flatsInfo = { flats } flatPosition = { this.flatPosition }/>
        <div className="map-container">
          <SimpleMap coord = { [this.state.lat, this.state.long] }/>
        </div>
      </div>
    );
  }
}

export default App;
