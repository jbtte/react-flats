import React, { Component } from 'react';

import Flat from './flat.jsx';

class FlatList extends Component {

  renderList = () => {
    return this.props.flatsInfo.map(flat => {
      return <Flat description={flat["name"]}
                   price={flat["price"]}
                   imageUrl={flat["imageUrl"]}
                   currency={flat["priceCurrency"]}
                   location={[flat["lat"], flat["lng"]]}
                   flatPosition = { this.props.flatPosition }
                   key={flat["lat"]}/>
    });
  }

  render() {
    return (
      <div className="flat-list">
        {this.renderList()}
      </div>

    )
  }
}

export default FlatList;
