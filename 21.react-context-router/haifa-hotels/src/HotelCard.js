import React from 'react';

export default class HotelCard extends React.Component {
  render() {
    return (
      <li className="card">
        <img className="image" src={this.props.img} alt=""></img>
        <span className="hotel-name">{this.props.name}</span>
      </li>
    );
  }
}
