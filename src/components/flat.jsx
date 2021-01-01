import React, { Component } from 'react';

class Flat extends Component {

  handleClick = (event) => {
    this.props.flatPosition(this.props.location[0], this.props.location[1])
  }

  render() {
    return (
      <div className="card"
            style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${this.props.imageUrl}`}}
            onClick={this.handleClick}>
        <div className="card-category">{this.props.price} {this.props.currency}</div>
        <div className="card-description">
          <h2>{this.props.description}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    );
  }
}

export default Flat;
