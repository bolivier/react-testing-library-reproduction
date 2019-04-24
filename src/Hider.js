import React from 'react';

export default class Hider extends React.Component {
  state = {
    visible: true
  };
  render() {
    return (
      <div>
        <span>{this.props.text || "hi"}</span>
        <button onClick={() => this.setState({ visible: false })}>hide</button>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
