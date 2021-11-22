import React from 'react';

export default class CallNowButton extends React.Component {
  call = () => {
    console.log('Calling ' + this.props.number);
  };
  render() {
    return <button onClick={this.call}>Call Now!</button>;
  }
}
