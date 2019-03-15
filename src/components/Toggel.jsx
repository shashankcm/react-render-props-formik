import React, { Component } from "react";

export default class Toggel extends Component {
  state = {
    on: false
  };

  toggel = () => {
    this.setState({
      on: !this.state.on
    });
  };

  render() {
    return (
      <div>
        {this.state.on && this.props.children}
        <button onClick={this.toggel}>Show/Hide</button>
      </div>
    );
  }
}
