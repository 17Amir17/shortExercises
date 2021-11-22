import React from 'react';
import CallNowButton from './CallNowButton';

export default class HotelPage extends React.Component {
  render() {
    return (
      <div className="page">
        <img className="page-image" src={this.props.img} alt=""></img>
        <p>{this.props.name}</p>
        <p>
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit..." "There is no one who loves pain
          itself, who seeks after it and wants to have it, simply because it is
          pain..."
        </p>
        <p>{this.props.number}</p>
        <CallNowButton number={this.props.number} />
      </div>
    );
  }
}
